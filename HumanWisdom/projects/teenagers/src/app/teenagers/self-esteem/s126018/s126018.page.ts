import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s126018',
  templateUrl: './s126018.page.html',
  styleUrls: ['./s126018.page.scss'],
})
export class S126018Page implements OnInit 
{

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w4"
  hint = "It may make people not like themselves for who they are, for example."
  toc = "/self-esteem/s126001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 126018
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1553
  reflection: any
  reflectionA: any
  r126018 = JSON.parse(sessionStorage.getItem("r126018"))
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
    sessionStorage.setItem("r126018", JSON.stringify(e))
    this.r126018 = sessionStorage.getItem("r126018")
    console.log(this.r126018)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r126018
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/self-esteem/s126019'])

      },
      () => {
        this.router.navigate(['/self-esteem/s126019'])
      })
  }

  previous() 
  {
    this.router.navigate(['/self-esteem/s126017'])
  }

  ngOnDestroy() 
  {}

}