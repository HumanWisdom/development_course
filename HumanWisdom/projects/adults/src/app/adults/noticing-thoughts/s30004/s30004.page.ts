import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s30004',
  templateUrl: './s30004.page.html',
  styleUrls: ['./s30004.page.scss'],
})
export class S30004Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w2"
  hint = ""

  toc = ""
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 30004
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 440
  reflection: any
  reflectionA: any
  r30004 = JSON.parse(sessionStorage.getItem("r30004"))

  shared: any
  confirmed: any

  constructor(private router: Router, private service: AdultsService,) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r30004)



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
    sessionStorage.setItem("r30004", JSON.stringify(e))
    this.r30004 = JSON.parse(sessionStorage.getItem("r30004"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r30004"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/noticing-thoughts/s30005'])

      },
      () => {
        this.router.navigate(['/adults/noticing-thoughts/s30005'])
      })
  }
  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/noticing-thoughts/s30003'])
  }
  ngOnDestroy() {
  }
}