import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s104011',
  templateUrl: './s104011.page.html',
  styleUrls: ['./s104011.page.scss'],
})
export class S104011Page implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w11"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 104011
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "/obstacles-enquiry/s104001"
  path = this.router.url
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
    this.startTime = Date.now();
    if (JSON.parse(sessionStorage.getItem("bookmark104011")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark104011")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark104011", JSON.stringify(this.bookmark))
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
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/obstacles-enquiry/s104012'])
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
        //this.router.navigate(['/conditioning/s234'])
      })
  }

  prev() 
  {
    this.router.navigate(['/obstacles-enquiry/s104010'])
  }

  goNext() 
  {
    // this.router.navigate(['/comparison/s2'])
    if (this.userId !== 563) this.submitProgress()
  }

  ngOnDestroy() 
  {}

}