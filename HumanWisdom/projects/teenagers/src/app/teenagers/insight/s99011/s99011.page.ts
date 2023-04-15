import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s99011',
  templateUrl: './s99011.page.html',
  styleUrls: ['./s99011.page.scss'],
})
export class S99011Page implements OnInit {

  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w5"
  hint = "The moment you realise that, you could become a better listener"

  toc = "insight/s99001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 99011
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1192
  reflection: any
  reflectionA: any
  r99011 = JSON.parse(sessionStorage.getItem("r99011"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service:  TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r99011)



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
    sessionStorage.setItem("r99011", JSON.stringify(e))
    this.r99011 = JSON.parse(sessionStorage.getItem("r99011"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r99011"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/insight/s99012'])

      },
      () => {
        this.router.navigate(['/insight/s99012'])
      })





  }

  previous() {
    this.router.navigate(['/insight/s99010'])
  }

  ngOnDestroy() {


  }

}
