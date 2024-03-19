import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132041',
  templateUrl: './s132041.page.html',
  styleUrls: ['./s132041.page.scss'],
})
export class S132041Page implements OnInit 
{

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w9"
  hint = "It could be when you meet a person for the first time, you get a sense of whether they are calm or agitated."
  toc = "/communication/s132001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 132041
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1652
  reflection: any
  reflectionA: any
  r132041 = JSON.parse(sessionStorage.getItem("r132041"))
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
    sessionStorage.setItem("r132041", JSON.stringify(e))
    this.r132041 = sessionStorage.getItem("r132041")
    console.log(this.r132041)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r132041
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/communication/s132042'])

      },
      () => {
        this.router.navigate(['/teenagers/communication/s132042'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/communication/s132040'])
  }

  ngOnDestroy() 
  {}

}