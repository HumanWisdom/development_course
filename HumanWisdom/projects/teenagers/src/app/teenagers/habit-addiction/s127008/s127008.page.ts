import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s127008',
  templateUrl: './s127008.page.html',
  styleUrls: ['./s127008.page.scss'],
})
export class S127008Page implements OnInit 
{

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w6"
  hint = " It could be a habit like using your phone too much, or an addiction to alcohol. "
  toc = "teenagers/habit-addiction/s127001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 127008
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1567
  reflection: any
  reflectionA: any
  r127008 = JSON.parse(sessionStorage.getItem("r127008"))
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
    sessionStorage.setItem("r127008", JSON.stringify(e))
    this.r127008 = sessionStorage.getItem("r127008")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r127008
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/habit-addiction/s127009'])

      },
      () => {
        this.router.navigate(['/teenagers/habit-addiction/s127009'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/habit-addiction/s127007'])
  }

  ngOnDestroy() 
  {}

}