import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AdultsService } from '../../../../adults/src/app/adults/adults.service';
import { ForumService } from '../../../forum/forum.service';
import { SearchDataModel } from '../../../models/search-data-model';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';
import { CommonService } from '../../../services/common.service';
import { OnboardingService } from '../../../services/onboarding.service';

@Component({
  selector: 'app-search-popular-items',
  templateUrl: './search-popular-items.page.html',
  styleUrls: ['./search-popular-items.page.scss'],
})
export class SearchPopularItemsPage implements OnInit {
  searchData: SearchDataModel;
  searchinp:string='';
  search: string = "";
  totalRecords: number = 0;
  learningSearchRecords: number = 0;
  forumSearchRecords: number = 0;
  tabName: string = 'Learning';
  post: any;
  iframe: any;
  UserID: any;
  jrList: any = [];
  jrListC: any = [];
  activereply;
  replyflag = false;
  PostComment: string = ''
  public qrList: any
  public userId = 100
  feelBetterNowTopic: string = '';
  isAdults: boolean = true;
  enableBlogViewMore: boolean = false;
  enableShortViewMore: boolean = false;
  enableEventsViewMore: boolean = false;
  enableStoryViewMore: boolean = false;
  enableModuleViewMore: boolean = false;
  enablePodcastViewMore: boolean = false;
  enableAudioMedViewMore: boolean = false;
  enableMLMViewMore: boolean = false;
  enableSoundscapesViewMore: boolean = false;
  isSubscriber = false;
  storyFreeMap: { [key: number]: boolean } = {};
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';


  searchDataDup: any;
  searchResult = [];
  public moduleList = [];
  filterApplied =  true;
  isLoading: boolean = false;
  constructor(private commonService: CommonService,
    private sanitizer: DomSanitizer,
    private serivce: ForumService,
    private router: Router,
    private route: ActivatedRoute,
    private onboardingService: OnboardingService,
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    this.toggleBodyScroll(false);
    this.isSubscriber = SharedService.isSubscriber();

    this.search = decodeURIComponent(this.route.snapshot.paramMap.get('word'))
    let rem = localStorage.getItem('remember');
    if (!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.UserID = JSON.parse(localStorage.getItem("userId"))
    } else {
      this.UserID = JSON.parse(localStorage.getItem("userId"))
    }
    if (this.UserID == null) {
      this.UserID = JSON.parse(sessionStorage.getItem("userId"))
    }
    this.userId = this.UserID;
    this.initializeSearchObject();
    this.getSearchData();

  }
  initializeSearchObject() {
    this.searchData = {
      ModuleRes: [],
      BlogRes: [],
      JournalRes: [],
      PodCastRes: [],
      SessionRes: [],
      WisdomShortsRes: [],
      EventsRes: [],
      WisdomStoriesRes: [],
      AudioMeditationRes:[],
      FeelBetterNowRes: null,
      MLMRes: [],
      SoundscapesRes: []
    } as SearchDataModel;
  }

  searchEvent(moduleName:string) {
    this.filterApplied = false;
    this.post = [];
    this.jrList = [];
    this.initializeSearchObject();
    this.search = moduleName;
    setTimeout(() => {
      this.getSearchData();
      this.filterApplied = true;
    }, 300);
  }
  
