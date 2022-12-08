import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s44035',
  templateUrl: './s44035.page.html',
  styleUrls: ['./s44035.page.scss'],
})
export class S44035Page implements OnInit, OnDestroy {

  bg_tts = "bg_dark_blue"
  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_flat"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 44035
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "stress/s44001"
  path = this.router.url
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))


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

    if (JSON.parse(sessionStorage.getItem("bookmark44035")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark44035")) == 44035)
      this.bookmark = 44035

  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 44035
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark44035", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/stress/s44036'])
    this.service.submitProgressText({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime
    }).subscribe(res => {

      this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
    },
      error => { console.log(error) },
      () => {
        //this.router.navigate(['/adults/conditioning/s234'])
      })



  }

  goNext() {
    // this.router.navigate(['/adults/stress/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }

}
