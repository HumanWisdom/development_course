import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s190',
  templateUrl: './s190.page.html',
  styleUrls: ['./s190.page.scss'],
})
export class S190Page implements OnInit, OnDestroy {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "anger_w11"
  hint = "You could become quiet, or shout, or become violent even."
  toc = "/anger/s162p0"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 190
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 68
  reflection: any
  reflectionA: any
  r190 = JSON.parse(sessionStorage.getItem("r190"))

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
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
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
    this.router.navigate(['/adults/anger/s191'])
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r190", JSON.stringify(e))
    this.r190 = sessionStorage.getItem("r190")
    
    if (this.r190 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r190
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          // this.router.navigate(['/adults/anger/s191'])
        },
        () => {
          // this.router.navigate(['/adults/anger/s191'])
        })
    }

    else {
      this.router.navigate(['/adults/anger/s191'])

    }




  }

  previous() {
    this.router.navigate(['/adults/anger/s189p6'])
  }
  ngOnDestroy() {


  }

}
