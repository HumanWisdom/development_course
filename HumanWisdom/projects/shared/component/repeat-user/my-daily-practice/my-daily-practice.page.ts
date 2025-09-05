import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LogEventService } from '../../../services/log-event.service';



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


  constructor(private  commonService:CommonService, public logeventservice: LogEventService, private router:Router) { 
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
     this.isFirstLogin = SharedService.isRoutedFromLogin;
  }

  ngOnInit() {
 
    try{

        this.userName =JSON.parse(localStorage.getItem('userName'));
    } catch (error) {
         this.userName = localStorage.getItem('userName');
    }

       
   

   
    this.userName = this.userName ? this.userName.replace('"',''): this.userName;
  if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.getdailyquestion();
    this.getdailyques();
    if (this.guest || !this.isloggedIn) {
      this.placeholder = 'Login to use this feature' ;
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
    this.logeventservice.logEvent('click_add_to_journal' );    

    if (!this.isloggedIn) {
      this.content = "Subscribe to activate your online journal";
      this.enableAlert = true;
      // alert("Subscribe to activate your online journal");
    } else {
      let obj = {
        ReflectionId: this.dailyqusrefid,
        SubscriberId: localStorage.getItem("userID"),
        Resp: this.questext
      }
      this.commonService.submitDailypractiseQuestion(obj).subscribe((res) => {
        if (res) {
          this.content = "Successfully added to journal";
          this.enableAlert = true;
          this.questext='';
          
          // window.alert('Successfully added daily question')
        }
      })
    }
  }

  
  routeDailyPractice(id){
    if(id==0) 
      this.logeventservice.logEvent('click_daily_insiration' );
    else if(id==1) 
      this.logeventservice.logEvent('click_breathing_exercise' );
    else if(id==4) 
      this.logeventservice.logEvent('click_daily_meditation' );
   

    this.router.navigate([SharedService.getprogramName()+'/'+'daily-practise/'+id])
  }
  routeToDailyCheckIn(){
    this.logeventservice.logEvent('click_daily_checkin' );

    this.router.navigate([SharedService.getprogramName()+'/daily-checkin'])
  }
  routeToDashboard(){
    this.logeventservice.logEvent('click_proceed_to_home' );    
    this.router.navigate([SharedService.getDashboardUrls()]);
  }



onFocus() {
    this.getModuleList(true);
    if (this.searchinp == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
    }
  }

  onFocusOutEvent() {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
  }

  
  clearSearch() {
    this.searchinp = "";
    this.searchResult = [];
  }

  getModuleList(isLoad?) {
    this.commonService.getModuleList().subscribe(res => {
      this.moduleList = res;
      this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},
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
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).startsWith(value?.toLocaleLowerCase()));
        }
      }
    }

    
  getinp(event) {
    this.logeventservice.logEvent("search_"+ event)
    
    let url=""
    switch(event.toLowerCase())
    {
      case "events":{
          url = `/adults/events`
          break;
      }
      case "blogs":{
        url = `/adults/blogs`
        break;
      }
      case "life stories":
      case "stories":{
        url = `/adults/wisdom-stories`
        break;
      }
      case "podcast":{
        url = `/adults/podcast`
        break;
      }
      case "audio meditations":{
        url = `/adults/audio-meditation`
        break;
      }
      case ("short videos"):
      case ("videos"):
        {
        url = `/adults/wisdom-shorts`
        break;
      }
     case "journal":{
        url = `/adults/journal`
        break;
      }
      case "exercises":
      case "awareness exercises":
        {
        url = `/adults/wisdom-exercise`
        break;
      }
      case "forum":{
        url = `/adults/forum`
        break;
      }
      case "develop a calm mind":{
        url = `/adults/pathway/develop-a-calm-mind`
        break;
      }
      case "understand yourself":{
        url = `/adults/pathway/understand-yourself`
        break;
      }
      case "understand how your mind works":{
        url = `/adults/pathway/understand-how-your-mind-works`
        break;
      }
      case "manage your emotions":{
        url = `/adults/pathway/manage-your-emotions`
        break;
      }
      case "succeed in life":{
        url = `/adults/pathway/live-your-best-life`
        break;
      }
      case "mental health":{
        url = `/adults/curated/overcome-stress-anxiety`
        break;
      }
      default: {
      //  if(this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase())== this.searchinp.toLocaleLowerCase()).length > 0) {
      //  let m = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase())== this.searchinp.toLocaleLowerCase())[0];
      //   url = `${m.ModuleUrl}`;
      //    break;
      // }
      let searchInpt = (' ' + this.searchinp).slice(1);
      searchInpt = searchInpt.replace(/[^a-zA-Z ]/g, "");
       url = `/adults/site-search/${searchInpt}`
        break;
      }

    }

    if(!this.isAdults)
      url=url.replace("/adults/","/teenagers/")

    this.router.navigate([url])
  }


    searchEvent(module) {
    this.logeventservice.logEvent("click_search");

    this.searchinp = module;
    this.searchResult = [];
    this.getinp(module);
  }

}
