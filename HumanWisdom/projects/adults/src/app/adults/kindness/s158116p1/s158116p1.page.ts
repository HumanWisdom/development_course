import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s158116p1',
  templateUrl: './s158116p1.page.html',
  styleUrls: ['./s158116p1.page.scss'],
})
export class S158116p1Page implements OnInit {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w2"
  mediaVideo='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/teenagers'
  videoLink=this.mediaVideo+'/modules/kindness/videos/kindness4.1.mp4'


  // videoLink = "https://www.youtube.com/embed/IElKbxV33Zs"
  //videoLink = "https://www.youtube.com/embed/IElKbxV33Zs"
  title = "A conversation with a teenager about kindness  "
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/pleasure/pleasure_01.jpg"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("video")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = "158116p1"
  startTime: any
  endTime: any
  totalTime: any
  toc = "/kindness/s158001"
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

    if (JSON.parse(sessionStorage.getItem("bookmark158116p1")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark158116p1")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark158116p1", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/kindness/s158117'])
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
    this.router.navigate(['/adults/kindness/s158115'])
  }

  ngOnDestroy() {

  }
}