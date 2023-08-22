import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'HumanWisdom-s135044',
  templateUrl: './s135044.page.html',
  styleUrls: ['./s135044.page.scss'],
})
export class S135044Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w12"
  hint = " If people have been mean to you, you may think its normal to be mean to others "
  toc = "/bullying/s135001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 135044
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1752
  reflection: any
  reflectionA: any
  r135044 = JSON.parse(sessionStorage.getItem("r135044"))
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
    sessionStorage.setItem("r135044", JSON.stringify(e))
    this.r135044 = sessionStorage.getItem("r135044")
    console.log(this.r135044)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r135044
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/bullying/s135045'])

      },
      () => {
        this.router.navigate(['/bullying/s135045'])
      })
  }

  previous() 
  {
    this.router.navigate(['/bullying/s135043'])
  }

  ngOnDestroy() 
  {}

}