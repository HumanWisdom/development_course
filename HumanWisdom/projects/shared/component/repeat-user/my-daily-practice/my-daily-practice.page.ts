import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LogEventService } from '../../../services/log-event.service';
import { AdultsService }   from '../../../../adults/src/app/adults/adults.service';
import { TeenagersService } from '../../../../teenagers/src/app/teenagers/teenagers.service';


@Component({
  selector: 'app-my-daily-practice',
  templateUrl: './my-daily-practice.page.html',
  styleUrls: ['./my-daily-practice.page.scss'],
})
export class MyDailyPracticePage implements OnInit, OnDestroy {
  isAdults = false;
  dailybreathTitle:string ='';
  videoLink:string ='';
  userName:string ='';
  showFooterOwl: boolean = false;
  enableVideo:boolean;
  dailyInspirationTitle:string='';
  DailyInspirationLink:string='';
  isVoices:boolean;
  dailyInsModule:string =''
  DailyInspirationImg:string='';
  dailyinsAuthor:string='';
  dailyinstext:string='';
  audioTitle:string ='';
  audioLink:string='';
  trythistoday:string='';
  dailyqusrefid:string='';
  dailyqus:string='';
  questext:string='';
  enableAlert:boolean = false;
  content:string='';
  DailyInspirationTime :string='';
  audioTime:string='';
  DailyInspirationImage:string= '';
  userId = JSON.parse(localStorage.getItem("userID"))
  isloggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;
  breatheTime:string = '';
  placeholder = 'Tap to answer'
  guest = true;
  teenTalkTitle: string = '';
  teenTalkLink: string = '';
  teenTalkImg: string = '';
  podcastTitle: string = '';
  podcastLink: string = '';
  podcastImg: string = '';
  activeExerciseLabel: string = '';
  activeExerciseTitle: string = '';
  activeExerciseTime: string = '';
  activeExerciseImg: string = '';
  activeExerciseIcon: string = '';
  selectedExerciseType: 'breathing' | 'meditation' | 'teentalk' | 'podcast' = 'breathing';
  isFirstLogin:boolean = false;
  searchinp = '';
  searchResult = [];
  public moduleList = [];
  loginResponse: any;
  streak: number = 0;
  public resumeLastvisited = [];
  isSubscriber = false;
  journalHits = 0;
  showSearchBox: boolean = true;
  isSearchActive: boolean = false;
  isQuestionsViewActive: boolean = false;

  constructor(
    private commonService: CommonService,
    public  logeventservice: LogEventService,
    private router: Router,
    private adultService: AdultsService,
    private teenService: TeenagersService) { 
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
     this.isFirstLogin = SharedService.isRoutedFromLogin;
  }

