import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'app-s44045',
  templateUrl: './s44045.page.html',
  styleUrls: ['./s44045.page.scss'],
})
export class S44045Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w5"
  hint = "Are you ever critical of yourself? I may be critical about some aspect of my personality and that is a recurring thought in my head. What’s yours?"

  toc = "stress/s44001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 44045
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 328
  reflection: any
  reflectionA: any
  r44045 = JSON.parse(sessionStorage.getItem("r44045"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
  ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r44045)



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
    sessionStorage.setItem("r44045", JSON.stringify(e))
    this.r44045 = JSON.parse(sessionStorage.getItem("r44045"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r44045"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/stress/s44046'])

      },
      () => {
        this.router.navigate(['/adults/stress/s44046'])
      })





  }

  previous() {
    this.router.navigate(['/adults/stress/s44044'])
  }

  ngOnDestroy() {


  }

}
