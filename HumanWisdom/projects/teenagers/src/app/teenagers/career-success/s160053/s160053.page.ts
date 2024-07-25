import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s160053',
  templateUrl: './s160053.page.html',
  styleUrls: ['./s160053.page.scss'],
})

export class S160053Page implements OnInit 
{

  bg_tn=""
  bg_cft=""
  bg=""
  hint = ""
  toc = "teenagers/career-success/s160001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 160053
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2357
  reflection: any
  reflectionA: any
  r160053 = JSON.parse(sessionStorage.getItem("r160053"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service:TeenagersService,
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
    
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r160053", JSON.stringify(e))
    this.r160053 = sessionStorage.getItem("r160053")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r160053
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/career-success/s160054'])

      },
      () => {
        this.router.navigate(['/teenagers/career-success/s160054'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/career-success/s160052'])
  }

  ngOnDestroy() 
  {}

}