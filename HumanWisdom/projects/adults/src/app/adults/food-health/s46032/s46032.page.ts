import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s46032',
  templateUrl: './s46032.page.html',
  styleUrls: ['./s46032.page.scss'],
})
export class S46032Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "green_w5"
  toc = "/food-health/s46001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 46032
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 739
  reflection: any
  reflectionA: any
  r46032 = JSON.parse(sessionStorage.getItem("r46032"))

  shared: any
  confirmed: any


  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()


    this.reflectionA = this.qrList.ListOfReflection


    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();


  }
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
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
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r46032", JSON.stringify(e))
    this.r46032 = sessionStorage.getItem("r46032")
    console.log(this.r46032)


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r46032
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/food-health/s46033'])

      },
      () => {
        this.router.navigate(['/adults/food-health/s46033'])
      })


  }

  previous() {
    this.router.navigate(['/adults/food-health/s46031'])
  }

  ngOnDestroy() {


  }


}
