import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s140028',
  templateUrl: './s140028.page.html',
  styleUrls: ['./s140028.page.scss'],
})
export class S140028Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w4"
  hint="For example, the divisions seen around the abortion debate in America, or between the Shias and Sunnis."

  toc = "/opinions-beliefs/s140001"
 path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 140028
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1779
  reflection: any
  reflectionA: any
  r140028 = JSON.parse(sessionStorage.getItem("r140028"))

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
    sessionStorage.setItem("r140028", JSON.stringify(e))
    this.r140028 = sessionStorage.getItem("r140028")
    console.log(this.r140028)
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r140028
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/opinions-beliefs/s140029'])

      },
      () => {
        this.router.navigate(['/opinions-beliefs/s140029'])
      })
  }

  previous() 
  {
    this.router.navigate(['/opinions-beliefs/s140027'])
  }

  ngOnDestroy() 
  {}

}