  getinp(event) {
    let url=""
    let fragment: string | undefined = undefined;
    this.search= event;

    switch(event.toLowerCase())
    {
      case "events":{
          url = `/${SharedService.getprogramName()}/events`
          break;
      }
      case "blogs":{
        url =`/${SharedService.getprogramName()}/blogs`
        break;
      }
      case "life stories":
      case "Stories":{
        url = `/${SharedService.getprogramName()}/wisdom-stories`
        break;
      }
      case "podcast":{
        url = `/${SharedService.getprogramName()}/podcast`
        break;
      }
      case "audio meditations":{
        url = `/${SharedService.getprogramName()}/audio-meditation`
        break;
      }
      case "guided audio meditation":{
        url = `/${SharedService.getprogramName()}/audio-meditation`
        break;
      }
      case "soundscapes":{
        url = `/${SharedService.getprogramName()}/soundscapes`
        break;
      }
      case ("short videos"):
      case ("videos"):
        {
        url = `/${SharedService.getprogramName()}/wisdom-shorts`
        break;
      }
      case "exercises":
      case "awareness exercises":
        {
        url = `/${SharedService.getprogramName()}/home`
        fragment = "self-awareness"
        break;
      }
      case "journal":{
        url = `/${SharedService.getprogramName()}/journal`
        break;
      }
      case "forum":{
        url = `/${SharedService.getprogramName()}/forum`
        break;
      }
      case "develop a calm mind":{
        url =`/${SharedService.getprogramName()}/pathway/develop-a-calm-mind`
        break;
      }
      case "understand yourself":{
        url = `/${SharedService.getprogramName()}/pathway/understand-yourself`
        break;
      }
      case "understand how your mind works":{
        url = `/${SharedService.getprogramName()}/pathway/understand-how-your-mind-works`
        break;
      }
      case "manage your emotions":{
        url = `/${SharedService.getprogramName()}/pathway/manage-your-emotions`
        break;
      }
      case "succeed in life":{
        url = `/${SharedService.getprogramName()}/pathway/live-your-best-life`
        break;
      }
      case "mental health":{
        url = `/${SharedService.getprogramName()}/curated/overcome-stress-anxiety`
        break;
      }
     default: {
      // if(this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase())== this.search.toLocaleLowerCase()).length > 0) {
      //  let m = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase())== this.search.toLocaleLowerCase())[0];
      //   url = `${m.ModuleUrl}`;
      //    break;
      // }

      let regexp =  this.search.repeat(1);
      let searchInpt = regexp;
      searchInpt = searchInpt.replace(/[^a-zA-Z 0-9]/g, "");
       url=`/${SharedService.getprogramName()}/site-search/${searchInpt}`
        this.searchEvent(searchInpt)
        break;
      }
    }
    
    this.searchResult = [];
    this.toggleBodyScroll(false);
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate([url], { fragment: fragment })
  }

  getLearningRecords() {
    if(!this.search || this.search === ""){
      return 0;
    }
    if (this.searchDataDup) {
      return this.searchDataDup.ModuleRes.length +
        this.searchDataDup.SessionRes.length +
        this.searchDataDup.PodCastRes.length +
        this.searchDataDup.WisdomShortsRes.length +
        this.searchDataDup.EventsRes.length +
        this.searchDataDup.WisdomStoriesRes.length +
        this.searchDataDup.AudioMeditationRes.length +
        this.searchDataDup.MLMRes.length +
        this.searchDataDup.SoundscapesRes.length +
        this.searchDataDup.BlogRes.length;
    }
    return 0;
  }
  view(item) {
    this.onboardingService.clickBlog(Number(item['BlogID'])).subscribe({
      next: () => {},
      error: () => {}
    });
    this.router.navigateByUrl(SharedService.getprogramName() + item['url']);

  }

