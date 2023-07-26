import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import * as jQuery from 'jquery';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s133005',
  templateUrl: './s133005.page.html',
  styleUrls: ['./s133005.page.scss'],
})
export class S133005Page implements OnInit, OnDestroy {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w3"

  title = "What is happiness?"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink = this.mediaAudio + '/happiness/audios/happiness+1.1.mp3'
  colours = ["btn_5circles_01 disabled", " btn_5circles_02 disabled", " btn_5circles_03 disabled", " btn_5circles_04 disabled", " btn_5circles_05"]
  text = [
    "Nurture a quiet mind",
    "Art of enquiry",
    "How the mind works",
    "Pleasure and Desire",
    "Happiness"
  ]

  transcriptPage = "happiness/s133005t"
  toc = "/happiness/s133001"
  bookmark = 0
  path = this.router.url
  avDuration: any
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("audio")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 133005
  startTime: any
  endTime: any
  totalTime: any

  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
    if (JSON.parse(sessionStorage.getItem("bookmark133005")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark133005")) == 1)
      this.bookmark = 1

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

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark133005", JSON.stringify(this.bookmark))
  }

  receiveAvDuration(e) {
    console.log(e)
    this.avDuration = e

  }

  submitProgress() {

    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/happiness/s133006'])
    this.service.submitProgressAv({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "avDuration": this.avDuration
    }).subscribe(res => {

      this.bookmarkList = res.GetBkMrkScr.map(a => parseInt(a.ScrNo))
      localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarkList))
    })




  }
  prev() {
    this.router.navigate(['/happiness/s133004'])


  }
  ngOnDestroy() {
    localStorage.setItem("totalTime133005", this.totalTime)
    localStorage.setItem("avDuration133005", this.avDuration)
  }
}


