import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131145',
  templateUrl: './s131145.page.html',
  styleUrls: ['./s131145.page.scss'],
})
export class S131145Page implements OnInit 
{

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w11"
  hint = " It may have been as simple as persuading them to play a game you wanted to play."
  toc = "/relationships/s131001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 131145
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1622
  reflection: any
  reflectionA: any
  r131145 = JSON.parse(sessionStorage.getItem("r131145"))
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
    sessionStorage.setItem("r131145", JSON.stringify(e))
    this.r131145 = sessionStorage.getItem("r131145")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r131145
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/relationships/s131146'])

      },
      () => {
        this.router.navigate(['/teenagers/relationships/s131146'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/relationships/s131144'])
  }

  ngOnDestroy() 
  {}

}