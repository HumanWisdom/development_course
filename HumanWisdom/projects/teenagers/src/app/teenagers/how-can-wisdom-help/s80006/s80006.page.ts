import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s80006',
  templateUrl: './s80006.page.html',
  styleUrls: ['./s80006.page.scss'],
})
export class S80006Page implements OnInit,OnDestroy {

  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg="purple_blue_w6"
  //mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/'
  videoLink=this.mediaVideo+'/how_can_wisdom_help/videos/1.5.mp4'  
  //videoLink = "https://www.youtube.com/embed/6GR-VMraIvY"
  title="Addiction"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/how_can_wisdom_help/hcwh_05.svg"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=80006
  startTime:any
  endTime:any
  totalTime:any
  toc="/how-can-wisdom-help/s80001"
  bookmark=0
  path=this.router.url
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
 
  constructor(
    private router: Router,
    private service:TeenagersService,
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
    if(JSON.parse(sessionStorage.getItem("bookmark80006"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark80006"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark80006",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/how-can-wisdom-help/s80007'])
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
    this.router.navigate(['/how-can-wisdom-help/s80005'])
  }

  ngOnDestroy(){}
}