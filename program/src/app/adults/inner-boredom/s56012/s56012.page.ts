import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s56012',
  templateUrl: './s56012.page.html',
  styleUrls: ['./s56012.page.scss'],
})
export class S56012Page implements OnInit,OnDestroy {

    bg="purple_blue_w10"
    mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
    videoLink=this.mediaVideo+'/inner-boredom/videos/1.2.mp4'  
    title="How do we respond to this inner emptiness or boredom?"
    poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/inner_boredom/inner_boredom_02.jpg"
    
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
   screenType=localStorage.getItem("video")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=56012
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
      console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark56012")))
      if(JSON.parse(sessionStorage.getItem("bookmark56012"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark56012"))==1)
        this.bookmark=1
     
     
   
   
      
    }
    receiveBookmark(e)
    {
      console.log(e)
     if(e==true)
      this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark56012",JSON.stringify(this.bookmark))
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
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/adults/inner-boredom/s56013'])
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
          
          this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
          localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
        })
      
     
     
  
    }
    prev(){
      this.router.navigate(['/adults/inner-boredom/s56011'])
  
  
    }
    ngOnDestroy(){
  
    }
  
  
  }
  
  