  ngOnInit() {
    // Hide footer owl until the user scrolls past the in-page Olly
    this.commonService.setFooterOwlVisible(false);

    try{

        this.userName =SharedService.getUserName().split(' ')[0];
        if(!this.userName || this.userName=="null" || this.userName=="undefined" || this.userName==""){
          this.userName = localStorage.getItem('FnName');
        }
    } catch (error) {
         this.userName = localStorage.getItem('userName').split(' ')[0];
    }   
   
    this.userName = this.userName ? this.userName.replace('"',''): this.userName;
    if (this.userName === "null" || this.userName === "undefined" || (this.userName && this.userName.trim() === "")) {
      this.userName = "";
    }
    
    // Capitalize the username
    if (this.userName) {
      this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1).toLowerCase();
    }
  if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.getdailyquestion();
    this.getdailyques();
    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }

    if (!this.isSubscriber) {
      this.placeholder = 'You need to subscribe to use this feature';
    }

    const savedLogin = localStorage.getItem("loginResponse") || sessionStorage.getItem("loginResponse");
    if (savedLogin) {
      this.loginResponse = JSON.parse(savedLogin);
    }

    this.streak = this.loginResponse?.Streak || 0;
    this.getLastvisitedScr(); 

    this.journalHits = +(localStorage.getItem('journalHits') || 0);
  }

  private getLastvisitedScr(): void {
    const service = SharedService.ProgramId === ProgramType.Adults
      ? this.adultService
      : this.teenService;

    const userId = SharedService.getUserId();
    service.GetLastVisitedScreen(userId).subscribe(res => {
      this.resumeLastvisited = res || [];
    });

    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }
  }

  resolveMediaUrl(url: string): string {
    if (!url) return '';
    if (url.includes('videopage')) {
      const parts = url.split('/');
      const code = parts[2];
      let name = code.split('-videos')[0];
      let link = code.split('-videos')[1];
      let path = `${name}/videos${link?.replaceAll('-', '/')}`;
      if (path.includes('teenagers')) {
        path = path.replaceAll('-', '/');
      }
      path = path.replaceAll('~', '-');
      path = path.replace(/\/+/g, '/');
      return `https://d1tenzemoxuh75.cloudfront.net/${path}`;
    } else if (url.includes('audiopage')) {
      const parts = url.split('/');
      const audioUrl = parts[2];
      let path = audioUrl.replace(/\~/g, '/');
      path = path.replace(/\/+/g, '/');
      return `https://d1tenzemoxuh75.cloudfront.net/${path}`;
    }
    return '';
  }

  getdailyquestion() {
    const programId = SharedService.ProgramId;
    this.commonService.getTodayDailyPractise(programId).subscribe((res: any[]) => {
      if (res && res.length > 0) {
        const date = new Date().getDate();
        const isOdd = date % 2 !== 0;

        // 1. Daily Inspiration / Short video (type 5 & 6)
        const shortVideos = res.filter(item => item.dailyPractTypeID === '5' || item.dailyPractTypeID === '6');
        let selectedShort = null;
        if (shortVideos.length > 1) {
          selectedShort = isOdd ? shortVideos.find(x => x.dailyPractTypeID === '5') : shortVideos.find(x => x.dailyPractTypeID === '6');
          if (!selectedShort) selectedShort = shortVideos[0];
        } else if (shortVideos.length === 1) {
          selectedShort = shortVideos[0];
        }

        if (selectedShort) {
          this.dailyInspirationTitle = selectedShort.title;
          this.DailyInspirationLink = selectedShort.Text_URL || this.resolveMediaUrl(selectedShort.url);
          this.DailyInspirationImg = selectedShort.imgPath;
          this.DailyInspirationTime = selectedShort.timing;
          this.isVoices = selectedShort.dailyPractTypeID === '6';
          this.enableVideo = true;
        }

        // 2. Quote of the day (type 2)
        const quoteItem = res.find(item => item.dailyPractTypeID === '2');
        if (quoteItem) {
          this.dailyinstext = quoteItem.Text_URL;
          this.dailyinsAuthor = quoteItem.title;
        }

        // 3. Try This Today / Challenge (type 4)
        const challengeItem = res.find(item => item.dailyPractTypeID === '4');
        if (challengeItem) {
          this.trythistoday = challengeItem.Text_URL;
        }

        // 4. Alternating Cards logic
        if (this.isAdults) {
          const breathingItem = res.find(item => item.dailyPractTypeID === '1');
          const meditationItem = res.find(item => item.dailyPractTypeID === '3');
          
          let selectType: 'breathing' | 'meditation' = 'breathing';
          if (breathingItem && meditationItem) {
            selectType = isOdd ? 'breathing' : 'meditation';
          } else if (breathingItem) {
            selectType = 'breathing';
          } else if (meditationItem) {
            selectType = 'meditation';
          }

          if (selectType === 'breathing' && breathingItem) {
            this.dailybreathTitle = breathingItem.title;
            this.videoLink = breathingItem.Text_URL || this.resolveMediaUrl(breathingItem.url);
            this.breatheTime = breathingItem.timing;
            this.enableVideo = true;
            this.selectedExerciseType = 'breathing';

            this.activeExerciseLabel = 'BREATHING EXERCISE';
            this.activeExerciseIcon = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/pay_daily1.svg';
            this.activeExerciseTitle = this.dailybreathTitle;
            this.activeExerciseTime = this.breatheTime;
            this.activeExerciseImg = breathingItem.imgPath || 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/resume/29.png';
          } else if (selectType === 'meditation' && meditationItem) {
            this.audioTitle = meditationItem.title;
            this.audioLink = meditationItem.Text_URL || this.resolveMediaUrl(meditationItem.url);
            this.audioTime = meditationItem.timing;
            this.selectedExerciseType = 'meditation';

            this.activeExerciseLabel = 'DAILY MEDITATION';
            this.activeExerciseIcon = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v_1_4/audii_daily1.svg';
            this.activeExerciseTitle = this.audioTitle;
            this.activeExerciseTime = this.audioTime;
            this.activeExerciseImg = meditationItem.imgPath || 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
          }
        } else {
          const teenTalkItem = res.find(item => item.dailyPractTypeID === '8');
          const podcastItem = res.find(item => item.dailyPractTypeID === '9');

          let selectType: 'teentalk' | 'podcast' = 'teentalk';
          if (teenTalkItem && podcastItem) {
            selectType = isOdd ? 'teentalk' : 'podcast';
          } else if (teenTalkItem) {
            selectType = 'teentalk';
          } else if (podcastItem) {
            selectType = 'podcast';
          }

          if (selectType === 'teentalk' && teenTalkItem) {
            this.teenTalkTitle = teenTalkItem.title;
            this.teenTalkLink = teenTalkItem.Text_URL || this.resolveMediaUrl(teenTalkItem.url);
            this.teenTalkImg = teenTalkItem.imgPath;
            this.selectedExerciseType = 'teentalk';

            this.activeExerciseLabel = 'TEENTALK';
            this.activeExerciseIcon = 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/play_outline.svg';
            this.activeExerciseTitle = this.teenTalkTitle;
            this.activeExerciseTime = teenTalkItem.timing;
            this.activeExerciseImg = teenTalkItem.imgPath || 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/v1_3/mdp_vp.svg';
          } else if (selectType === 'podcast' && podcastItem) {
            this.podcastTitle = podcastItem.title;
            this.podcastLink = podcastItem.Text_URL || this.resolveMediaUrl(podcastItem.url);
            this.podcastImg = podcastItem.imgPath;
            this.selectedExerciseType = 'podcast';

            this.activeExerciseLabel = 'PODCAST';
            this.activeExerciseIcon = 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/audio_inv.svg';
            this.activeExerciseTitle = this.podcastTitle;
            this.activeExerciseTime = podcastItem.timing;
            this.activeExerciseImg = podcastItem.imgPath || 'https://d1tenzemoxuh75.cloudfront.net/assets/webp/podcast/01.webp';
          }
        }
      }
    });
  }

  getdailyques() {
    this.commonService.getDailypractiseQuestion().subscribe((res) => {
      if (res) {
        this.dailyqus = res.split(':')[1]
        this.dailyqusrefid = res.split(':')[0]
      }
    })
  }

  subdailyques() {
  /* analytics */
  this.logeventservice.logEvent('click_add_to_journal');

  /* login gate */
  if (!this.isloggedIn) {
    this.content = 'Subscribe to activate your online journal';
    this.enableAlert = true;
    return;
  }

  /* free-user hit limit */
  if (!this.isSubscriber) {
    if (this.journalHits >= 2) {        // already at limit
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
      return;
    }
    this.journalHits++;
    localStorage.setItem('journalHits', String(this.journalHits));
  }

  /* save entry */
  const obj = {
    ReflectionId: this.dailyqusrefid,
    SubscriberId: localStorage.getItem('userID'),
    Resp: this.questext
  };
  this.commonService.submitDailypractiseQuestion(obj).subscribe(res => {
    if (res) {
      this.content = 'Successfully added to journal';
      this.enableAlert = true;
      this.questext = '';
    }
  });
}
  
  get disableJournalBtn(): boolean {
    return this.guest || !this.isloggedIn || !this.questext ||
          (!this.isSubscriber && this.journalHits >= 2);
  }

