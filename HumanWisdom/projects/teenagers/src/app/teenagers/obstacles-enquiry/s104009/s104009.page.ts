import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s104009',
  templateUrl: './s104009.page.html',
  styleUrls: ['./s104009.page.scss'],
})
export class S104009Page implements OnInit {

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w5"
  hint = "Examples of this could be that I’m not good enough, or going over a painful memory I want to forget, or confronting a fear I may have."
  toc = "/obstacles-enquiry/s104001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 104009
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1225
  reflection: any
  reflectionA: any
  r104009 = JSON.parse(sessionStorage.getItem("r104009"))
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
    sessionStorage.setItem("r104009", JSON.stringify(e))
    this.r104009 = sessionStorage.getItem("r104009")
    console.log(this.r104009)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r104009
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/obstacles-enquiry/s104010'])

      },
      () => {
        this.router.navigate(['/obstacles-enquiry/s104010'])
      })
  }

  previous() 
  {
    this.router.navigate(['/obstacles-enquiry/s104008'])
  }

  ngOnDestroy() 
  {}

}