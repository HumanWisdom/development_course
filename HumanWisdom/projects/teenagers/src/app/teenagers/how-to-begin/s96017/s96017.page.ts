import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s96017',
  templateUrl: './s96017.page.html',
  styleUrls: ['./s96017.page.scss'],
})
export class S96017Page implements OnInit {

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w5"
  hint = "See where your curiosity takes you. We seem to lose this as we get older. We had it as very young children and need to discover it again.  "

  toc = "how-to-begin/s96001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 96017
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1182
  reflection: any
  reflectionA: any
  r96017 = JSON.parse(sessionStorage.getItem("r96017"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r96017)



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
    sessionStorage.setItem("r96017", JSON.stringify(e))
    this.r96017 = JSON.parse(sessionStorage.getItem("r96017"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r96017"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/how-to-begin/s96018'])

      },
      () => {
        this.router.navigate(['/how-to-begin/s96018'])
      })





  }

  previous() {
    this.router.navigate(['/how-to-begin/s96016'])
  }

  ngOnDestroy() {


  }

}
