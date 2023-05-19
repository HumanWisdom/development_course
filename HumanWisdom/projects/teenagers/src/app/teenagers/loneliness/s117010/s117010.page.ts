import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s117010',
  templateUrl: './s117010.page.html',
  styleUrls: ['./s117010.page.scss'],
})
export class S117010Page implements OnInit 
{

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "green_yellow_w8"
  hint = " It could be because you were alone, or didn’t feel comfortable with yourself."
  toc = "/loneliness/s117001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 117010
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1230
  reflection: any
  reflectionA: any
  r117010 = JSON.parse(sessionStorage.getItem("r117010"))
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
    sessionStorage.setItem("r117010", JSON.stringify(e))
    this.r117010 = sessionStorage.getItem("r117010")
    console.log(this.r117010)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r117010
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/loneliness/s117011'])

      },
      () => {
        this.router.navigate(['/loneliness/s117011'])
      })
  }

  previous() 
  {
    this.router.navigate(['/loneliness/s117009'])
  }

  ngOnDestroy() 
  {}

}