import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s34026',
  templateUrl: './s34026.page.html',
  styleUrls: ['./s34026.page.scss'],
})
export class S34026Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "For example, when I discovered that my opinions just came from my conditioning and were not originally mine anyway, I became less attached to them."
  toc = "key-ideas/s34001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 34026
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 261
  reflection: any
  reflectionA: any
  r34026 = JSON.parse(sessionStorage.getItem("r34026"))

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
    console.log(this.reflection)

  }


  submitProgress(e) {
    console.log("returned response", e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r34026", JSON.stringify(e))
    this.r34026 = sessionStorage.getItem("r34026")
    console.log(this.r34026)
    if (this.r34026 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r34026
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/key-ideas/s34027'])

        },
        () => {
          this.router.navigate(['/adults/key-ideas/s34027'])
        })
    }

    else {
      this.router.navigate(['/adults/key-ideas/s34027'])

    }




  }

  previous() {
    this.router.navigate(['/adults/key-ideas/s34025'])
  }

  ngOnDestroy() {


    //this.submitProgress()
  }


}
