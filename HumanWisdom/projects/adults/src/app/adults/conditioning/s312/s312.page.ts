import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s312',
  templateUrl: './s312.page.html',
  styleUrls: ['./s312.page.scss'],
})
export class S312Page implements OnInit {

  bg_tn = "bg_pink_orange"
  bg_cft = "bg_pink_orange"
  bg = "conditioning_w7"
  hint = ""

  toc = "/conditioning/s232"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 312
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 97
  reflection: any
  reflectionA: any
  r312 = JSON.parse(sessionStorage.getItem("r312"))

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
    sessionStorage.setItem("r312", JSON.stringify(e))
    this.r312 = JSON.parse(sessionStorage.getItem("r312"))
    if (this.r312 != null) {
      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": JSON.parse(sessionStorage.getItem("r312"))
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/conditioning/s313'])
        },
        () => {
          this.router.navigate(['/adults/conditioning/s313'])
        })

    }
    else {
      this.router.navigate(['/adults/conditioning/s313'])

    }




  }

  previous() {
    this.router.navigate(['/adults/conditioning/s311'])
  }

  ngOnDestroy() {



  }


}
















