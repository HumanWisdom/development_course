import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131271',
  templateUrl: './s131271.page.html',
  styleUrls: ['./s131271.page.scss'],
})
export class S131271Page implements OnInit {

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w4"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 131271
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "teenagers/relationships/s131001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);


  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(
    private router: Router,
    private service: TeenagersService,
    private location: Location
  ) { }
  ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark131271")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark131271")) == 1)
      this.bookmark = 1

  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark131271", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/teenagers/relationships/s131272'])
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
      })



  }
  prev() {
    this.router.navigate(['/teenagers/relationships/s131270'])

  }


  goNext() {

    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }


}
