import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s130059',
  templateUrl: './s130059.page.html',
  styleUrls: ['./s130059.page.scss'],
})
export class S130059Page implements OnInit 
{

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w3"
  hint = " It may be you value your close relationships, but do not put enough energy into them "
  toc = "teenagers/dealing-with-death/s130001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 130059
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1595
  reflection: any
  reflectionA: any
  r130059 = JSON.parse(sessionStorage.getItem("r130059"))
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
    sessionStorage.setItem("r130059", JSON.stringify(e))
    this.r130059 = sessionStorage.getItem("r130059")
    console.log(this.r130059)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r130059
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/dealing-with-death/s130060'])

      },
      () => {
        this.router.navigate(['/teenagers/dealing-with-death/s130060'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/dealing-with-death/s130058'])
  }

  ngOnDestroy() 
  {}

}