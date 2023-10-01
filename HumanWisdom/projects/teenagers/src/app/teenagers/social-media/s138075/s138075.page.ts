import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s138075',
  templateUrl: './s138075.page.html',
  styleUrls: ['./s138075.page.scss'],
})

export class S138075Page implements OnInit 
{

  bg_tn=""
  bg_cft=""
  bg=""
  hint = ""
  toc = "/social-media/s138001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 138075
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1863
  reflection: any
  reflectionA: any
  r138075 = JSON.parse(sessionStorage.getItem("r138075"))
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
    console.log(this.reflection)
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r138075", JSON.stringify(e))
    this.r138075 = sessionStorage.getItem("r138075")
    console.log(this.r138075)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r138075
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/social-media/s138076'])

      },
      () => {
        this.router.navigate(['/social-media/s138076'])
      })
  }

  previous() 
  {
    this.router.navigate(['/social-media/s138074'])
  }

  ngOnDestroy() 
  {}

}