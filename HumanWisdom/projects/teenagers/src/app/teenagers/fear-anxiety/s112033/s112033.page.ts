import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112033',
  templateUrl: './s112033.page.html',
  styleUrls: ['./s112033.page.scss'],
})
export class S112033Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w5"
  hint = "It could be a fear of being poor, that makes us chase money for example, or a fear of being alone that makes us keep busy from morning to night "

  toc = "fear-anxiety/s112001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112033
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1310
  reflection: any
  reflectionA: any
  r112033 = JSON.parse(sessionStorage.getItem("r112033"))

  shared: any
  confirmed: any
  path=this.router.url
 
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  
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

    if (JSON.parse(sessionStorage.getItem("bookmark112033")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark112033")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark112033", JSON.stringify(this.bookmark))
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

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r112033", JSON.stringify(e))
    this.r112033 = sessionStorage.getItem("r112033")
    console.log(this.r112033)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r112033
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/fear-anxiety/s112036'])

      },
      () => {
        this.router.navigate(['/fear-anxiety/s112034'])
      })
  }

  prev() 
  {
    this.router.navigate(['/fear-anxiety/s112032'])
  }

   ngOnDestroy() 
  {}

}