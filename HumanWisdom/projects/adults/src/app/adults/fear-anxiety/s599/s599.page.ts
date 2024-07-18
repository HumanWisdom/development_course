import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s599',
  templateUrl: './s599.page.html',
  styleUrls: ['./s599.page.scss'],
})
export class S599Page implements OnInit {
  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w3"

  toc = "/fear-anxiety/s486"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  hint = ""

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 599
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 244
  reflection: any
  reflectionA: any
  r599 = JSON.parse(sessionStorage.getItem("r599"))

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
    

  }


  submitProgress(e) {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r599", JSON.stringify(e))
    this.r599 = sessionStorage.getItem("r599")
    


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r599
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/fear-anxiety/s600'])

      },
      () => {
        this.router.navigate(['/adults/fear-anxiety/s600'])
      })

  }

  previous() {
    this.router.navigate(['/adults/fear-anxiety/s598'])
  }

  ngOnDestroy() {


  }

}
