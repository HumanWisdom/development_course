import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s122035p1',
  templateUrl: './s122035p1.page.html',
  styleUrls: ['./s122035p1.page.scss'],
})
export class S122035p1Page implements OnInit 
{

  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w6"
  hint = " It could be letting go of a painful memory, or your attachment to an opinion you have "
  toc = "/nature-of-the-i/s122001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = "122035p1"
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1928
  reflection: any
  reflectionA: any
  r122035p1 = JSON.parse(sessionStorage.getItem("r122035p1"))
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
    sessionStorage.setItem("r122035p1", JSON.stringify(e))
    this.r122035p1 = sessionStorage.getItem("r122035p1")
    console.log(this.r122035p1)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r122035p1
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/nature-of-the-i/s122036'])

      },
      () => {
        this.router.navigate(['/nature-of-the-i/s122036'])
      })
  }

  previous() 
  {
    this.router.navigate(['/nature-of-the-i/s122035'])
  }

  ngOnDestroy() 
  {}

}