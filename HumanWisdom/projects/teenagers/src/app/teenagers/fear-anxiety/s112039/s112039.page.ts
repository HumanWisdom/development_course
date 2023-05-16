import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112039',
  templateUrl: './s112039.page.html',
  styleUrls: ['./s112039.page.scss'],
})
export class S112039Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w10"
  hint = " It may stop you doing something you always wanted, for example, like taking a year out to travel around the world, or learning to dance, but you feel scared to do so. "
  toc = "/fear-anxiety/s112001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112039
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1313
  reflection: any
  reflectionA: any
  r112039 = JSON.parse(sessionStorage.getItem("r112039"))
  shared: any
  confirmed: any
  path = this.router.url


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
    sessionStorage.setItem("r112039", JSON.stringify(e))
    this.r112039 = sessionStorage.getItem("r112039")
    console.log(this.r112039)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r112039
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/fear-anxiety/s112040'])

      },
      () => {
        this.router.navigate(['/fear-anxiety/s112040'])
      })
  }

  previous() 
  {
    this.router.navigate(['/fear-anxiety/s112038'])
  }

  ngOnDestroy() 
  {}

}