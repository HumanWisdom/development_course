import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s62084',
  templateUrl: './s62084.page.html',
  styleUrls: ['./s62084.page.scss'],
})
export class S62084Page implements OnInit {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w7"
  hint = "  You could spend some time alone, and make your peace with that, for example  "
  toc = "/love/s62001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 62084
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 633
  reflection: any
  reflectionA: any
  r62084 = JSON.parse(sessionStorage.getItem("r62084"))

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
    sessionStorage.setItem("r62084", JSON.stringify(e))
    this.r62084 = sessionStorage.getItem("r62084")
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/love/s62085'])
    if (this.userId === 563) return;


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r62084
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
    this.router.navigate(['/adults/love/s62083'])
  }

  ngOnDestroy() {


  }


}
