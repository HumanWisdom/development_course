import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s224',
  templateUrl: './s224.page.html',
  styleUrls: ['./s224.page.scss'],
})
export class S224Page implements OnInit, OnDestroy {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "anger_w8"
  hint = "We have explored so much. What has resonated with you?"
  toc = "/anger/s162p0"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 224
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 72
  reflection: any
  reflectionA: any
  r224 = JSON.parse(sessionStorage.getItem("r224"))

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
    this.router.navigate(['/adults/anger/s225'])
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r224", JSON.stringify(e))
    this.r224 = sessionStorage.getItem("r224")
    
    if (this.r224 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r224
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          // this.router.navigate(['/adults/anger/s225'])
        },
        () => {
          // this.router.navigate(['/adults/anger/s225'])
        })
    }

    else {
      this.router.navigate(['/adults/anger/s225'])

    }




  }

  previous() {
    this.router.navigate(['/adults/anger/s223'])
  }
  ngOnDestroy() {


  }

}
