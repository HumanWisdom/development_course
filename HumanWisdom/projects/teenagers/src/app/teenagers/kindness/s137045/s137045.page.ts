import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s137045',
  templateUrl: './s137045.page.html',
  styleUrls: ['./s137045.page.scss'],
})
export class S137045Page implements OnInit {

  bg_tts = "bg_pink_orange"
  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_flat"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 137045
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "teenagers/kindness/s137001"
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

    if (JSON.parse(sessionStorage.getItem("bookmark137045")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark137045")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark137045", JSON.stringify(this.bookmark))
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
      //this.router.navigate(['/teenagers/kindness/s234'])
    })
  }

  goNext() 
  {
    // this.router.navigate(['/teenagers/kindness/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    if (this.userId !== 563) this.submitProgress()
    this.router.navigate(['/teenagers/kindness/s137046'])
  }

  ngOnDestroy() 
  {}

}