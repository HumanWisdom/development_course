import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s120051',
  templateUrl: './s120051.page.html',
  styleUrls: ['./s120051.page.scss'],
})
export class S120051Page implements OnInit 
{

  bg_tts = "bg_blue_pink"
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w1" 
  hint = "It may make us love shopping, or make us seek new relationships to get the same thrill of falling in love again.  "
  toc = "teenagers/emotional-needs/s120001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 120051
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1904
  reflection: any
  reflectionA: any
  r120051 = JSON.parse(sessionStorage.getItem("r120051"))
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
    sessionStorage.setItem("r120051", JSON.stringify(e))
    this.r120051 = sessionStorage.getItem("r120051")
    console.log(this.r120051)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r120051
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/emotional-needs/s120052'])

      },
      () => {
        this.router.navigate(['/teenagers/emotional-needs/s120052'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/emotional-needs/s120050'])
  }

  ngOnDestroy() 
  {}

}