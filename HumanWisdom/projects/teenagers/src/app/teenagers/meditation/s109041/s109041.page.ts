import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s109041',
  templateUrl: './s109041.page.html',
  styleUrls: ['./s109041.page.scss'],
})
export class S109041Page implements OnInit {

  bg_tts = "bg_blue"
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w4"  

  toc="meditation/s109001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=109041
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))

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

    if (JSON.parse(sessionStorage.getItem("bookmark109041")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark109041")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark109041", JSON.stringify(this.bookmark))
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
      //this.router.navigate(['/adults/conditioning/s234'])
    })
  }

  goNext() 
  {
    // this.router.navigate(['/mediation/s109003'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    if (this.userId !== 563) this.submitProgress()
    this.router.navigate(['/meditation/s109042'])
  }

  ngOnDestroy() 
  {}

}