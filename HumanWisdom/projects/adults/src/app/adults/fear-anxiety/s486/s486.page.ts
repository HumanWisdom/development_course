import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router,ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s486',
  templateUrl: './s486.page.html',
  styleUrls: ['./s486.page.scss'],
})
export class S486Page implements OnInit,OnDestroy {
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=486
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
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
  socialShare=false
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any
  fearResume=sessionStorage.getItem("pgResume")
  tocImage="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/19.webp"
  tocColor="white"
  lastvisited = false;
  stories: any = []
  isLoggedIn = false;
  isSubscriber = false;



  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location,
    private url: ActivatedRoute
  ) { 
      this.service.setmoduleID(19);
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

  ngOnInit() {
    if (localStorage.getItem("isloggedin") && localStorage.getItem("isloggedin") === 'T') {
      this.isLoggedIn = true;
    }
    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }

    if(!localStorage.getItem("NaviagtedFrom"))  
    localStorage.setItem("NaviagtedFrom", '/adults/pathway/manage-your-emotions');

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
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(!this.t) //if no token in url- not shared
    {
     
      if(this.loginResponse.Subscriber!=1 && !this.freeScreens.includes(this.screenNumber))
        console.log("move")

    }
    else{
      console.log("show")

    }
     
   
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()
    
    


    
  }
  addToken(){
    history.replaceState(null, null, this.path+`?t=${this.token}`);
    this.socialShare=true
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

  }
  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
    

  }
  /* goBack(){
    this.location.back()
  } */


  submitProgress(){
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
  ngOnDestroy(){
   



  } 

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

}
