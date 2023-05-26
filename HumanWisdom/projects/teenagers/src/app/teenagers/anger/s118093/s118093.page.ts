import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s118093',
  templateUrl: './s118093.page.html',
  styleUrls: ['./s118093.page.scss'],
})
export class S118093Page implements OnInit 
{

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w6"
  hint = "We have explored so much. What has resonated with you?"
  toc = "/anger/s118001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 118093
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1413
  reflection: any
  reflectionA: any
  r118093 = JSON.parse(sessionStorage.getItem("r118093"))
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
    sessionStorage.setItem("r118093", JSON.stringify(e))
    this.r118093 = sessionStorage.getItem("r118093")
    console.log(this.r118093)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r118093
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/anger/s118094'])

      },
      () => {
        this.router.navigate(['/anger/s118094'])
      })
  }

  previous() 
  {
    this.router.navigate(['/anger/s118092'])
  }

  ngOnDestroy() 
  {}

}