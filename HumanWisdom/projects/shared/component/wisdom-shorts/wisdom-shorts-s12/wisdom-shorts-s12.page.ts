import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from  '../../../services/common.service';
@Component({
  selector: 'HumanWisdom-wisdom-shorts-s12',
  templateUrl: './wisdom-shorts-s12.page.html',
  styleUrls: ['./wisdom-shorts-s12.page.scss'],
})
export class WisdomShortsS12Page implements OnInit {

  bg = "red_pink_w12"
  mediaVideo = JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink = this.mediaVideo + localStorage.getItem("wisdomvideo")
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/wisdom_shorts/wisdom_shorts_12.jpg"

  title = "Be free of Prejudice"
  toc = "/wisdom-shorts"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  screenType = localStorage.getItem("video")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = "s12"
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  avDuration: any
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(
    private router: Router,
    private service: CommonService,
    private location: Location
  ) { }

  ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmarks12")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmarks12")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmarks12", JSON.stringify(this.bookmark))
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

  receiveAvDuration(e) {
    this.avDuration = e
  }

  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

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
    this.router.navigate(['/adults/wisdom-shorts/wisdom-shorts-s13'])
  }

  prev() {
    this.router.navigate(['/adults/wisdom-shorts'])
  }
}