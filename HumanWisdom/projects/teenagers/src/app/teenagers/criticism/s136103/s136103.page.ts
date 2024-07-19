import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s136103',
  templateUrl: './s136103.page.html',
  styleUrls: ['./s136103.page.scss'],
})
export class S136103Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w6"
  hint = " When she felt criticised, she could have not got upset, and asked what she could learn from the criticism "

  toc = "teenagers/criticism/s324"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 136103
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1811
  reflection: any
  reflectionA: any
  r136103 = JSON.parse(sessionStorage.getItem("r136103"))

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
    
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r136103", JSON.stringify(e))
    this.r136103 = sessionStorage.getItem("r136103")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r136103
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/criticism/s136104'])

      },
      () => {
        this.router.navigate(['/teenagers/criticism/s136104'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/criticism/s136102'])
  }

  ngOnDestroy() 
  {}

}