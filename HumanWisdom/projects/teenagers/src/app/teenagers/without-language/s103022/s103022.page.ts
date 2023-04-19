import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s103022',
  templateUrl: './s103022.page.html',
  styleUrls: ['./s103022.page.scss'],
})
export class S103022Page implements OnInit {


  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w8"
  hint = " If you can do this, and it takes some practise, your mind goes quiet, and the feeling dissolves into a sense of peace. The quietness you experience is beautiful."
  toc = "without-language/s103001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 103022
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1223
  reflection: any
  reflectionA: any
  r103022 = JSON.parse(sessionStorage.getItem("r103022"))
  shared: any
  confirmed: any
  path = this.router.url

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
    sessionStorage.setItem("r103022", JSON.stringify(e))
    this.r103022 = sessionStorage.getItem("r103022")
    console.log(this.r103022)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r103022
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/without-language/s103023'])

      },
      () => {
        this.router.navigate(['/without-language/s103023'])
      })
  }

  previous() 
  {
    this.router.navigate(['/without-language/s103021'])
  }

  ngOnDestroy() 
  {}

}