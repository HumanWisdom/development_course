import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-s162',
  templateUrl: './s162.page.html',
  styleUrls: ['./s162.page.scss'],
})
export class S162Page implements OnInit, OnDestroy {
  bg_tts = "bg_red_pink"
  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "anger_flat"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 162
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0;
  path:any;
  toc = "/anger/s162p0"
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))
  angerResume = sessionStorage.getItem("pgResume")


  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location
  ) {
    this.path = this.router.url;
    this.service.setmoduleID(14);
  }

  ngOnInit() {
    
    if(!localStorage.getItem("NaviagtedFrom"))  
    localStorage.setItem("NaviagtedFrom", '/adults/pathway/manage-your-emotions');

    //localStorage.removeItem("bookmarkList")
    this.createScreen()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark162")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark162")) == 1)
      this.bookmark = 1





  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark162", JSON.stringify(this.bookmark))
  }
  toggleBookmark() {
    if (this.bookmark == 0)
      this.bookmark = 1
    else
      this.bookmark = 0

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
    //
    this.router.navigate(['/adults/anger/s163'])
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
    })
    // this.router.navigate(['/adults/anger/s163'])


  }
  ngOnDestroy() {
  }

 
}
