import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s131289',
  templateUrl: './s131289.page.html',
  styleUrls: ['./s131289.page.scss'],
})
export class S131289Page implements OnInit {

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w4"
  hint = ""

  toc = "teenagers/relationships/s131001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 131289
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1644
  reflection: any
  reflectionA: any
  r131289 = JSON.parse(sessionStorage.getItem("r131289"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
  ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r131289)
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
    sessionStorage.setItem("r131289", JSON.stringify(e))
    this.r131289 = JSON.parse(sessionStorage.getItem("r131289"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r131289"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/relationships/s131290'])

      },
      () => {
        this.router.navigate(['/teenagers/relationships/s131290'])
      })

  }

  previous() {
    this.router.navigate(['/teenagers/relationships/s131288'])
  }

  ngOnDestroy() {


  }
}
