import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s464',
  templateUrl: './s464.page.html',
  styleUrls: ['./s464.page.scss'],
})
export class S464Page implements OnInit {

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w8"
  hint = "You may want to be more attractive, or popular, or funny. All these come from our conditioning influences"
  toc = "/self-esteem/s433"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 464
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 139
  reflection: any
  reflectionA: any
  r464 = JSON.parse(sessionStorage.getItem("r464"))

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
    sessionStorage.setItem("r464", JSON.stringify(e))
    this.r464 = JSON.parse(sessionStorage.getItem("r464"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r464"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/self-esteem/s465'])
      },
      () => {
        this.router.navigate(['/adults/self-esteem/s465'])
      })






  }

  previous() {
    this.router.navigate(['/adults/self-esteem/s463'])
  }

  ngOnDestroy() {


  }

}
