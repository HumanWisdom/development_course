import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s143097',
  templateUrl: './s143097.page.html',
  styleUrls: ['./s143097.page.scss'],
})
export class S143097Page implements OnInit, OnDestroy 
{

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w5"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 143097
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "diversity-and-inclusion/s143001"
  path = this.router.url
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor
  (
    private router: Router,
    private service: AdultsService,
    private location: Location
  ) 
  { }

  ngOnInit() 
  {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()

    if (this.saveUsername == false) 
    { 
      this.userId = JSON.parse(sessionStorage.getItem("userId")) 
    }
    else 
    { 
      this.userId = JSON.parse(localStorage.getItem("userId")) 
    }
    this.startTime = Date.now();
    this.startTime = Date.now();

    if (JSON.parse(sessionStorage.getItem("bookmark143097")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark143097")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark143097", JSON.stringify(this.bookmark))
  }

  createScreen() 
  {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {})
  }

  submitProgress() 
  {
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

  prev() 
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143096'])
  }

  goNext() 
  {
    // this.router.navigate(['/adults/diversity-and-inclusion/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    if (this.userId !== 563) this.submitProgress()
    this.router.navigate(['/adults/diversity-and-inclusion/s143098'])
  }

  ngOnDestroy() 
  {}

}