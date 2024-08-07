import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s299',
  templateUrl: './s299.page.html',
  styleUrls: ['./s299.page.scss'],
})
export class S299Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "conditioning_w8"
  hint = "This can make us feel comfortable but since we are never challenged, we stop growing as human beings, and our thinking can get distorted."

  toc = "/conditioning/s232"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 299
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 92
  reflection: any
  reflectionA: any
  r299 = JSON.parse(sessionStorage.getItem("r299"))

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

  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {



      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    

  }

  submitProgress(e) {
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r299", JSON.stringify(e))
    this.r299 = JSON.parse(sessionStorage.getItem("r299"))
    if (this.r299 != null) {
      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": JSON.parse(sessionStorage.getItem("r299"))
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/conditioning/s300'])
        },
        () => {
          this.router.navigate(['/adults/conditioning/s300'])
        })

    }
    else {
      this.router.navigate(['/adults/conditioning/s300'])

    }




  }

  previous() {
    this.router.navigate(['/adults/conditioning/s298'])
  }

  ngOnDestroy() {



  }


}














