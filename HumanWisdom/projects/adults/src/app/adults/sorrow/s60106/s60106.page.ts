import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s60106',
  templateUrl: './s60106.page.html',
  styleUrls: ['./s60106.page.scss'],
})
export class S60106Page implements OnInit, OnDestroy {

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_flat"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 60106
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any


  constructor(
    private router: Router,
    private service: AdultsService,
    private location: Location
  ) { }

  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()



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
    this.service.submitProgressText({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime
    }).subscribe(res => {

    })


  }
  ngOnDestroy() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()



  }

}
