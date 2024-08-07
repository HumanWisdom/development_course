import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s168',
  templateUrl: './s168.page.html',
  styleUrls: ['./s168.page.scss'],
})
export class S168Page implements OnInit, OnDestroy {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "anger_w6"
  hint = "I always think my anger is justified. I get angry usually when I feel hurt."
  toc = "/anger/s162p0"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 168
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 63
  reflection: any
  reflectionA: any
  r168 = JSON.parse(sessionStorage.getItem("r168"))

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
    this.router.navigate(['/adults/anger/s169'])
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r168", JSON.stringify(e))
    this.r168 = sessionStorage.getItem("r168")
    
    if (this.r168 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r168
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          // this.router.navigate(['/adults/anger/s169'])
        },
        () => {
          // this.router.navigate(['/adults/anger/s169'])
        })
    }

    else {
      this.router.navigate(['/adults/anger/s169'])

    }




  }

  previous() {
    this.router.navigate(['/adults/anger/s167'])
  }

  ngOnDestroy() {



  }

}
