import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s160067',
  templateUrl: './s160067.page.html',
  styleUrls: ['./s160067.page.scss'],
})

export class S160067Page implements OnInit 
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
  screenNumber = 160067
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2360
  reflection: any
  reflectionA: any
  r160067 = JSON.parse(sessionStorage.getItem("r160067"))
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
    sessionStorage.setItem("r160067", JSON.stringify(e))
    this.r160067 = sessionStorage.getItem("r160067")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r160067
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/career-success/s160068'])

      },
      () => {
        this.router.navigate(['/teenagers/career-success/s160068'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/career-success/s160066'])
  }

  ngOnDestroy() 
  {}

}