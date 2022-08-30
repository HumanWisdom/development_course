import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s25033',
  templateUrl: './s25033.page.html',
  styleUrls: ['./s25033.page.scss'],
})
export class S25033Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w4"
  hint = "It could be that you assume someone doesn't like you and that is why they ignored you, but they could just be dealing with a different issue and be thinking about that."
  toc = "/self-image/s25001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 25033
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 495
  reflection: any
  reflectionA: any
  r25033 = JSON.parse(sessionStorage.getItem("r25033"))

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
    sessionStorage.setItem("r25033", JSON.stringify(e))
    this.r25033 = sessionStorage.getItem("r25033")
    console.log(this.r25033)


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r25033
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/self-image/s25034'])

      },
      () => {
        this.router.navigate(['/adults/self-image/s25034'])
      })

  }

  previous() {
    this.router.navigate(['/adults/self-image/s25032'])
  }

  ngOnDestroy() {


  }

}