routeDailyPractice(id: number): void {
  /* analytics */
  if (id === 0)       this.logeventservice.logEvent('click_daily_inspiration');
  else if (id === 1)  this.logeventservice.logEvent('click_breathing_exercise');
  else if (id === 4)  this.logeventservice.logEvent('click_daily_meditation');
  else if (id === 8)  this.logeventservice.logEvent('click_teentalk');
  else if (id === 9)  this.logeventservice.logEvent('click_podcast');

  /* already subscribed – go straight in */
  if (this.isSubscriber) {          // <── use the boolean flag
    this.router.navigate([SharedService.getprogramName(), 'daily-practise', id]);
    return;
  }

  /* free-user gating: 2 hits per exercise */
  const key = `dly_prac_${id}`;
  let hits = +(localStorage.getItem(key) || 0);

  if (hits >= 2) {
    this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    return;
  }

  localStorage.setItem(key, String(hits + 1));
  this.router.navigate([SharedService.getprogramName(), 'daily-practise', id]);
}

routeActiveExercise() {
  if (this.isAdults) {
    if (this.selectedExerciseType === 'breathing') {
      this.routeDailyPractice(1);
    } else {
      this.routeDailyPractice(4);
    }
  } else {
    if (this.selectedExerciseType === 'teentalk') {
      this.routeDailyPractice(8);
    } else {
      this.routeDailyPractice(9);
    }
  }
}

  routeToDailyCheckIn(){
    this.logeventservice.logEvent('click_daily_checkin' );

    this.router.navigate([SharedService.getprogramName()+'/daily-checkin'])
  }
  routeToDashboard(){
    this.logeventservice.logEvent('click_proceed_to_home' );    
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  goToSubscribe(): void {
    const prefix = SharedService.getprogramName();
    this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
  }



  onOllyViewChanged(active: boolean): void {
    this.isQuestionsViewActive = active;
    // Tell the app shell to show/hide the global nav bar
    this.commonService.setNavVisible(!active);
    // Clear any residual overflow lock when returning from Olly view
    if (!active) {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    }
  }

  ngOnDestroy(): void {
    // Restore footer owl visibility when leaving this page
    this.commonService.setFooterOwlVisible(true);
    // Restore nav visibility when leaving this page
    this.commonService.setNavVisible(true);
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
  }

  onFocus() {
    this.isSearchActive = true;
    if (this.moduleList.length === 0) {
      this.getModuleList(true);
    }
    if (this.searchinp == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName?.toLocaleLowerCase() || '').includes(this.searchinp?.toLocaleLowerCase() || ''));
    }
    if (this.isSearchActive) {
      this.toggleBodyScroll(true);
    }
  }

  onFocusOutEvent() {
    setTimeout(() => {
      this.searchResult = [];
      this.toggleBodyScroll(false);
    }, 200);
  }

  
  clearSearch() {
    this.isSearchActive = false;
    this.searchinp = "";
    this.searchResult = [];
    this.toggleBodyScroll(false);
  }

  toggleBodyScroll(lock: boolean): void {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  getModuleList(isLoad?) {
    this.commonService.getModuleList().subscribe(res => {
      this.moduleList = res;
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Microlearning"}, {"ModuleName":"Guided journeys"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},{"ModuleName":"Self Awareness"},
                          {"ModuleName":"Develop a calm mind"},{"ModuleName":"Manage your emotions"},
                          {"ModuleName":"Understand yourself"},{"ModuleName":"Succeed in life"},
                          {"ModuleName":"Understand how your mind works"},{"ModuleName":"Mental Health"} )

      if (isLoad) {
        if (this.searchinp == '') {
          this.searchResult = this.moduleList;
        } else {
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
        }
      }
    })
  }

  getAutoCompleteList(value) {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.isSearchActive = true;
        this.searchResult = this.moduleList.filter(x => (x.ModuleName?.toLocaleLowerCase() || '').includes(value?.toLocaleLowerCase() || ''));
      }
      if (this.isSearchActive) {
        this.toggleBodyScroll(true);
      } else {
        this.toggleBodyScroll(false);
      }
    }
  }

    
  getinp(searchTerm: string): void {
    this.isSearchActive = false;
    this.logeventservice.logEvent("search_" + searchTerm);
    let url = "";
    let fragment: string | undefined = undefined;
    this.searchinp = searchTerm;

    switch (searchTerm.toLowerCase()) {
      case "events": {
        url = `/${SharedService.getprogramName()}/events`;
        break;
      }
      case "blogs": {
        url = `/${SharedService.getprogramName()}/blogs`;
        break;
      }
      case "life stories":
      case "stories": {
        url = `/${SharedService.getprogramName()}/wisdom-stories`;
        break;
      }
      case "podcast": {
        url = `/${SharedService.getprogramName()}/podcast`;
        break;
      }
      case "microlearning": {
        url = `/${SharedService.getprogramName()}/microlearning`;
        break;
      }
      case "guided journeys": {
        url = `/${SharedService.getprogramName()}/guided-journeys`;
        break;
      }
      case "audio meditations":
      case "guided audio meditation": {
        url = `/${SharedService.getprogramName()}/audio-meditation`;
        break;
      }
      case "short videos":
      case "videos": {
        url = `/${SharedService.getprogramName()}/wisdom-shorts`;
        break;
      }
      case "exercises":
      case "awareness exercises":
      case "self awareness":
      case "self-awareness": {
        url = `/${SharedService.getprogramName()}/home`;
        fragment = "self-awareness";
        break;
      }
      case "journal": {
        url = `/${SharedService.getprogramName()}/journal`;
        break;
      }
      case "forum": {
        url = `/${SharedService.getprogramName()}/forum`;
        break;
      }
      case "develop a calm mind": {
        url = `/${SharedService.getprogramName()}/pathway/develop-a-calm-mind`;
        break;
      }
      case "understand yourself": {
        url = `/${SharedService.getprogramName()}/pathway/understand-yourself`;
        break;
      }
      case "understand how your mind works": {
        url = `/${SharedService.getprogramName()}/pathway/understand-how-your-mind-works`;
        break;
      }
      case "manage your emotions": {
        url = `/${SharedService.getprogramName()}/pathway/manage-your-emotions`;
        break;
      }
      case "succeed in life": {
        url = `/${SharedService.getprogramName()}/pathway/live-your-best-life`;
        break;
      }
      case "mental health": {
        url = `/${SharedService.getprogramName()}/curated/overcome-stress-anxiety`;
        break;
      }
      default: {
        let regexp = searchTerm.repeat(1);
        let searchInpt = regexp;
        searchInpt = searchInpt.replace(/[^a-zA-Z 0-9-]/g, "");
        url = `/${SharedService.getprogramName()}/site-search/${searchInpt}`;
        break;
      }
    }

    this.searchResult = [];
    this.toggleBodyScroll(false);
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate([url], { fragment: fragment });
  }


    searchEvent(module) {
    this.isSearchActive = false;
    this.logeventservice.logEvent("click_search");

    this.searchinp = module;
    this.searchResult = [];
    this.toggleBodyScroll(false);
    this.getinp(module);
  }

  
