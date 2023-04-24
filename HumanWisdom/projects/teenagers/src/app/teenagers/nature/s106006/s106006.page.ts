import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s106006',
  templateUrl: './s106006.page.html',
  styleUrls: ['./s106006.page.scss'],
})
export class S106006Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "green_yellow_w4"
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  videoLink = this.mediaVideo + '/nature/videos/1.4.mp4'
  title = "Nature meditation 4"
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/nurturing_quiet_mind/naqm_04.jpg"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("video")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 106006
  startTime: any
  endTime: any
  totalTime: any
  toc = "/nature/s106001"
  bookmark = 0
  path = this.router.url
  avDuration: any
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(
    private router: Router,
    private service: TeenagersService,
    private location: Location
  ) { }
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
    
    if(JSON.parse(sessionStorage.getItem("bookmark106006"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark106006"))==1)
      this.bookmark=1
  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark106006", JSON.stringify(this.bookmark))
  }
  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {
    })
  }

  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/nature/s106007'])
    this.service.submitProgressAv({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "avDuration": this.avDuration
    }).subscribe(res => {
      this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
    })
  }
  prev() {
    this.router.navigate(['/nature/s106005'])
  }
  ngOnDestroy() {}

}

