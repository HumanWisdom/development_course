import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s53086',
  templateUrl: './s53086.page.html',
  styleUrls: ['./s53086.page.scss'],
})
export class S53086Page implements OnInit, OnDestroy {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w1"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 53086
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "communication/s53001"
  path = this.router.url


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

    if (JSON.parse(sessionStorage.getItem("bookmark53086")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark53086")) == 1)
      this.bookmark = 1





  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark53086", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/communication/s53087'])
    if (this.userId === 563) return;
    
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
  prev() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/communication/s53085'])

  }


  goNext() {
    // this.router.navigate(['/adults/communication/s2'])


    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }


}
