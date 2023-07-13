import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s131282',
  templateUrl: './s131282.page.html',
  styleUrls: ['./s131282.page.scss'],
})
export class S131282Page implements OnInit {

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w3"
  hint = ""

  toc = "relationships/s131001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 131282
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1643
  reflection: any
  reflectionA: any
  r131282 = JSON.parse(sessionStorage.getItem("r131282"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
  ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r131282)
    this.reflectionA = this.qrList.ListOfReflection


    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
  }

  createScreen() {
    this.service.createScreen({
      "ScrId": 0,
      "ModuleId": this.moduleId,
      "GSetID": this.screenType,
      "ScreenNo": this.screenNumber
    }).subscribe(res => {

    })


  }

  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {



      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    console.log(this.reflection)

  }

  submitProgress(e) {
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r131282", JSON.stringify(e))
    this.r131282 = JSON.parse(sessionStorage.getItem("r131282"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r131282"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/relationships/s131283'])

      },
      () => {
        this.router.navigate(['/relationships/s131283'])
      })

  }

  previous() {
    this.router.navigate(['/relationships/s131281'])
  }

  ngOnDestroy() {


  }
}
