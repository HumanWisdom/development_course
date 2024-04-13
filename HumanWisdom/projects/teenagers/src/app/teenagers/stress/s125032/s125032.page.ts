import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s125032',
  templateUrl: './s125032.page.html',
  styleUrls: ['./s125032.page.scss'],
})
export class S125032Page implements OnInit 
{

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w7"
  hint = "Look at all the symptoms of stress, and see how many of them apply to you"
  toc = "teenagers/stress/s125001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 125032
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1492
  reflection: any
  reflectionA: any
  r125032 = JSON.parse(sessionStorage.getItem("r125032"))
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
    sessionStorage.setItem("r125032", JSON.stringify(e))
    this.r125032 = sessionStorage.getItem("r125032")
    console.log(this.r125032)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r125032
    }).subscribe(res => {},
      error => {
        console.log(error)
<<<<<<< HEAD
        this.router.navigate(['teenagers/stress/s125033'])

      },
      () => {
        this.router.navigate(['teenagers/stress/s125033'])
=======
        this.router.navigate(['/teenagers/stress/s125033'])

      },
      () => {
        this.router.navigate(['/teenagers/stress/s125033'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
      })
  }

  previous() 
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/stress/s125031'])
=======
    this.router.navigate(['/teenagers/stress/s125031'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

  ngOnDestroy() 
  {}

}