import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s56043',
  templateUrl: './s56043.page.html',
  styleUrls: ['./s56043.page.scss'],
})
export class S56043Page implements OnInit,OnDestroy {

    bg="purple_blue_w1"
    mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
    videoLink=this.mediaVideo+'/inner-boredom/videos/2.1.mp4'  
    title="Responding with wisdom"
    poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/inner_boredom/inner_boredom_01.jpg"
    
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
   screenType=localStorage.getItem("video")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=56043
    startTime:any
    endTime:any
    totalTime:any  
   
    
    toc="/inner-boredom/s56001"
    bookmark=0
    path=this.router.url
    avDuration:any
  
    bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
    
    
   
    constructor(
      private router: Router,
      private service:AdultsService,
      private location:Location
    ) { }
  ngOnInit() {
      //localStorage.removeItem("bookmarkList")
      this.createScreen()
      
      if(this.saveUsername==false)
        {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      this.startTime = Date.now();
    
      this.startTime = Date.now();
      console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark56043")))
      if(JSON.parse(sessionStorage.getItem("bookmark56043"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark56043"))==1)
        this.bookmark=1
     
     
   
   
      
    }
    receiveBookmark(e)
    {
      console.log(e)
     if(e==true)
      this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark56043",JSON.stringify(this.bookmark))
    }
  createScreen(){
      this.service.createScreen({
        "ScrId":0,
        "ModuleId":this.moduleId,
        "GSetID":this.screenType,
        "ScreenNo":this.screenNumber
      }).subscribe(res=>
        {
          console.log(res)
        })
      
   
    }
   
  
    submitProgress(){
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/inner-boredom/s56044'])
      this.service.submitProgressAv({
        "ScrNumber":this.screenNumber,
        "UserId":this.userId,
        "BookMark":this.bookmark,
        "ModuleId":this.moduleId,
        "screenType":this.screenType,
        "timeSpent":this.totalTime,
        "avDuration":this.avDuration
      }).subscribe(res=>
        {
          console.log(res)
          this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
          localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
        })
      
     
     
  
    }
    prev(){
      this.router.navigate(['/inner-boredom/s56042'])
  
  
    }
    ngOnDestroy(){
  
    }
  
  
  }
  
  