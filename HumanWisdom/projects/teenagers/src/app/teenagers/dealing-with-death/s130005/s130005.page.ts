import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s130005',
  templateUrl: './s130005.page.html',
  styleUrls: ['./s130005.page.scss'],
})
export class S130005Page implements OnInit 
{

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w3"
  hint = "maybe you don’t think about it, and when you do it could make you afraid"
  toc = "/dealing-with-death/s130001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 130005
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1589
  reflection: any
  reflectionA: any
  r130005 = JSON.parse(sessionStorage.getItem("r130005"))
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
    sessionStorage.setItem("r130005", JSON.stringify(e))
    this.r130005 = sessionStorage.getItem("r130005")
    console.log(this.r130005)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r130005
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/dealing-with-death/s130006'])

      },
      () => {
        this.router.navigate(['/dealing-with-death/s130006'])
      })
  }

  previous() 
  {
    this.router.navigate(['/dealing-with-death/s130004'])
  }

  ngOnDestroy() 
  {}

}