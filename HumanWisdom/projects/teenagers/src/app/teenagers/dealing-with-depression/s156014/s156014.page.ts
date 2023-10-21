import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156014',
  templateUrl: './s156014.page.html',
  styleUrls: ['./s156014.page.scss'],
})
export class S156014Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w11"
  hint = ""
  toc = "/dealing-with-depression/s156001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 156014
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2023
  reflection: any
  reflectionA: any
  r156014 = JSON.parse(sessionStorage.getItem("r156014"))
  shared: any
  confirmed: any

  constructor 
  (private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() 
  {
    this.createScreen()
    this.reflectionA = this.qrList.ListOfReflection
    this.findReflection()

    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
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
    }).subscribe(res => {

    })
  }

  findReflection() 
  {
    for (var i = 0; i < this.reflectionA.length; i++) {
      if (this.rId == this.reflectionA[i].ReflectionId) {
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
    sessionStorage.setItem("r156014", JSON.stringify(e))
    this.r156014 = sessionStorage.getItem("r156014")
    console.log(this.r156014)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r156014
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/dealing-with-depression/s156015'])

      },
      () => {
        this.router.navigate(['/dealing-with-depression/s156015'])
      })
  }

  previous() 
  {
    this.router.navigate(['/dealing-with-depression/s156013'])
  }

  ngOnDestroy() 
  {}

}