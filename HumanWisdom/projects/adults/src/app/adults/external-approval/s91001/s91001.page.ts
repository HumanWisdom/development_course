import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s91001',
  templateUrl: './s91001.page.html',
  styleUrls: ['./s91001.page.scss'],
})
export class S91001Page implements OnInit,OnDestroy {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w1"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="91001"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  pgResume=sessionStorage.getItem("pgResume")
  tocImage="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/91.webp"
  tocColor="white"
  tocAlt=""
  lastvisited = false;
  stories = []
  isLoggedIn = false;
  isSubscriber = false;


  externalapprovalR=sessionStorage.getItem("externalapprovalR")

  constructor(
    private router: Router,
    private service: AdultsService,
    private location:Location
  )
  { 
    this.service.setmoduleID(91);
   
    // this.stories = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    // this.stories = JSON.parse(this.stories)
  }

  ngOnInit() {
    setTimeout(() => {
      let story = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
      story = JSON.parse(story)
      let splitarr = []
      let arraythree = []
      if(story) {
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
      }
    }, 2000)
    if (localStorage.getItem("isloggedin") && localStorage.getItem("isloggedin") === 'T') {
      this.isLoggedIn = true;
    }
    if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
      this.isSubscriber = true;
    }

    if(!localStorage.getItem("NaviagtedFrom"))  
    localStorage.setItem("NaviagtedFrom", '/adults/pathway/understand-how-your-mind-works');

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
    localStorage.setItem("moduleId",JSON.stringify(35))
    this.moduleId=localStorage.getItem("moduleId")
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()
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
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      })
  }

  ngOnDestroy(){}

  routeJournal(){
    this.router.navigate(['/journal'])
  }

 /*  goBack(){
    this.location.back()
  } */

  youtube(link) 
  {
    this.router.navigate(['/curated/youtubelink', link],{
    state: {
      class: this.bg,
    }})
  }
}