import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s92199',
  templateUrl: './s92199.page.html',
  styleUrls: ['./s92199.page.scss'],
})
export class S92199Page implements OnInit,OnDestroy {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w11"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/dealing-with-depression/videos/6.2.mp4'  
  title="How does our conditioning impact our depression?"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/etc/07.jpg"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=92199
  startTime:any
  endTime:any
  totalTime:any
  toc="/dealing-with-depression/s92001"
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

  ngOnInit() 
  {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
    this.startTime = Date.now();
    if(JSON.parse(sessionStorage.getItem("bookmark92199"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark92199"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark92199",JSON.stringify(this.bookmark))
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {})
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['adults/dealing-with-depression/s92200'])
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
    this.router.navigate(['adults/dealing-with-depression/s92198'])
  }

  ngOnDestroy(){}
}