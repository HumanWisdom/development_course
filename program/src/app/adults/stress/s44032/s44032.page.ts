import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'app-s44032',
  templateUrl: './s44032.page.html',
  styleUrls: ['./s44032.page.scss'],
})
export class S44032Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w5"
  hint = "It could be any of the points we have discussed here"

  toc = "stress/s44001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 44032
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 326
  reflection: any
  reflectionA: any
  r44032 = JSON.parse(sessionStorage.getItem("r44032"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
  ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44032)



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
    this.router.navigate(['/adults/stress/s44033'])
    sessionStorage.setItem("r44032", JSON.stringify(e))
    this.r44032 = JSON.parse(sessionStorage.getItem("r44032"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r44032"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)


      },
      () => {
        this.router.navigate(['/adults/stress/s44033'])
      })





  }

  previous() {
    this.router.navigate(['/adults/stress/s44031'])
  }

  ngOnDestroy() {


  }

}
