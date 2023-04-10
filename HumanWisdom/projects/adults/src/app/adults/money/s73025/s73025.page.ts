import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s73025',
  templateUrl: './s73025.page.html',
  styleUrls: ['./s73025.page.scss'],
})
export class S73025Page implements OnInit {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w2"
  hint = " It may make you break the law, or act in corrupt ways, for example.  "
  toc = "/money/s73001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 73025
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 753
  reflection: any
  reflectionA: any
  r73025 = JSON.parse(sessionStorage.getItem("r73025"))

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
    sessionStorage.setItem("r73025", JSON.stringify(e))
    this.r73025 = sessionStorage.getItem("r73025")
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/money/s73026'])
    if (this.userId === 563) return;

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r73025
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        
      },
      () => {
        
      })


  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/money/s73024'])
  }

  ngOnDestroy() {


  }


}
