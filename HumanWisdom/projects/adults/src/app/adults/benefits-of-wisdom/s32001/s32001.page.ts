import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s32001',
  templateUrl: './s32001.page.html',
  styleUrls: ['./s32001.page.scss'],
})
export class S32001Page implements OnInit,OnDestroy {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w1"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId:any
  //moduleId=localStorage.getItem("moduleId")
  screenNumber="32001"
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  benefitsWisdomResume=sessionStorage.getItem("benefitsWisdomResume")
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/32.png"
  tocColor="white"
  lastvisited = false;
  stories: any = []

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  )
  { 
    this.service.setmoduleID(32);
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
    localStorage.setItem("moduleId",JSON.stringify(32))
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
  ngOnDestroy(){
   



  }

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
  goBack(){
    this.location.back()
  }

}
