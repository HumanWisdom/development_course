import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s57020',
  templateUrl: './s57020.page.html',
  styleUrls: ['./s57020.page.scss'],
})
export class S57020Page implements OnInit {

  bg_tn = "bg_green"
  bg_cft = "bg_green"
  bg = "green_w5"
  hint = ""
  toc = "/nature-of-i/s57001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 57020
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 537
  reflection: any
  reflectionA: any
  r57020 = JSON.parse(sessionStorage.getItem("r57020"))

  shared: any
  confirmed: any


  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()


    this.reflectionA = this.qrList.ListOfReflection


    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();


  }
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
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
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r57020", JSON.stringify(e))
    this.r57020 = sessionStorage.getItem("r57020")
    


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r57020
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/nature-of-i/s57021'])

      },
      () => {
        this.router.navigate(['/adults/nature-of-i/s57021'])
      })


  }

  previous() {
    this.router.navigate(['/adults/nature-of-i/s57019'])
  }

  ngOnDestroy() {


  }


}
