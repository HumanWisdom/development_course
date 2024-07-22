import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s159059',
  templateUrl: './s159059.page.html',
  styleUrls: ['./s159059.page.scss'],
})

export class S159059Page implements OnInit 
{

  bg_tn=""
  bg_cft=""
  bg=""
  hint = " It could have shaped your opinions, or beliefs about yourself."
  toc = "/social-media/s159001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 159059
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2336
  reflection: any
  reflectionA: any
  r159059 = JSON.parse(sessionStorage.getItem("r159059"))
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
    
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r159059", JSON.stringify(e))
    this.r159059 = sessionStorage.getItem("r159059")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r159059
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/social-media/s159060'])

      },
      () => {
        this.router.navigate(['/adults/social-media/s159060'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/social-media/s159058'])
  }

  ngOnDestroy() 
  {}

}