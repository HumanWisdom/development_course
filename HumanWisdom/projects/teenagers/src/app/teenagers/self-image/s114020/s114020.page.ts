import { Component, OnInit,OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-s114020',
  templateUrl: './s114020.page.html',
  styleUrls: ['./s114020.page.scss'],
})
export class S114020Page implements OnInit,OnDestroy {

    bg_tn="bg_blue"
    bg_cft="bg_blue"
    bg="blue_w1"
    mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
    videoLink=this.mediaVideo+'/self-image/videos/1.4.mp4'  
    title="Our images can make us feel hurt"
    poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/self_image/self_image_01.jpg"
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("video")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=114020
    startTime:any
    endTime:any
    totalTime:any  
    toc="/self-image/s114001"
    bookmark=0
    path=this.router.url
    avDuration:any
    bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
    
    constructor
    (
      private router: Router,
      private service:TeenagersService,
      private location:Location
    ) 
    { }
  
    ngOnInit() 
    {
      //localStorage.removeItem("bookmarkList")
      this.createScreen()
      if(this.saveUsername==false)
      {
        this.userId=JSON.parse(sessionStorage.getItem("userId"))
      }
      else
      {
        this.userId=JSON.parse(localStorage.getItem("userId"))
      }
      this.startTime = Date.now();
      this.startTime = Date.now();
      
      if(JSON.parse(sessionStorage.getItem("bookmark114020"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark114020"))==1)
        this.bookmark=1
    }
  
    receiveBookmark(e)
    {
      console.log(e)
      if(e==true)
        this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark114020",JSON.stringify(this.bookmark))
    }
  
    createScreen()
    {
      this.service.createScreen({
        "ScrId":0,
        "ModuleId":this.moduleId,
        "GSetID":this.screenType,
        "ScreenNo":this.screenNumber
      }).subscribe(res=>{})
    }
  
    submitProgress()
    {
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/self-image/s114021'])
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
  
    prev()
    {
      this.router.navigate(['/self-image/s114019'])
    }
  
    ngOnDestroy()
    {}
  
  }