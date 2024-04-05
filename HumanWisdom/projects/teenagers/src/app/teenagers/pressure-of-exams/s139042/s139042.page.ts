import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s139042',
  templateUrl: './s139042.page.html',
  styleUrls: ['./s139042.page.scss'],
})
export class S139042Page implements OnInit {

  bg_tn=""
  bg_cft=""
  bg=""

  toc="teenagers/pressure-of-exams/s139001"
  hint = "you could accept them and move on."

  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 139042
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2014
  reflection: any
  reflectionA: any
  r139042 = JSON.parse(sessionStorage.getItem("r139042"))
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
    sessionStorage.setItem("r139042", JSON.stringify(e))
    this.r139042 = sessionStorage.getItem("r139042")
    console.log(this.r139042)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r139042
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/pressure-of-exams/s139043'])

      },
      () => {
        this.router.navigate(['/teenagers/pressure-of-exams/s139043'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/pressure-of-exams/s139041'])
  }

  ngOnDestroy() 
  {}

}