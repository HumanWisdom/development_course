import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s158012',
  templateUrl: './s158012.page.html',
  styleUrls: ['./s158012.page.scss'],
})
export class S158012Page implements OnInit,OnDestroy {
  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "pink_orange_w8"
  hint = "You may have held the door open for someone, or said something kind."
  toc = "/kindness/s158001"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 158012
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2318
  reflection: any
  reflectionA: any
  r158012 = JSON.parse(sessionStorage.getItem("r158012"))
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
    
  }

  submitProgress(e) 
  {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r158012", JSON.stringify(e))
    this.r158012 = sessionStorage.getItem("r158012")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r158012
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/kindness/s158013'])

      },
      () => {
        this.router.navigate(['/adults/kindness/s158013'])
      })
  }

  previous() 
  {
    this.router.navigate(['/adults/kindness/s158011'])
  }

  ngOnDestroy() 
  {}

}