  viewStory(item) {
    const locked = !this.isSubscriber && (item?.isFree === '0');
    if (locked) {
      this.showModal = true;
      return;
    }
    const id = Number(item['ScenarioID']);
    if (!isNaN(id)) {
      this.onboardingService.clickStory(id).subscribe({ next: () => {}, error: () => {} });
    }
    this.router.navigateByUrl(SharedService.getprogramName() + item['url']);
  }
  getSourceForPodBin(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.podbean.com/player-v2/?from=embed&i=" + url + "&square=0&share=0&download=0&fonts=Times%20New%20Roman&skin=1b1b1b&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=60a0c8&size=300");
  }
  getSearchData() {
    let regexp =  this.search.repeat(1);
    let searchInpt = regexp;
    searchInpt = searchInpt.replace(/[^a-zA-Z 0-9]/g, "");
    this.isLoading = true;
    this.commonService.getSearchDataForSearchSite(searchInpt).subscribe(res => {
      if (res) {
        if (res.MLMRes) {
          res.MLMRes.forEach(m => {
            m.ImgUrl = m.ImageUrl;
          });
        }
        this.searchDataDup = JSON.parse(JSON.stringify(res));

        if (res.BlogRes && res.BlogRes.length > 2) {
          res.BlogRes = res.BlogRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.AudioMeditationRes && res.AudioMeditationRes.length > 2) {
          res.AudioMeditationRes = res.AudioMeditationRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.WisdomShortsRes && res.WisdomShortsRes.length > 2) {
          res.WisdomShortsRes = res.WisdomShortsRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.EventsRes && res.EventsRes.length > 2) {
          res.EventsRes = res.EventsRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.SoundscapesRes && res.SoundscapesRes.length > 2) {
          res.SoundscapesRes = res.SoundscapesRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.WisdomStoriesRes && res.WisdomStoriesRes.length > 2) {
          res.WisdomStoriesRes = res.WisdomStoriesRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.AudioMeditationRes && res.AudioMeditationRes.length > 2) {
          res.AudioMeditationRes = res.AudioMeditationRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        if (res.PodCastRes && res.PodCastRes.length > 2) {
          res.PodCastRes = res.PodCastRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }


        if (res.ModuleRes && res.ModuleRes.length > 2) {
          res.ModuleRes = res.ModuleRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }


        if (res.MLMRes && res.MLMRes.length > 2) {
          res.MLMRes = res.MLMRes.filter((d, i) => (i === 0 || i === 1));
          this.searchData = res;
        } else {
          this.searchData = res;
        }

        this.feelBetterNowTopic = this.getFeelBetterNowTitle(this.searchData.FeelBetterNowRes);
      }
      this.toggleBodyScroll(false);
      this.isLoading = false;
    }, _ => {
      this.isLoading = false;
    });
    // fetch story free/lock info
    if (this.searchData && this.searchData.WisdomStoriesRes && this.searchData.WisdomStoriesRes.length > 0) {
      this.searchData.WisdomStoriesRes.forEach((s: any) => {
        const id = Number(s['ScenarioID']);
        if (!isNaN(id)) {
          this.onboardingService.CheckStoryIsFree(id).subscribe({
            next: (res) => { this.storyFreeMap[id] = !!res; },
            error: () => { this.storyFreeMap[id] = false; }
          });
        }
      });
    }
    this.getForumSearchData();
    this.getJournalSearchData();
  }

  getJournalSearchData() {
    if (this.UserID) {
      if (this.jrListC.length === 0) {
        this.commonService.viewJournal(this.UserID).subscribe((res) => {
          if (res) {
            this.jrListC = res;
            this.searchjournal(this.search);
          }
        });
      } else {
        this.searchjournal(this.search);
      }
    }
  }

  searchjournal(text) {
    if (text === "") {
        this.jrList = this.jrListC; 
    } else {
      this.jrList = this.jrListC.filter(
        (it) =>
          it?.Response?.toLowerCase().includes(text.toLowerCase()) ||
          it?.TitleQue?.toLowerCase().includes(text.toLowerCase()) ||
          it?.ModuleName?.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
  getTotalRecords() {
    return this.getLearningRecords() + this.getForumSearchRecords() + this.journalSearchRecords();
  }
  pageChangeEvent(tabName) {
    this.tabName = tabName;
    //  if(tabName=='Forum'){
    //    this.getForumSearchData();
    //  }
  }

  follow(item, index) {
    if (this.UserID) {
      this.serivce.followPost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res == "1") {
          this.post[index].Followed = item.Followed == '1' ? '0' : '1';
        }
      });
    }
  }
  getForumSearchData() {
    this.serivce.getForumSearchDataSite(this.search).subscribe(res => {
      if (res) {
        this.list(res);
      }
    });
  }

  enableViewMore(section, type) {
    if(section === 'blog') {
      if (type === 'more') {
        if (this.searchDataDup.BlogRes && this.searchDataDup.BlogRes.length > 2) {
          this.searchData.BlogRes = this.searchDataDup.BlogRes;
        }
        this.enableBlogViewMore = true;
      }else {
        if (this.searchDataDup.BlogRes && this.searchDataDup.BlogRes.length > 2) {
          this.searchData.BlogRes = this.searchDataDup.BlogRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableBlogViewMore = false;
      }
    }else if(section === 'short') {
      if (type === 'more') {
        if (this.searchDataDup.WisdomShortsRes && this.searchDataDup.WisdomShortsRes.length > 2) {
          this.searchData.WisdomShortsRes = this.searchDataDup.WisdomShortsRes;
        }
        this.enableShortViewMore = true;
      }else {
        if (this.searchDataDup.WisdomShortsRes && this.searchDataDup.WisdomShortsRes.length > 2) {
          this.searchData.WisdomShortsRes = this.searchDataDup.WisdomShortsRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableShortViewMore = false;
      }
    }else if(section === 'events') {
      if (type === 'more') {
        if (this.searchDataDup.EventsRes && this.searchDataDup.EventsRes.length > 2) {
          this.searchData.EventsRes = this.searchDataDup.EventsRes;
        }
        this.enableEventsViewMore = true;
      }else {
        if (this.searchDataDup.EventsRes && this.searchDataDup.EventsRes.length > 2) {
          this.searchData.EventsRes = this.searchDataDup.EventsRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableEventsViewMore = false;
      }
    }else if(section === 'story') {
      if (type === 'more') {
        if (this.searchDataDup.WisdomStoriesRes && this.searchDataDup.WisdomStoriesRes.length > 2) {
          this.searchData.WisdomStoriesRes = this.searchDataDup.WisdomStoriesRes;
        }
        this.enableStoryViewMore = true;
      }else {
        if (this.searchDataDup.WisdomStoriesRes && this.searchDataDup.WisdomStoriesRes.length > 2) {
          this.searchData.WisdomStoriesRes = this.searchDataDup.WisdomStoriesRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableStoryViewMore = false;
      }
    }else if(section === 'module') {
      if (type === 'more') {
        if (this.searchDataDup.ModuleRes && this.searchDataDup.ModuleRes.length > 2) {
          this.searchData.ModuleRes = this.searchDataDup.ModuleRes;
        }
        this.enableModuleViewMore = true;
      }else {
        if (this.searchDataDup.ModuleRes && this.searchDataDup.ModuleRes.length > 2) {
          this.searchData.ModuleRes = this.searchDataDup.ModuleRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableModuleViewMore = false;
      }
    }
    else if(section === 'podcast') {
      if (type === 'more') {
        if (this.searchDataDup.PodCastRes && this.searchDataDup.PodCastRes.length > 2) {
          this.searchData.PodCastRes = this.searchDataDup.PodCastRes;
        }
        this.enablePodcastViewMore = true;
      }else {
        if (this.searchDataDup.PodCastRes && this.searchDataDup.PodCastRes.length > 2) {
          this.searchData.PodCastRes = this.searchDataDup.PodCastRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enablePodcastViewMore = false;
      }
    }else if(section === 'audiomed') {
      if (type === 'more') {
        if (this.searchDataDup.AudioMeditationRes && this.searchDataDup.AudioMeditationRes.length > 2) {
          this.searchData.AudioMeditationRes = this.searchDataDup.AudioMeditationRes;
        }
        this.enableAudioMedViewMore = true;
      }else {
        if (this.searchDataDup.AudioMeditationRes && this.searchDataDup.AudioMeditationRes.length > 2) {
          this.searchData.AudioMeditationRes = this.searchDataDup.AudioMeditationRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableAudioMedViewMore = false;
      }
    }else if(section === 'mlm') {
      if (type === 'more') {
        if (this.searchDataDup.MLMRes && this.searchDataDup.MLMRes.length > 2) {
          this.searchData.MLMRes = this.searchDataDup.MLMRes;
        }
        this.enableMLMViewMore = true;
      }else {
        if (this.searchDataDup.MLMRes && this.searchDataDup.MLMRes.length > 2) {
          this.searchData.MLMRes = this.searchDataDup.MLMRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableMLMViewMore = false;
      }
    }else if(section === 'soundscapes') {
      if (type === 'more') {
        if (this.searchDataDup.SoundscapesRes && this.searchDataDup.SoundscapesRes.length > 2) {
          this.searchData.SoundscapesRes = this.searchDataDup.SoundscapesRes;
        }
        this.enableSoundscapesViewMore = true;
      }else {
        if (this.searchDataDup.SoundscapesRes && this.searchDataDup.SoundscapesRes.length > 2) {
          this.searchData.SoundscapesRes = this.searchDataDup.SoundscapesRes.filter((d, i) => (i === 0 || i === 1));
        }
        this.enableSoundscapesViewMore = false;
      }
    }


  }

  audioevent(data) {
    const locked = !this.isSubscriber && (data?.isFree === '0' || data['RowID'] >= 4);
    if (locked) {
      this.showModal = true;
      return;
    }
    let url = (data['AudioUrl'] || '').replaceAll(':', '_');
    url = encodeURIComponent(url.replaceAll('/', '~'));
    let title = encodeURIComponent((data['Title'] || '').replaceAll(' ', '-'));
    const prgType = SharedService.ProgramId;
    if (prgType == 9) {
      this.router.navigate(['adults/guided-meditation/audiopage/', url, data['RowID'], (data['isFree']==1)? "T":"F", title]);
    } else {
      this.router.navigate(['teenagers/guided-meditation/audiopage/', url, data['RowID'], (data['isFree']==1)? "T":"F", title]);
    }
  }

  soundscapeEvent(data: any) {
    this.commonService.clickSoundscapes(data.SoundscapeID).subscribe({
      next: () => {},
      error: () => {}
    });
    const locked = !this.isSubscriber && data['SoundscapeID'] > 1;
    if (locked) {
      this.showModal = true;
      return;
    }
    let mediaUrl = data['MediaUrl'] || '';
    if (mediaUrl.includes('https://d1tenzemoxuh75.cloudfront.net/')) {
      mediaUrl = mediaUrl.replaceAll('https://d1tenzemoxuh75.cloudfront.net/', '/');
    }
    let concat = encodeURIComponent(mediaUrl.replaceAll('/', '~'));
    const title = (data['Title'] || '').replaceAll(' ', '-');
    const moduleName = 'Soundscapes';
    this.router.navigate([`${SharedService.getprogramName()}/audiopage/`, concat, data['SoundscapeID'], 'T', title, moduleName]);
  }

  podcastevent(data: any) {
    const locked = !this.isSubscriber && (data?.isFree === '0');
    if (locked) {
      this.showModal = true;
      return;
    }
    this.commonService.clickPodcast(data.PodcastID).subscribe({
      next: () => {},
      error: () => {}
    });
    let media = (data.MediaUrl || '').toString().trim();
    media = media.replace(/`/g, '');
    if (media.includes('https://d1tenzemoxuh75.cloudfront.net/')) {
      media = media.replaceAll('https://d1tenzemoxuh75.cloudfront.net/', '/');
    }
    const path = encodeURIComponent(media.replaceAll('/', '~'));
    const route = this.isAdults
      ? ['adults', 'audiopage', path, data.PodcastID, 'T', data.Title]
      : ['teenagers', 'audiopage', path, data.PodcastID, 'T', data.Title];
    this.router.navigate(route);
  }

  getPodcastImage(id: number) {
    const Id = id <= 9 ? '0' + id : id;
    return `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`;
  }

  youtube(item: any) {
    const locked = !this.isSubscriber && (item?.isFree === '0');
    if (locked) {
      this.showModal = true;
      return;
    }
    this.commonService.clickEvents(item?.RowID).subscribe({
      next: () => {},
      error: () => {}
    });
    if (item?.RowID <= 2) {
      this.router.navigate([SharedService.getprogramName() + '/curated/youtubelink', (item?.YoutubeLink || '') + '=rdtfghjhfdg']);
    } else {
      this.router.navigate([SharedService.getprogramName() + '/curated/youtubelink', (item?.YoutubeLink || '') + '=vncbxdfchgvxd']);
    }
  }

  mlmEvent(item: any) {
    const locked = !this.isSubscriber && (item?.isFree === '0');
    if (locked) {
      this.showModal = true;
      return;
    }
    const id = item.MicrolearningID;
    if (id) {
      localStorage.removeItem('ml_index_' + id);
      localStorage.removeItem('persist_ml_index');
    }
    const prefix = SharedService.getprogramName();
    this.router.navigate(['/' + prefix + '/micro-learning/inner', id]);
  }
 
  wisdoshortsevent(val, video, title) {
    const locked = !this.isSubscriber && (val?.isFree === '0');
    if (locked) {
      this.showModal = true;
      return;
    }
    const idPart = (video || '').split('/')[3] || '';
    const id = Number(idPart.split('.')[1]);
    if (!isNaN(id)) {
      this.commonService.clickShorts(id).subscribe({ next: () => {}, error: () => {} });
    }
    if (val['IsVoices'] === '1') {
      this.router.navigate([video.replace('adults', SharedService.getprogramName()), 'T', title], { queryParams: { pref: 'voices' } });
    } else {
      this.router.navigate([video.replace('adults', SharedService.getprogramName()), 'T', title]);
    }
  }

  like(item, index) {
    if (this.UserID) {
      this.serivce.likePost({ PostID: item.PostID, UserID: this.UserID }).subscribe(res => {
        if (res) {
          this.post[index].PostLikeCount = res;
          this.post[index].Liked = this.post[index].Liked == "1" ? "0" : "1";
        }
      });
    }
  }
  getOrderbyLatestPost(childs) {
    childs.sort(function (a, b) {
      return b.PostID - a.PostID;
    });
    return childs;
  }
  getLocalPostDate(date: string) {
    var dateLocal = new Date(date);
    var newDate = new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }
  list(data) {
    if (data) {
      let temp = [];
      let flag = false;
      data.forEach(element => {
        temp.forEach((res) => {
          if (res.PostID === Number(element.ParentPOstID)) {
            res.child.push(element);
            flag = true;
          }
        })
        if (!flag) {
          element.child = [];
          temp.push(element);
          flag = false;
        } else {
          flag = false;
        }

      });
      temp.sort(function (a, b) {
        return b.PostID - a.PostID;
      });
      this.post = temp;
    }
  }
  getForumSearchRecords() {
    if (this.post) {
      return this.post.length;
    }
    return 0;
  }

  postreport(item, actionType) {
    if (this.UserID) {
      console.log(item);
      this.replyflag = !this.replyflag;
      this.serivce.submitPost({ POST: this.PostComment, UserId: this.UserID, ParentPostID: item.PostID }).subscribe(res => {
        if (res) {
          this.getForumSearchData();
          this.PostComment = '';
        }
      })
    }
  }
  reportpost(item) {
    this.replyflag = !this.replyflag;
    this.activereply = item;
    console.log(item);
  }
  journalSearchRecords() {
    if (this.jrList) {
      return this.jrList.length;
    }
    return 0;
  }

  goBack() {
    this.router.navigate([SharedService.getUrlfromFeatureName('search')]);
  }

  routemodule(res) {
    const url = res['ModuleUrl'];
    const isMicroLearning = url && (url.includes('micro-learning') || url.includes('microlearning'));
    if (isMicroLearning) {
      const parts = url.split('/');
      const id = parts[parts.length - 1];
      if (id) {
        localStorage.removeItem('ml_index_' + id);
        localStorage.removeItem('persist_ml_index');
      }
    }
    localStorage.setItem("moduleId", JSON.stringify(res['ModuleId']))
    this.commonService.clickModule(res['ModuleId'], this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        } else {
          localStorage.setItem("lastvisited", 'T')
        }
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      })
    this.router.navigate([url], { state: { source: 'search' } });
  }

  timeSince(date) {
    return moment.utc(date).fromNow();
  }

  stripTags(story) {
    //
  }

  getFeelBetterNowTitle(url) {
    return url?.split('/')?.[2];
  }

  routeToFeelBetterNow(url) {
    const targetUrl = SharedService.getUrlfromFeatureName(url);
    const isMicroLearning = targetUrl && (targetUrl.includes('micro-learning') || targetUrl.includes('microlearning'));
    if (isMicroLearning) {
      const parts = targetUrl.split('/');
      const id = parts[parts.length - 1];
      if (id) {
        localStorage.removeItem('ml_index_' + id);
        localStorage.removeItem('persist_ml_index');
      }
    }
    this.router.navigate([targetUrl]);
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }


  // searchEvent(module) {
  //   //this.eve.logEvent("click_search");
  //   this.searchinp = module;
  //   this.searchResult = [];
  //   this.getinp(module);
  // }

  getAutoCompleteList(value) {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x => (x.ModuleName?.toLocaleLowerCase() || '').includes(value?.toLocaleLowerCase() || ''));
      }
      if (this.searchResult.length > 0) {
        this.toggleBodyScroll(true);
      } else {
        this.toggleBodyScroll(false);
      }
    }
  }

  onFocus() {
    if (this.moduleList.length === 0) {
      this.getModuleList(true);
    }
    if (this.search == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName?.toLocaleLowerCase() || '').includes(this.search?.toLocaleLowerCase() || ''));
    }
    if (this.searchResult.length > 0) {
      this.toggleBodyScroll(true);
    }
  }

  getModuleList(isLoad?) {
    this.commonService.getModuleList().subscribe(res => {
      this.moduleList = res;
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Soundscapes"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},
                          {"ModuleName":"Develop a calm mind"},{"ModuleName":"Manage your emotions"},
                          {"ModuleName":"Understand yourself"},{"ModuleName":"Succeed in life"},
                          {"ModuleName":"Understand how your mind works"},{"ModuleName":"Mental Health"} )

      if (isLoad) {
        if (this.search == '') {
          this.searchResult = this.moduleList;
        } else {
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.search?.toLocaleLowerCase()));
        }
      }
    })
  }

  onFocusOutEvent() {
    // setTimeout(() => {
    //   this.searchResult = [];
    //   this.toggleBodyScroll(false);
    // }, 200);
  }

  clearSearch() {
    this.search = "";
    this.getAutoCompleteList('');
    this.post = [];
    this.jrList = [];
    this.getSearchData();
  }

  toggleBodyScroll(lock: boolean): void {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
