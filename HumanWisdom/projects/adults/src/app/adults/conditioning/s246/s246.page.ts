import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";


@Component({
  selector: 'app-s246',
  templateUrl: './s246.page.html',
  styleUrls: ['./s246.page.scss'],
})
export class S246Page implements OnInit {
  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "conditioning_w1"
  hint = ""
  toc = "/conditioning/s232"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 246
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 79
  reflection: any
  reflectionA: any
  r246 = JSON.parse(sessionStorage.getItem("r246"))

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
    sessionStorage.setItem("r246", JSON.stringify(e))
    this.r246 = JSON.parse(sessionStorage.getItem("r246"))
    if (this.r246 != null) {
      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": JSON.parse(sessionStorage.getItem("r246"))
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/conditioning/s247'])
        },
        () => {
          this.router.navigate(['/adults/conditioning/s247'])
        })

    }
    else {
      this.router.navigate(['/adults/conditioning/s247'])

    }



  }

  previous() {
    this.router.navigate(['/adults/conditioning/s245'])
  }

  ngOnDestroy() {



  }


}
