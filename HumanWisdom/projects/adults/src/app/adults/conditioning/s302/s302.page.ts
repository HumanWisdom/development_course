import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s302',
  templateUrl: './s302.page.html',
  styleUrls: ['./s302.page.scss'],
})
export class S302Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "conditioning_w10"
  toc = "conditioning/s232"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  screenType = localStorage.getItem("text")
  moduleId = localStorage.getItem("moduleId")
  screenNumber = 302
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
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

    },
      error => { console.log(error) },
      () => {
        //this.router.navigate(['/adults/conditioning/s234'])
      })


  }
  prev() {
    this.router.navigate(['/adults/conditioning/s301'])


  }

  goNext() {
    this.router.navigate(['/adults/conditioning/s303'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()

  }

  ngOnDestroy() {




  }



}
