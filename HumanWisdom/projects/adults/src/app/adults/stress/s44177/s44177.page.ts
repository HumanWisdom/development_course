import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'app-s44177',
  templateUrl: './s44177.page.html',
  styleUrls: ['./s44177.page.scss'],
})
export class S44177Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w5"
  hint = "This could make someone go and buy something, or chase something, or go on holiday and it's also there when you return from a holiday, or when a relationship ends."

  toc = "stress/s44001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 44177
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 363
  reflection: any
  reflectionA: any
  r44177 = JSON.parse(sessionStorage.getItem("r44177"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
  ) { }

  ngOnInit() {
    this.createScreen()
    



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
    

  }

  submitProgress(e) {
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r44177", JSON.stringify(e))
    this.r44177 = JSON.parse(sessionStorage.getItem("r44177"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r44177"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/stress/s44178'])

      },
      () => {
        this.router.navigate(['/adults/stress/s44178'])
      })





  }

  previous() {
    this.router.navigate(['/adults/stress/s44176'])
  }

  ngOnDestroy() {


  }

}
