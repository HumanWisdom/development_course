import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s115013',
  templateUrl: './s115013.page.html',
  styleUrls: ['./s115013.page.scss'],
})
export class S115013Page implements OnInit, OnDestroy {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w11"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 115013
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  toc = "teenagers/self-interest/s115001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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

    if (JSON.parse(sessionStorage.getItem("bookmark115013")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark115013")) == 1)
      this.bookmark = 1
  }

  receiveBookmark(e) 
  {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark115013", JSON.stringify(this.bookmark))
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
    this.router.navigate(['/teenagers/self-interest/s115014'])
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
    this.router.navigate(['/teenagers/self-interest/s115012'])
  }

  goNext() 
  {
    // this.router.navigate(['/teenagers/self-interest/s2'])
    if (this.userId !== 563) this.submitProgress()
  }

  ngOnDestroy() 
  {}

}