// routeResume(r?: any, enableLastVisited = false): void {
routeResume( enableLastVisited = false): void {
  this.logeventservice.logEvent('click_continue_where_left');
  const isAdult = SharedService.ProgramId === ProgramType.Adults;
  const service = isAdult ? this.adultService : this.teenService;
  var lastvisited: any = this.resumeLastvisited[0];
  const url  = lastvisited.ModuleUrl.toString() 

  // const fallbackUrl = isAdult
  //   ? '/adults/happiness/'
  //   : '/teenagers/happiness/';

  // if (enableLastVisited) {
  //   const first = this.resumeLastvisited[0];
  //   const id   = first ? first.ModuleId.toString() : '23';
  //   const url  = first ? first.ModuleUrl.toString() : fallbackUrl;
  //   let indexUrl = url;
  //   if (first && first.screenno) {
  //     const scr = first.screenno.toString();
  //     indexUrl = url.endsWith('/') ? `${url}s${scr}` : `${url}/s${scr}`;
  //   }
  //   service.setmoduleID(id, url, indexUrl);
  // }

    if(lastvisited && lastvisited.screenno && lastvisited.screenno != "0"){
      const id   = lastvisited.ModuleId.toString() 
      let indexUrl = url;
      const scr = lastvisited.screenno.toString();
       indexUrl = url.endsWith('/') ? `${url}s${scr}` : `${url}/s${scr}`;
        service.setmoduleID(id, url, indexUrl);
    }
    else {
      if(url.includes('?')) {
         const [path, queryString] = url.split('?');
          const params = new URLSearchParams(queryString);
          const queryParams: any = {};

            params.forEach((value, key) => {
              queryParams[key] = value;
            });
         this.router.navigate([path], { queryParams });
      }
      else
          this.router.navigate([url]);

    }

  localStorage.setItem('pageaction', 'next');
}

survey(): void {
  this.logeventservice.logEvent('click_take_survey');

  const prefix = this.isAdults ? '/adults' : '/teenagers';
  this.router.navigate([`${prefix}/wisdom-survey`], { state: { isUseCloseButton: true } });
}

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.questext="";

    this.content = '';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showFooterOwl = scrollOffset > 200;
    this.commonService.setFooterOwlVisible(this.showFooterOwl);
  }

}
