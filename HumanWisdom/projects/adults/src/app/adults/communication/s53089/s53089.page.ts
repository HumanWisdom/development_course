import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'app-s53089',
  templateUrl: './s53089.page.html',
  styleUrls: ['./s53089.page.scss'],
})
export class S53089Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w3"
  hint = ""

  toc = "communication/s53001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 53089
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 451
  reflection: any
  reflectionA: any
  r53089 = JSON.parse(sessionStorage.getItem("r53089"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r53089)



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
    sessionStorage.setItem("r53089", JSON.stringify(e))
    this.r53089 = JSON.parse(sessionStorage.getItem("r53089"))
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/communication/s53090'])
    if (this.userId === 563) return;
    

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r53089"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/communication/s53090'])

      },
      () => {
       
      })





  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/communication/s53088'])
  }

  ngOnDestroy() {


  }

}
