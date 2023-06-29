import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s127085',
  templateUrl: './s127085.page.html',
  styleUrls: ['./s127085.page.scss'],
})
export class S127085Page implements OnInit 
{

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w10"
  hint = "Someone may have a bigger house than you, or get better grades in school - and this can make you feel less than them, and not good about yourself."
  toc = "/habit-addiction/s127001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 127085
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1584
  reflection: any
  reflectionA: any
  r127085 = JSON.parse(sessionStorage.getItem("r127085"))
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
    sessionStorage.setItem("r127085", JSON.stringify(e))
    this.r127085 = sessionStorage.getItem("r127085")
    console.log(this.r127085)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r127085
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/habit-addiction/s127086'])

      },
      () => {
        this.router.navigate(['/habit-addiction/s127086'])
      })
  }

  previous() 
  {
    this.router.navigate(['/habit-addiction/s127084'])
  }

  ngOnDestroy() 
  {}

}