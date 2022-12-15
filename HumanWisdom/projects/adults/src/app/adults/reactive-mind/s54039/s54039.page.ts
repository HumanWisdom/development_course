import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s54039',
  templateUrl: './s54039.page.html',
  styleUrls: ['./s54039.page.scss'],
})
export class S54039Page implements OnInit {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w3"
  hint = "It could something simple as if you see an untidy bedroom you will tell your child off each time  "

  toc = "reactive-mind/s54001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 54039
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 480
  reflection: any
  reflectionA: any
  r54039 = JSON.parse(sessionStorage.getItem("r54039"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r54039)



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
    sessionStorage.setItem("r54039", JSON.stringify(e))
    this.r54039 = JSON.parse(sessionStorage.getItem("r54039"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r54039"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/reactive-mind/s54040'])

      },
      () => {
        this.router.navigate(['/adults/reactive-mind/s54040'])
      })





  }

  previous() {
    this.router.navigate(['/adults/reactive-mind/s54038'])
  }

  ngOnDestroy() {


  }

}
