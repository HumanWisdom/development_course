import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156013',
  templateUrl: './s156013.page.html',
  styleUrls: ['./s156013.page.scss'],
})
export class S156013Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w10"
  hint = "Often when you are depressed you lose the motivation to help yourself - so it's important to ask that question and find the right answer for yourself"
  toc = "/dealing-with-depression/s156001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 156013
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2022
  reflection: any
  reflectionA: any
  r156013 = JSON.parse(sessionStorage.getItem("r156013"))
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
    sessionStorage.setItem("r156013", JSON.stringify(e))
    this.r156013 = sessionStorage.getItem("r156013")
    console.log(this.r156013)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r156013
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/dealing-with-depression/s156014'])

      },
      () => {
        this.router.navigate(['/dealing-with-depression/s156014'])
      })
  }

  previous() 
  {
    this.router.navigate(['/dealing-with-depression/s156012'])
  }

  ngOnDestroy() 
  {}

}