import { Component, OnInit } from '@angular/core';
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
export class MyDailyPracticePage implements OnInit {
  isAdults = false;
  dailybreathTitle:string ='';
  videoLink:string ='';
  userName:string ='';
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
 
    try{

        this.userName =SharedService.getUserName().split(' ')[0];
        if(!this.userName || this.userName=="null" || this.userName=="undefined" || this.userName==""){
          this.userName = localStorage.getItem('FnName');
        }
    } catch (error) {
         this.userName = localStorage.getItem('userName').split(' ')[0];
    }   
   
    this.userName = this.userName ? this.userName.replace('"',''): this.userName;
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

  getdailyquestion() {
    this.commonService.getDailypractiseQuestionbreath().subscribe((res) => {
      if (res) {
        this.dailybreathTitle = res.split(';')[0]
        this.videoLink = res.split(';')[1];
        this.enableVideo = true;
        this.breatheTime =  res.split(';')[2];
      }
    })
    this.commonService.getDailyInspirationQuestion().subscribe((res) => {
      if (res) {
        this.dailyInspirationTitle = res.split(';')[0]
        this.DailyInspirationLink = res.split(';')[1];
        this.DailyInspirationImage = res.split(';')[2];
        this.DailyInspirationTime = res.split(';')[4];
       if(res.split(';')[3]==="6")
       { 
        this.isVoices = true; 

       }


        this.dailyInsModule = res.split(';')[2] ? res.split(';')[2]?.toString()?.replaceAll('/', '') : "";
       // this.DailyInspirationImg = "https://d1tenzemoxuh75.cloudfront.net/daily_inspiration/portrait" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().replace("mp4", "webp")
       
       //https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/wisdom_shorts/wisdom_shorts_109.webp 
       
       this.DailyInspirationImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/dashboard/wisdom_shorts/wisdom_shorts_" + this.DailyInspirationLink.substring(this.DailyInspirationLink.lastIndexOf('/')).toString().split('.')[1].toString()  +".webp"

       this.enableVideo = true;
      }
    })
    this.commonService.getDailypractiseQuestionins().subscribe((res) => {
      if (res) {
        //this.dailyinstext = res;
        this.dailyinsAuthor = res.split(';')[0]
        this.dailyinstext = res.split(';')[1];
      }
    })
    this.commonService.getDailypractiseQuestionmeditation().subscribe((res) => {
      if (res) {
        this.audioTitle = res.split(';')[0]
        this.audioLink = res.split(';')[1];
        this.audioTime = res.split(';')[2];
      }
    })
    this.commonService.getDailypractiseQuestiontoday().subscribe((res) => {
      if (res) {
        this.trythistoday = res;
      }
    })
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
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Microlearning"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},{"ModuleName":"Self Awareness"},
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

  
routeResume(r?: any, enableLastVisited = false): void {
  this.logeventservice.logEvent('click_continue_where_left');
  const isAdult = SharedService.ProgramId === ProgramType.Adults;
  const service = isAdult ? this.adultService : this.teenService;
  const fallbackUrl = isAdult
    ? '/adults/happiness/'
    : '/teenagers/happiness/';

  if (enableLastVisited) {
    const first = this.resumeLastvisited[0];
    const id   = first ? first.ModuleId.toString() : '23';
    const url  = first ? first.ModuleUrl.toString() : fallbackUrl;
    service.setmoduleID(id, url, url);
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

}
