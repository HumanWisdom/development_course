import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'HumanWisdom-s76026',
  templateUrl: './s76026.page.html',
  styleUrls: ['./s76026.page.scss'],
})
export class S76026Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w12"
  hint = ""
  toc = "/bullying/s76001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 76026
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1051
  reflection: any
  reflectionA: any
  r76026 = JSON.parse(sessionStorage.getItem("r76026"))
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
    sessionStorage.setItem("r76026", JSON.stringify(e))
    this.r76026 = sessionStorage.getItem("r76026")
    console.log(this.r76026)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r76026
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/bullying/s76027'])

      },
      () => {
        this.router.navigate(['/adults/bullying/s76027'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/bullying/s76025'])
  }

  ngOnDestroy() 
  {}

}