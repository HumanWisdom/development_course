import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136099',
  templateUrl: './s136099.page.html',
  styleUrls: ['./s136099.page.scss'],
})
export class S136099Page implements OnInit {

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_overlay_w2" 
  
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  videoLink=this.mediaVideo+'/Criticism/videos/5.1.mp4'
  title="Role play exploring criticism"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/criticism/criticism_03.jpg"

  toc="/criticism/s136001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=136099
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
    if (this.saveUsername == false) {
      this.userId = JSON.parse(sessionStorage.getItem("userId"))
    }
    else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
    this.createScreen()
    if (JSON.parse(sessionStorage.getItem("bookmark136099")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark136099")) == 1)
      this.bookmark = 1
  }

  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => { })
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark136099", JSON.stringify(this.bookmark))
  }

  receiveAvDuration(e) {
    console.log(e)
    this.avDuration = e
  }

  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/criticism/s136100'])
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
    this.router.navigate(['/criticism/s136098'])
  }

  ngOnDestroy() {
    localStorage.setItem("totalTime136099", this.totalTime)
    localStorage.setItem("avDuration136099", this.avDuration)
  }

}