import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'HumanWisdom-s77072',
  templateUrl: './s77072.page.html',
  styleUrls: ['./s77072.page.scss'],
})
export class S77072Page implements OnInit {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w4"
  hint = ""
  toc = "/making-better-decisions/s77001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 77072
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1079
  reflection: any
  reflectionA: any
  r77072 = JSON.parse(sessionStorage.getItem("r77072"))
  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() 
  {
    this.createScreen()
    this.reflectionA = this.qrList.ListOfReflection
    this.findReflection()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
  }

  sharedForum(e) 
  {
    console.log(e)
    this.shared = e
  }

  confirmShare() 
  {
    this.confirmed = true
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

  findReflection() 
  {
    for (var i = 0; i < this.reflectionA.length; i++) {
      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }
    }
    console.log(this.reflection)
  }

  submitProgress(e) 
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r77072", JSON.stringify(e))
    this.r77072 = sessionStorage.getItem("r77072")
    this.router.navigate(['/adults/making-better-decisions/s77073'])
    if (this.userId === 563) return;

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r77072
    }).subscribe(res => {

    },
      error => {
        console.log(error)

      },
      () => {
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/making-better-decisions/s77071'])
  }

  ngOnDestroy() 
  {}

}