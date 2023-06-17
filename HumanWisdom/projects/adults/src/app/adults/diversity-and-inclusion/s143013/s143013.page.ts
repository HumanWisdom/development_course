import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s143013',
  templateUrl: './s143013.page.html',
  styleUrls: ['./s143013.page.scss'],
})
export class S143013Page implements OnInit 
{

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w11"
  hint = ""
  toc = "/diversity-and-inclusion/s143001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 143013
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1469
  reflection: any
  reflectionA: any
  r143013 = JSON.parse(sessionStorage.getItem("r143013"))
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
    sessionStorage.setItem("r143013", JSON.stringify(e))
    this.r143013 = sessionStorage.getItem("r143013")
    console.log(this.r143013)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r143013
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/diversity-and-inclusion/s143014'])

      },
      () => {
        this.router.navigate(['/adults/diversity-and-inclusion/s143014'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143012'])
  }

  ngOnDestroy() 
  {}

}