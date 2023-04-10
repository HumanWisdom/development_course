import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s92208',
  templateUrl: './s92208.page.html',
  styleUrls: ['./s92208.page.scss'],
})
export class S92208Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w8"
  hint = "It may mean accepting that someone no longer loves us, or accepting our financial situation or or  our health, or that we are going to die one day"
  toc = "/dealing-with-depression/s92001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 92208
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1135
  reflection: any
  reflectionA: any
  r92208 = JSON.parse(sessionStorage.getItem("r92208"))
  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() 
  {
    this.createScreen()
    this.reflectionA = this.qrList.ListOfReflection
    this.findReflection()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
  }

  sharedForum(e) 
  {
    console.log(e)
    this.shared = e
  }

  confirmShare() 
  {
    this.confirmed = true
  }

  createScreen() 
  {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })
  }

  findReflection() 
  {
    for (var i = 0; i < this.reflectionA.length; i++) {
      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }
    }
    console.log(this.reflection)
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r92208", JSON.stringify(e))
    this.r92208 = sessionStorage.getItem("r92208")
    console.log(this.r92208)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r92208
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/dealing-with-depression/s92209'])

      },
      () => {
        this.router.navigate(['/adults/dealing-with-depression/s92209'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/dealing-with-depression/s92207'])
  }

  ngOnDestroy() 
  {}

}