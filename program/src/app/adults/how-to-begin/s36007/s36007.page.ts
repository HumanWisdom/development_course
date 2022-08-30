import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s36007',
  templateUrl: './s36007.page.html',
  styleUrls: ['./s36007.page.scss'],
})
export class S36007Page implements OnInit {

  bg_tn = "bg_teal"
  bg_cft = "bg_teal"
  bg = "teal_w5"
  hint = "Think of a feeling like fear. What lies behind it? Is it the object that is making you afraid, or your own thinking process?  "

  toc = "how-to-begin/s36000"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 36007
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 282
  reflection: any
  reflectionA: any
  r36007 = JSON.parse(sessionStorage.getItem("r36007"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r36007)



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
    sessionStorage.setItem("r36007", JSON.stringify(e))
    this.r36007 = JSON.parse(sessionStorage.getItem("r36007"))

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r36007"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/how-to-begin/s36008'])

      },
      () => {
        this.router.navigate(['/adults/how-to-begin/s36008'])
      })





  }

  previous() {
    this.router.navigate(['/adults/how-to-begin/s36006'])
  }

  ngOnDestroy() {


  }


}
