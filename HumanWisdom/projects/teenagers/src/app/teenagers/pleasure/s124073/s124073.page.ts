import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s124073',
  templateUrl: './s124073.page.html',
  styleUrls: ['./s124073.page.scss'],
})
export class S124073Page implements OnInit 
{

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w5"
  hint = ""
  toc = "/pleasure/s124001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 124073
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1959
  reflection: any
  reflectionA: any
  r124073 = JSON.parse(sessionStorage.getItem("r124073"))
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
    sessionStorage.setItem("r124073", JSON.stringify(e))
    this.r124073 = sessionStorage.getItem("r124073")
    console.log(this.r124073)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r124073
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/pleasure/s124074'])

      },
      () => {
        this.router.navigate(['/pleasure/s124074'])
      })
  }

  previous() 
  {
    this.router.navigate(['/pleasure/s124072'])
  }

  ngOnDestroy() 
  {}

}