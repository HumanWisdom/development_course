import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136061',
  templateUrl: './s136061.page.html',
  styleUrls: ['./s136061.page.scss'],
})
export class S136061Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_overlay_w5" 
  
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  videoLink=this.mediaVideo+'/Criticism/videos/3.3.mp4'
  title="Responding to criticism with intelligence"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/criticism/criticism_03.jpg"

  toc="/criticism/s136001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

 screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=136061
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  constructor
    (
      private router: Router,
      private service: TeenagersService,
      private location: Location
    ) { }

  ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    if (this.saveUsername == false) {
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    }
    else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark136061")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark136061")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark136061", JSON.stringify(this.bookmark))
  }

  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => { })
  }

  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/criticism/s136062'])
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
    this.router.navigate(['/criticism/s136060'])
  }

  ngOnDestroy() { }

}