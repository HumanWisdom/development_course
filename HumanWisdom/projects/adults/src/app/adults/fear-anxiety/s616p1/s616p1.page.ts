import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s616p1',
  templateUrl: './s616p1.page.html',
  styleUrls: ['./s616p1.page.scss'],
})
export class S616p1Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w2"
  mediaVideo = JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink = this.mediaVideo + '/events/4.mp4'
  // videoLink = "https://www.youtube.com/embed/IElKbxV33Zs"
  //videoLink = "https://www.youtube.com/embed/IElKbxV33Zs"
  title = "Overcoming anxiety using wisdom"
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/fear_anxiety/fear_anxiety_01.jpg"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("video")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = "616p1"
  startTime: any
  endTime: any
  totalTime: any
  toc = "/fear-anxiety/s486"
  bookmark = 0
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration: any
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(
    private router: Router,
    private service: AdultsService,
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

    if (JSON.parse(sessionStorage.getItem("bookmark616p1")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark616p1")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark616p1", JSON.stringify(this.bookmark))
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
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/fear-anxiety/s617'])
    this.service.submitProgressAv({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "avDuration": this.avDuration
    }).subscribe(res => {
      if(res['GetBkMrkScr']) {
        this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
      }
    })
  }

  prev() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/fear-anxiety/s486'])
  }

  ngOnDestroy() {

  }
}