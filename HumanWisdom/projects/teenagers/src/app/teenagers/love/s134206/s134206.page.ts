import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134206',
  templateUrl: './s134206.page.html',
  styleUrls: ['./s134206.page.scss'],
})
export class S134206Page implements OnInit {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w9"

  toc = "teenagers/love/s134001"
<<<<<<< HEAD
    path = setTimeout(() => {
    return this.router.url;
  }, 1000);
=======
  path = this.router.url
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  hint=""

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 134206
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1746
  reflection: any
  reflectionA: any
  r134206 = JSON.parse(sessionStorage.getItem("r134206"))

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
    sessionStorage.setItem("r134206", JSON.stringify(e))
    this.r134206 = sessionStorage.getItem("r134206")
    console.log(this.r134206)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r134206
    }).subscribe(res => {},
      error => {
        console.log(error)
<<<<<<< HEAD
        this.router.navigate(['teenagers/love/s134207'])

      },
      () => {
        this.router.navigate(['teenagers/love/s134207'])
=======
        this.router.navigate(['/teenagers/love/s134207'])

      },
      () => {
        this.router.navigate(['/teenagers/love/s134207'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
      })
  }

  previous() 
  {
<<<<<<< HEAD
    this.router.navigate(['teenagers/love/s134205'])
=======
    this.router.navigate(['/teenagers/love/s134205'])
>>>>>>> 5bf63073094facf5d8a4d68631859365156c688e
  }

  ngOnDestroy() 
  {}

}