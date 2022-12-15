import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s61094',
  templateUrl: './s61094.page.html',
  styleUrls: ['./s61094.page.scss'],
})
export class S61094Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "green_yellow_w1"
  hint = "  If we don’t ask this question, they can fade away, leaving us feeling alone.  "
  toc = "/loneliness/s61001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 61094
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 615
  reflection: any
  reflectionA: any
  r61094 = JSON.parse(sessionStorage.getItem("r61094"))

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
    sessionStorage.setItem("r61094", JSON.stringify(e))
    this.r61094 = sessionStorage.getItem("r61094")
    console.log(this.r61094)


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r61094
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/loneliness/s61095'])

      },
      () => {
        this.router.navigate(['/adults/loneliness/s61095'])
      })


  }

  previous() {
    this.router.navigate(['/adults/loneliness/s61093'])
  }

  ngOnDestroy() {


  }


}
