import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s47058',
  templateUrl: './s47058.page.html',
  styleUrls: ['./s47058.page.scss'],
})
export class S47058Page implements OnInit, OnDestroy {

  bg_tts = "bg_purple"
  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_flat"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 47058
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "relationships/s47000"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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

    if (JSON.parse(sessionStorage.getItem("bookmark47058")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark47058")) == 47058)
      this.bookmark = 47058

  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 47058
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark47058", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/relationships/s47059'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }

}
