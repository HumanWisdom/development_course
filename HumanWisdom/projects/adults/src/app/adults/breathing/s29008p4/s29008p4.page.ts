import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s29008p4',
  templateUrl: './s29008p4.page.html',
  styleUrls: ['./s29008p4.page.scss'],
})
export class S29008p4Page implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w1"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/breathing/videos/1.11.mp4'  
  title="Breathing exercise 10"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/nurturing_quiet_mind/naqm_01.jpg"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber="29008p4"
  startTime:any
  endTime:any
  totalTime:any  
  toc="/breathing/s29000"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
    if(JSON.parse(sessionStorage.getItem("bookmark29008p4"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark29008p4"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
     if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark29008p4",JSON.stringify(this.bookmark))
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
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/breathing/s29008p5'])
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
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/breathing/s29008p3'])
  }

  ngOnDestroy(){}
}