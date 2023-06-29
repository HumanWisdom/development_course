import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s127147',
  templateUrl: './s127147.page.html',
  styleUrls: ['./s127147.page.scss'],
})
export class S127147Page implements OnInit 
{

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w6"
  hint = "It could be just calling someone, or making them some food, or saying something nice to them."
  toc = "/habit-addiction/s127001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 127147
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1581
  reflection: any
  reflectionA: any
  r127147 = JSON.parse(sessionStorage.getItem("r127147"))
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
    sessionStorage.setItem("r127147", JSON.stringify(e))
    this.r127147 = sessionStorage.getItem("r127147")
    console.log(this.r127147)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r127147
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/habit-addiction/s127148'])

      },
      () => {
        this.router.navigate(['/habit-addiction/s127148'])
      })
  }

  previous() 
  {
    this.router.navigate(['/habit-addiction/s127146'])
  }

  ngOnDestroy() 
  {}

}