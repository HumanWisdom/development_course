import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112101',
  templateUrl: './s112101.page.html',
  styleUrls: ['./s112101.page.scss'],
})
export class S112101Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w4"
  hint = "This could be a fear of meeting people, or of spiders, or of aliens"
  toc = "teenagers/fear-anxiety/s112001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112101
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1330
  reflection: any
  reflectionA: any
  r112101 = JSON.parse(sessionStorage.getItem("r112101"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    
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
    

  }

  submitProgress(e) {
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r112101", JSON.stringify(e))
    this.r112101 = JSON.parse(sessionStorage.getItem("r112101"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r112101"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/fear-anxiety/s112102'])
      },
      () => {
        this.router.navigate(['/teenagers/fear-anxiety/s112102'])
      })

  }

  previous() {
    this.router.navigate(['/teenagers/fear-anxiety/s112100'])
  }

  ngOnDestroy() {


  }

}
