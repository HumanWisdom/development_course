import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s143027',
  templateUrl: './s143027.page.html',
  styleUrls: ['./s143027.page.scss'],
})
export class S143027Page implements OnInit 
{

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w1"
  hint = ""
  toc = "/diversity-and-inclusion/s143001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 143027
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1475
  reflection: any
  reflectionA: any
  r143027 = JSON.parse(sessionStorage.getItem("r143027"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service: AdultsService,
    private location: Location
  ) 
  { }

  ngOnInit() 
  {
    this.createScreen()
    this.reflectionA = this.qrList.ListOfReflection
    this.findReflection()
    if (this.saveUsername == false) 
    { 
      this.userId = JSON.parse(sessionStorage.getItem("userId")) 
    }
    else 
    { 
      this.userId = JSON.parse(localStorage.getItem("userId")) 
    }
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
    }).subscribe(res => {})
  }

  findReflection() 
  {
    for (var i = 0; i < this.reflectionA.length; i++) 
    {
      if (this.rId == this.reflectionA[i].ReflectionId) 
      {
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
    sessionStorage.setItem("r143027", JSON.stringify(e))
    this.r143027 = sessionStorage.getItem("r143027")
    console.log(this.r143027)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r143027
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/diversity-and-inclusion/s143028'])

      },
      () => {
        this.router.navigate(['/adults/diversity-and-inclusion/s143028'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143026'])
  }

  ngOnDestroy() 
  {}

}