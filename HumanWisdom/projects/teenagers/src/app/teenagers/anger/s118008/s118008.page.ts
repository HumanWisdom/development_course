import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s118008',
  templateUrl: './s118008.page.html',
  styleUrls: ['./s118008.page.scss'],
})
export class S118008Page implements OnInit
{

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w6"
  hint = "I always think my anger is justified. I get angry usually when I feel hurt."
  toc = "/teenagers/anger/s118001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 118008
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1404
  reflection: any
  reflectionA: any
  r118008 = JSON.parse(sessionStorage.getItem("r118008"))
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
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r118008", JSON.stringify(e))
    this.r118008 = sessionStorage.getItem("r118008")

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r118008
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/anger/s118009'])

      },
      () => {
        this.router.navigate(['/teenagers/anger/s118009'])
      })
  }

  previous()
  {
    this.router.navigate(['/teenagers/anger/s118007'])
  }

  ngOnDestroy()
  {}

}
