import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'HumanWisdom-s142043',
  templateUrl: './s142043.page.html',
  styleUrls: ['./s142043.page.scss'],
})
export class S142043Page implements OnInit {

  bg_tn = "bg_light_blue"
  bg_cft = "bg_light_blue"
  bg = "light_blue_w5"
  hint = ""
  toc = "/making-better-decisions/s142001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 142043
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1819
  reflection: any
  reflectionA: any
  r142043 = JSON.parse(sessionStorage.getItem("r142043"))
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
    sessionStorage.setItem("r142043", JSON.stringify(e))
    this.r142043 = sessionStorage.getItem("r142043")
    console.log(this.r142043)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r142043
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/making-better-decisions/s142044'])

      },
      () => {
        this.router.navigate(['/making-better-decisions/s142044'])
      })
  }

  previous() 
  {
    this.router.navigate(['/making-better-decisions/s142042'])
  }

  ngOnDestroy() 
  {}

}