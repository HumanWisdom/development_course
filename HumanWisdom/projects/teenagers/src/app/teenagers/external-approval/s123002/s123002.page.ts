import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s123002',
  templateUrl: './s123002.page.html',
  styleUrls: ['./s123002.page.scss'],
})
export class S123002Page implements OnInit, OnDestroy {

  bg_tts = "bg_blue"
  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_flat"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 123002
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "external-approval/s123001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor
  (
    private router: Router,
    private service: TeenagersService,
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

    if (JSON.parse(sessionStorage.getItem("bookmark123002")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark123002")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark123002", JSON.stringify(this.bookmark))
  }

  createScreen() 
  {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })
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
      //this.router.navigate(['/external-approval/s234'])
    })
  }

  goNext() 
  {
    // this.router.navigate(['/external-approval/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    if (this.userId !== 563) this.submitProgress()
    this.router.navigate(['/external-approval/s123003'])
  }

  ngOnDestroy() 
  {}

}