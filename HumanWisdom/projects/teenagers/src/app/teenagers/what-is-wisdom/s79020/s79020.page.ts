import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s79020',
  templateUrl: './s79020.page.html',
  styleUrls: ['./s79020.page.scss'],
})
export class S79020Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w3"
  hint = "It could be stress, anxiety, relationship challenges, or just not feeling at ease with yourself."
  toc = "/what-is-wisdom/s79001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 79020
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1092
  reflection: any
  reflectionA: any
  r79020 = JSON.parse(sessionStorage.getItem("r79020"))
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
    sessionStorage.setItem("r79020", JSON.stringify(e))
    this.r79020 = sessionStorage.getItem("r79020")
    console.log(this.r79020)

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r79020
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/what-is-wisdom/s79021'])

      },
      () => {
        this.router.navigate(['/teenagers/what-is-wisdom/s79021'])
      })
  }

  previous() 
  {
    this.router.navigate(['/teenagers/what-is-wisdom/s79019'])
  }

  ngOnDestroy() 
  {}

}