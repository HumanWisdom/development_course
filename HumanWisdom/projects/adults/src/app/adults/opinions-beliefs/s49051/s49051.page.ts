import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s49051',
  templateUrl: './s49051.page.html',
  styleUrls: ['./s49051.page.scss'],
})
export class S49051Page implements OnInit, OnDestroy {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w1"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 49051
  startTime: any
  endTime: any
  totalTime: any



  bookmark = 0
  toc = "opinions-beliefs/s49001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);


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

    if (JSON.parse(sessionStorage.getItem("bookmark49051")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark49051")) == 1)
      this.bookmark = 1





  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark49051", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/opinions-beliefs/s49053'])
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
        //this.router.navigate(['/adults/conditioning/s4905134'])
      })



  }
  prev() {
    this.router.navigate(['/adults/opinions-beliefs/s49050'])

  }


  goNext() {
    // this.router.navigate(['/adults/opinions-beliefs/s49051'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }

}
