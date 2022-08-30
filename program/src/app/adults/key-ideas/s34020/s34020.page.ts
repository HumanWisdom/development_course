import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s34020',
  templateUrl: './s34020.page.html',
  styleUrls: ['./s34020.page.scss'],
})
export class S34020Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "Most human beings share the same emotions, want more than they had yesterday, and seek pleasure…"
  toc = "key-ideas/s34001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 34020
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 258
  reflection: any
  reflectionA: any
  r34020 = JSON.parse(sessionStorage.getItem("r34020"))

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
    sessionStorage.setItem("r34020", JSON.stringify(e))
    this.r34020 = sessionStorage.getItem("r34020")
    console.log(this.r34020)
    if (this.r34020 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r34020
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/key-ideas/s34021'])

        },
        () => {
          this.router.navigate(['/adults/key-ideas/s34021'])
        })
    }

    else {
      this.router.navigate(['/adults/key-ideas/s34021'])

    }




  }

  previous() {
    this.router.navigate(['/adults/key-ideas/s34019'])
  }

  ngOnDestroy() {


    //this.submitProgress()
  }


}
