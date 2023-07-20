import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s34016',
  templateUrl: './s34016.page.html',
  styleUrls: ['./s34016.page.scss'],
})
export class S34016Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "This could be a feeling of irritation at someone, or jealousy, or anger. This could allow you to observe it more closely."
  toc = "key-ideas/s34001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 34016
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 257
  reflection: any
  reflectionA: any
  //r34016 = JSON.parse(sessionStorage.getItem("r34016"))
  r34016 = sessionStorage.getItem("r34016") !== 'null' ? sessionStorage.getItem("r34016") : ''
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
    sessionStorage.setItem("r34016", JSON.stringify(e))
    //this.r34016 = sessionStorage.getItem("r34016")
    console.log(this.r34016)
    if (this.r34016 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r34016
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/key-ideas/s34017'])

        },
        () => {
          this.router.navigate(['/adults/key-ideas/s34017'])
        })
    }

    else {
      this.router.navigate(['/adults/key-ideas/s34017'])

    }




  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/key-ideas/s34015'])
  }

  ngOnDestroy() {



  }


}
