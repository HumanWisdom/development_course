import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s81',
  templateUrl: './s81.page.html',
  styleUrls: ['./s81.page.scss'],
})
export class S81Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w9"
  hint = "First- notice the different ways it works in your relationship, and then ask what is the intelligent way to respond"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 81
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 20
  reflection: any
  reflectionA: any
  r81 = JSON.parse(sessionStorage.getItem("r81"))
  shared: any
  confirmed: any
  toc = "/comparison/s0"
  path = this.router.url



  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    console.log(this.r81)
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
    sessionStorage.setItem("r81", JSON.stringify(e))
    this.r81 = sessionStorage.getItem("r81")
    console.log(this.r81)
    if (this.r81 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r81
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/comparison/s82p1'])
        },
        () => {
          this.router.navigate(['/adults/comparison/s82p1'])
        })
    }

    else {
      this.router.navigate(['/adults/comparison/s89'])

    }




  }

  previous() {
    this.router.navigate(['/adults/comparison/s80'])
  }

  ngOnDestroy() {



  }

}
