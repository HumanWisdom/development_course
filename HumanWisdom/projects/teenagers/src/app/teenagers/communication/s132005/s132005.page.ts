import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132005',
  templateUrl: './s132005.page.html',
  styleUrls: ['./s132005.page.scss'],
})
export class S132005Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w3"
  hint = "It could be to understand what the other person is really meaning"

  toc = "communication/s132001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 132005
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 441
  reflection: any
  reflectionA: any
  r132005 = JSON.parse(sessionStorage.getItem("r132005"))

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
    sessionStorage.setItem("r132005", JSON.stringify(e))
    this.r132005 = sessionStorage.getItem("r132005")
    console.log(this.r132005)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r132005
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/relationships/s132006'])

      },
      () => {
        this.router.navigate(['/relationships/s132006'])
      })
  }

  previous() 
  {
    this.router.navigate(['/relationships/s132004'])
  }

  ngOnDestroy() 
  {}

}