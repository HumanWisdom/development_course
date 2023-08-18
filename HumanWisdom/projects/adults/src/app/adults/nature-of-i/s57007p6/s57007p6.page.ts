import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s57007p6',
  templateUrl: './s57007p6.page.html',
  styleUrls: ['./s57007p6.page.scss'],
})
export class S57007p6Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "green_w10"
  hint = "We may be able to meet people who are different with affection. We may be able to move on from all our hurts."
  toc = "/nature-of-i/s57001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = "57007p6"
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 604
  reflection: any
  reflectionA: any
  r57007p6 = JSON.parse(sessionStorage.getItem("r57007p6"))

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
    sessionStorage.setItem("r57007p6", JSON.stringify(e))
    this.r57007p6 = sessionStorage.getItem("r57007p6")
    console.log(this.r57007p6)


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r57007p6
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/nature-of-i/s57008'])

      },
      () => {
        this.router.navigate(['/adults/nature-of-i/s57008'])
      })


  }

  previous() {
    this.router.navigate(['/adults/nature-of-i/s57007p5'])
  }

  ngOnDestroy() {


  }


}
