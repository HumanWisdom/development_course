import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramModel } from '../../../../../../shared/models/program-model';
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s158001',
  templateUrl: './s158001.page.html',
  styleUrls: ['./s158001.page.scss'],
})
export class S158001Page implements OnInit,OnDestroy {
  
  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w1"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=158001
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  token="1234"
  shareUrl=this.path+"?t="+this.token
  localFreeScreens =localStorage.getItem("freeScreens");
  freeScreens= this.localFreeScreens != "undefined"? JSON.parse(localStorage.getItem("freeScreens")):"";
  socialShare=false
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any
  kindnessResume=sessionStorage.getItem("kindnessResume")
  tocImage="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/76.png"
  tocColor="white"
  lastvisited = false;
  stories: any = []
  pgResume=sessionStorage.getItem("pgResume")
  moduleData:ProgramModel;

  constructor
  (
    private router: Router,
    private service:AdultsService,
    private location:Location,
    private url: ActivatedRoute
  ) 
  { 
    this.getSetModuleData(158);
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
     
    let story = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    story = JSON.parse(story)
    let splitarr = []
    let arraythree = []
    if(story?.length <= 2) 
    {
      story.forEach((e) => 
      {
        arraythree.push(e)
      })
      splitarr.push(arraythree)
    }
    else
    {
      story?.forEach((e) => 
      {
        if(arraythree.length < 2) 
        {
          arraythree.push(e)
        }
        else 
        {
          splitarr.push(arraythree)
          arraythree = []
          arraythree.push(e)
        }
      })
    }
    this.stories = splitarr
    // this.stories = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    // this.stories = JSON.parse(this.stories)
  }

  ngOnInit() 
  {
    // continue where you left    
    let last = localStorage.getItem('lastvisited');
    if(last === 'T') 
    {
      this.lastvisited = true;
    }
    else 
    {
      this.lastvisited = false;
    }    
    // /continue where you left

    console.log(this.shareUrl,this.loginResponse)
    
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }

    if(!this.t) //if no token in url- not shared
    {
      if(this.loginResponse.Subscriber!=1 && !this.freeScreens.includes(this.screenNumber))
        console.log("move")
    }
    else
    {
      console.log("show")
    }
   
    this.startTime = Date.now();
    this.startTime = Date.now();
    this.createScreen()
  }

  addToken()
  {
    history.replaceState(null, null, this.path+`?t=${this.token}`);
    this.socialShare=true
  }

  toggleBookmark()
  {
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
  }

  submitProgress()
  {
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      { 
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
      })
  }

  ngOnDestroy()
  {}

  routeJournal()
  {
    this.router.navigate(['/teenagers/journal'])
  }

  getSetModuleData(moduleId){
    this.service.setmoduleID(moduleId);
    // this.service.getModulebyId(moduleId).subscribe(res=>{
    //   this.moduleData=res;
    //   this.pgResume= (res[0].lastScreen !="")? "s"+ res[0].lastScreen:"";
    //   console.log(res[0].lastScreen)
    //  });
  }
   youtube(link) 
  {
    this.router.navigate(['/curated/youtubelink', link],{
    state: {
      class: this.bg,
    }})
  }

}