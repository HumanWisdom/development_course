import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s143065',
  templateUrl: './s143065.page.html',
  styleUrls: ['./s143065.page.scss'],
})
export class S143065Page implements OnInit 
{

  bg_tn = "bg_292d56"
  bg_cft = "bg_292d56"
  bg = "bg_292d56"
  hint = "It could be you want to decide where to go on holiday, or when making a decision you first consider how it is going to help you personally."
  toc = "/diversity-and-inclusion/s143001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 143065
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1483
  reflection: any
  reflectionA: any
  r143065 = JSON.parse(sessionStorage.getItem("r143065"))
  shared: any
  confirmed: any

  constructor
  (
    private router: Router,
    private service: AdultsService,
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
    sessionStorage.setItem("r143065", JSON.stringify(e))
    this.r143065 = sessionStorage.getItem("r143065")
    console.log(this.r143065)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(this.r143065)
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/diversity-and-inclusion/s143066'])

      },
      () => {
        this.router.navigate(['/adults/diversity-and-inclusion/s143066'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/diversity-and-inclusion/s143064'])
  }

  ngOnDestroy() 
  {}

}