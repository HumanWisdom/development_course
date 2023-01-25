import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s48023',
  templateUrl: './s48023.page.html',
  styleUrls: ['./s48023.page.scss'],
})
export class S48023Page implements OnInit {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w9"
  hint = "  What are your ideas of what it's like to be successful on the inside?  "
  toc = "/success-failure/s48001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 48023
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 709
  reflection: any
  reflectionA: any
  r48023 = JSON.parse(sessionStorage.getItem("r48023"))

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
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r48023", JSON.stringify(e))
    this.r48023 = sessionStorage.getItem("r48023")
    this.router.navigate(['/adults/success-failure/s48024'])
    if (this.userId === 563) return;


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r48023
    }).subscribe(res => {

    },
      error => {
        console.log(error)

      },
      () => {
      })


  }

  previous() {
    this.router.navigate(['/adults/success-failure/s48022'])
  }

  ngOnDestroy() {


  }


}
