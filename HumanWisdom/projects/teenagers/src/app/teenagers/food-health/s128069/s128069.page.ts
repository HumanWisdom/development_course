import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s128069',
  templateUrl: './s128069.page.html',
  styleUrls: ['./s128069.page.scss'],
})
export class S128069Page implements OnInit 
{

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  hint = "  Our belief maybe we are overweight, or but when we actually weight ourselves, our weight is healthy.  "
  toc = "/food-health/s128001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 128069
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1272
  reflection: any
  reflectionA: any
  r128069 = JSON.parse(sessionStorage.getItem("r128069"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service: TeenagersService,
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
    sessionStorage.setItem("r128069", JSON.stringify(e))
    this.r128069 = sessionStorage.getItem("r128069")
    console.log(this.r128069)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r128069
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/food-health/s128070'])

      },
      () => {
        this.router.navigate(['/food-health/s128070'])
      })
  }

  previous() 
  {
    this.router.navigate(['/food-health/s128068'])
  }

  ngOnDestroy() 
  {}

}