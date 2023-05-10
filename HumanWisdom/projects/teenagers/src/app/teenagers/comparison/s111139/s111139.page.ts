import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s111139',
  templateUrl: './s111139.page.html',
  styleUrls: ['./s111139.page.scss'],
})
export class S111139Page implements OnInit 
{

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "green_yellow_w8"
  hint = "That Sharon is just telling her about her holiday and not showing off, and she could be happy for her."
  toc = "/comparison/s111001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 111139
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1299
  reflection: any
  reflectionA: any
  r111139 = JSON.parse(sessionStorage.getItem("r111139"))
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
    sessionStorage.setItem("r111139", JSON.stringify(e))
    this.r111139 = sessionStorage.getItem("r111139")
    console.log(this.r111139)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r111139
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/comparison/s111140'])

      },
      () => {
        this.router.navigate(['/comparison/s111140'])
      })
  }

  previous() 
  {
    this.router.navigate(['/comparison/s111138'])
  }

  ngOnDestroy() 
  {}

}