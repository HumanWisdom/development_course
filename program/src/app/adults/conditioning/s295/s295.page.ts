import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s295',
  templateUrl: './s295.page.html',
  styleUrls: ['./s295.page.scss'],
})
export class S295Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "conditioning_w4"
  hint = ""

  toc = "/conditioning/s232"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 295
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 91
  reflection: any
  reflectionA: any
  r295 = JSON.parse(sessionStorage.getItem("r295"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r295)



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
    sessionStorage.setItem("r295", JSON.stringify(e))
    this.r295 = JSON.parse(sessionStorage.getItem("r295"))
    if (this.r295 != null) {
      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": JSON.parse(sessionStorage.getItem("r295"))
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/conditioning/s296'])
        },
        () => {
          this.router.navigate(['/adults/conditioning/s296'])
        })

    }
    else {
      this.router.navigate(['/adults/conditioning/s296'])

    }




  }

  previous() {
    this.router.navigate(['/adults/conditioning/s294p1'])
  }

  ngOnDestroy() {



  }


}














