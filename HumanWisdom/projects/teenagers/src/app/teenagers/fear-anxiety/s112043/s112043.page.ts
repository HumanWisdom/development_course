import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112043',
  templateUrl: './s112043.page.html',
  styleUrls: ['./s112043.page.scss'],
})
export class S112043Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w1"
  hint = ""
  toc = "/fear-anxiety/s112001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112043
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1315
  reflection: any
  reflectionA: any
  r112043 = JSON.parse(sessionStorage.getItem("r112043"))

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
    sessionStorage.setItem("r112043", JSON.stringify(e))
    this.r112043 = sessionStorage.getItem("r112043")
    console.log(this.r112043)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r112043
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/fear-anxiety/s112044'])

      },
      () => {
        this.router.navigate(['/teenagers/fear-anxiety/s112044'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/fear-anxiety/s112042'])
  }

  ngOnDestroy() 
  {}

}