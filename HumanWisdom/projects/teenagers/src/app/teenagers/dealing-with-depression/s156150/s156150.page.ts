import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156150',
  templateUrl: './s156150.page.html',
  styleUrls: ['./s156150.page.scss'],
})
export class S156150Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w6"
  hint = "Quite often we are resistant to the idea, and will not even consider it"
  toc = "/dealing-with-depression/s156001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 156150
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 2032
  reflection: any
  reflectionA: any
  r156150 = JSON.parse(sessionStorage.getItem("r156150"))
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
    sessionStorage.setItem("r156150", JSON.stringify(e))
    this.r156150 = sessionStorage.getItem("r156150")
    console.log(this.r156150)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r156150
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/dealing-with-depression/s156151'])

      },
      () => {
        this.router.navigate(['/dealing-with-depression/s156151'])
      })
  }

  previous() 
  {
    this.router.navigate(['/dealing-with-depression/s156149'])
  }

  ngOnDestroy() 
  {}

}