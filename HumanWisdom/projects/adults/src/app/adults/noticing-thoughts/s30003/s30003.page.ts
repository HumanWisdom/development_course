import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s30003',
  templateUrl: './s30003.page.html',
  styleUrls: ['./s30003.page.scss'],
})
export class S30003Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w2"
  mediaVideo = JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink = this.mediaVideo + '/noticing_thoughts/videos/1.1.mp4'
  title = "Noticing and documenting our thoughts"
  poster = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/nurturing_quiet_mind/naqm_01.jpg"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))

  screenType = localStorage.getItem("video")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 30003
  startTime: any
  endTime: any
  totalTime: any


  toc = ""
  bookmark = 0
  path = this.router.url
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

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark30003")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark30003")) == 1)
      this.bookmark = 1

    var container = document.getElementById('not03');

    container.addEventListener("touchstart", startTouch.bind(this), false);
    container.addEventListener("touchmove", moveTouch.bind(this), false);

    var initialX = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      var currentX = e.touches[0].clientX;

      var diffX = initialX - currentX;

      if (diffX > 0) {
        this.submitProgress();
      } else {
        this.prev()
      }

      initialX = null;

      e.preventDefault();
    };




  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark30003", JSON.stringify(this.bookmark))
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
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/noticing-thoughts/s30004'])
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
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/noticing-thoughts/s30002'])


  }
  ngOnDestroy() {

  }


}

