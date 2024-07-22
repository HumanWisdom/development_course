import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s136015',
  templateUrl: './s136015.page.html',
  styleUrls: ['./s136015.page.scss'],
})
export class S136015Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "criticism_w12"
  hint = "It may make you dislike them, or withdraw from them, or get angry with them"

  toc = "teenagers/criticism/s136001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 136015
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1793
  reflection: any
  reflectionA: any
  r136015 = JSON.parse(sessionStorage.getItem("r136015"))

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
    sessionStorage.setItem("r136015", JSON.stringify(e))
    this.r136015 = sessionStorage.getItem("r136015")
    
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r136015
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/criticism/s136016'])

      },
      () => {
        this.router.navigate(['/teenagers/criticism/s136016'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/criticism/s136014'])
  }

  ngOnDestroy() 
  {}

}