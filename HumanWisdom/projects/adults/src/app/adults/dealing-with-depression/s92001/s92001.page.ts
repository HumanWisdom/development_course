import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s92001',
  templateUrl: './s92001.page.html',
  styleUrls: ['./s92001.page.scss'],
})
export class S92001Page implements OnInit,OnDestroy {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w1"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="92001"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  pgResume=sessionStorage.getItem("pgResume")
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/92.png"
  tocColor="white"
  tocAlt=""
  lastvisited = false;
  stories = []
  dealingwithdepressionResume=sessionStorage.getItem("dealingwithdepressionResume")

  constructor(
    private router: Router,
    private service: AdultsService,
    private location:Location
  )
  { 
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
    // this.stories = JSON.parse(JSON.stringify(localStorage.getItem('wisdomstories')));
    // this.stories = JSON.parse(this.stories)
  }

  ngOnInit() {
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

  goBack(){
    this.location.back()
  }

  youtube(link) 
  {
    this.router.navigate(['/curated/youtubelink', link],{
    state: {
      class: this.bg,
    }})
  }
}