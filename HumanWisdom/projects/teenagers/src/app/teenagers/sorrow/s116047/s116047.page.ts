import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116047',
  templateUrl: './s116047.page.html',
  styleUrls: ['./s116047.page.scss'],
})
export class S116047Page implements OnInit,OnDestroy {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w4"
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  videoLink=this.mediaVideo+'/sorrow-loss/videos/2.1.mp4'  
  title="Why is loss painful? "
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/sorrow_loss/sorrow_loss_01.jpg"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=116047
  startTime:any
  endTime:any
  totalTime:any  
  toc="/sorrow/s116001"
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
    
    if(JSON.parse(sessionStorage.getItem("bookmark116047"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark116047"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark116047",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/sorrow/s116048'])
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
    this.router.navigate(['/sorrow/s116046'])
  }

  ngOnDestroy()
  {}
}