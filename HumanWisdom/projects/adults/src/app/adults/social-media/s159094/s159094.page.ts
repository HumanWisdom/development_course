import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s159094',
  templateUrl: './s159094.page.html',
  styleUrls: ['./s159094.page.scss'],
})

export class S159094Page implements OnInit 
{

  bg_tn=""
  bg_cft=""
  bg=""
  hint = " You could be more creative and actually DO something with your time, instead of wasting it."
  toc = "/social-media/s159001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 159094
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2344
  reflection: any
  reflectionA: any
  r159094 = JSON.parse(sessionStorage.getItem("r159094"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service:AdultsService,
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
    sessionStorage.setItem("r159094", JSON.stringify(e))
    this.r159094 = sessionStorage.getItem("r159094")
    console.log(this.r159094)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r159094
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/social-media/s159095'])

      },
      () => {
        this.router.navigate(['/adults/social-media/s159095'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/social-media/s159093'])
  }

  ngOnDestroy() 
  {}

}