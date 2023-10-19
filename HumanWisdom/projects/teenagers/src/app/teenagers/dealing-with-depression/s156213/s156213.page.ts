import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156213',
  templateUrl: './s156213.page.html',
  styleUrls: ['./s156213.page.scss'],
})
export class S156213Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w7"
  hint = "it could be that you are alive today, your health, the beauty of a blue sky, food on your plate, or people who love you"
  toc = "/dealing-with-depression/s156001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 156213
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2048
  reflection: any
  reflectionA: any
  r156213 = JSON.parse(sessionStorage.getItem("r156213"))
  shared: any
  confirmed: any

  constructor(private router: Router,
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
    sessionStorage.setItem("r156213", JSON.stringify(e))
    this.r156213 = sessionStorage.getItem("r156213")
    console.log(this.r156213)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r156213
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/dealing-with-depression/s156214'])

      },
      () => {
        this.router.navigate(['/dealing-with-depression/s156214'])
      })
  }

  previous() 
  {
    this.router.navigate(['/dealing-with-depression/s156212'])
  }

  ngOnDestroy() 
  {}

}