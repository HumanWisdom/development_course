import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136074',
  templateUrl: './s136074.page.html',
  styleUrls: ['./s136074.page.scss'],
})
export class S136074Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w3"

  hint = "Because my life is not going the way I want, and I blame myself for that "
  toc = "criticism/s136001"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 136074
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1803
  reflection: any
  reflectionA: any
  r136074 = JSON.parse(sessionStorage.getItem("r136074"))

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
    sessionStorage.setItem("r136074", JSON.stringify(e))
    this.r136074 = sessionStorage.getItem("r136074")
    console.log(this.r136074)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r136074
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/criticism/s136075'])

      },
      () => {
        this.router.navigate(['/criticism/s136075'])
      })
  }

  previous() 
  {
    this.router.navigate(['/criticism/s136073'])
  }

  ngOnDestroy() 
  {}

}