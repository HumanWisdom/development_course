import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112067',
  templateUrl: './s112067.page.html',
  styleUrls: ['./s112067.page.scss'],
})
export class S112067Page implements OnInit {

  bg_tn = "bg_purple_red"
  bg_cft = "bg_purple_red"
  bg = "purple_red_w8"
  hint = ""
  toc = "teenagers/fear-anxiety/s112001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 112067
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1323
  reflection: any
  reflectionA: any
  r112067 = JSON.parse(sessionStorage.getItem("r112067"))

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
    sessionStorage.setItem("r112067", JSON.stringify(e))
    this.r112067 = JSON.parse(sessionStorage.getItem("r112067"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r112067"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/teenagers/fear-anxiety/s112068'])
      },
      () => {
        this.router.navigate(['/teenagers/fear-anxiety/s112068'])
      })

  }

  previous() {
    this.router.navigate(['/teenagers/fear-anxiety/s112066'])
  }

  ngOnDestroy() {


  }

}
