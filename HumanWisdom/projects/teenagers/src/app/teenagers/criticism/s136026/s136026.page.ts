import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136026',
  templateUrl: './s136026.page.html',
  styleUrls: ['./s136026.page.scss'],
})
export class S136026Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w2"
  hint = "What is going on in your thinking when you are critical of others?"

  toc = "/criticism/s136001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 136026
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1795
  reflection: any
  reflectionA: any
  r136026 = JSON.parse(sessionStorage.getItem("r136026"))

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
    sessionStorage.setItem("r136026", JSON.stringify(e))
    this.r136026 = sessionStorage.getItem("r136026")
    console.log(this.r136026)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r136026
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/criticism/s136027'])

      },
      () => {
        this.router.navigate(['/criticism/s136027'])
      })
  }

  previous() 
  {
    this.router.navigate(['/criticism/s136025'])
  }

  ngOnDestroy() 
  {}

}