import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s122013',
  templateUrl: './s122013.page.html',
  styleUrls: ['./s122013.page.scss'],
})
export class S122013Page implements OnInit 
{

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  hint = " We may be able to meet people who are different with affection. We may be able to move on from all our hurts."
  toc = "teenagers/nature-of-the-i/s122001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 122013
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1922
  reflection: any
  reflectionA: any
  r122013 = JSON.parse(sessionStorage.getItem("r122013"))
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
    sessionStorage.setItem("r122013", JSON.stringify(e))
    this.r122013 = sessionStorage.getItem("r122013")
    console.log(this.r122013)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r122013
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/nature-of-the-i/s122014'])

      },
      () => {
        this.router.navigate(['/teenagers/nature-of-the-i/s122014'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/nature-of-the-i/s122012'])
  }

  ngOnDestroy() 
  {}

}