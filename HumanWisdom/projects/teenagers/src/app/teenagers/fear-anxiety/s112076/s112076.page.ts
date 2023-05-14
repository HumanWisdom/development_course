import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112076',
  templateUrl: './s112076.page.html',
  styleUrls: ['./s112076.page.scss'],
})
export class S112076Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w5"
  hint = "This could be to double check you had locked the house when you were pretty sure you had the first time."
  toc = "fear-anxiety/s112001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112076
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 225
  reflection: any
  reflectionA: any
  r112076 = JSON.parse(sessionStorage.getItem("r112076"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r112076)
    this.reflectionA = this.qrList.ListOfReflection

    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
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

  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {
      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    console.log(this.reflection)

  }

  submitProgress(e) {
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r112076", JSON.stringify(e))
    this.r112076 = JSON.parse(sessionStorage.getItem("r112076"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r112076"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/fear-anxiety/s112077'])
      },
      () => {
        this.router.navigate(['/fear-anxiety/s112077'])
      })

  }

  previous() {
    this.router.navigate(['/fear-anxiety/s112075'])
  }

  ngOnDestroy() {


  }

}
