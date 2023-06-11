import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s122026',
  templateUrl: './s122026.page.html',
  styleUrls: ['./s122026.page.scss'],
})
export class S122026Page implements OnInit 
{

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  hint = ""
  toc = "/nature-of-the-i/s122001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 122026
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1272
  reflection: any
  reflectionA: any
  r122026 = JSON.parse(sessionStorage.getItem("r122026"))
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
    sessionStorage.setItem("r122026", JSON.stringify(e))
    this.r122026 = sessionStorage.getItem("r122026")
    console.log(this.r122026)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r122026
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/nature-of-the-i/s122027'])

      },
      () => {
        this.router.navigate(['/nature-of-the-i/s122027'])
      })
  }

  previous() 
  {
    this.router.navigate(['/nature-of-the-i/s122025'])
  }

  ngOnDestroy() 
  {}

}