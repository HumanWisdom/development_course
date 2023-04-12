import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s100014',
  templateUrl: './s100014.page.html',
  styleUrls: ['./s100014.page.scss'],
})
export class S100014Page implements OnInit {

  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "red_pink_w12"
  hint = "You may realise that your mind is comparing all the time, and thats why you are feeling hurt, angry, and jealous."

  toc = "awareness/s100000"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 100014
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1195
  reflection: any
  reflectionA: any
  r100014 = JSON.parse(sessionStorage.getItem("r100014"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r100014)



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
    sessionStorage.setItem("r100014", JSON.stringify(e))
    this.r100014 = JSON.parse(sessionStorage.getItem("r100014"))

    this.router.navigate(['/awareness/s100015'])

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r100014"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/awareness/s100015'])

      },
      () => {
        //this.router.navigate(['/awareness/s100015'])
      })





  }

  previous() {
    this.router.navigate(['/awareness/s100013'])
  }

  ngOnDestroy() {


  }

}
