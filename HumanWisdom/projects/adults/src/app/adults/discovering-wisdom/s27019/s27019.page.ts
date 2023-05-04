import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s27019',
  templateUrl: './s27019.page.html',
  styleUrls: ['./s27019.page.scss'],
})
export class S27019Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "It may help improve your relationships. The more you understand yourself, the easier it is to understand others. Wisdom enables you to listen deeply, reflect on what you are going to say, and consider how it is going to be received. It allows you to be more compassionate"
  toc = "discovering-wisdom/s27001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 27019
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 253
  reflection: any
  reflectionA: any
  //r27019 = JSON.parse(sessionStorage.getItem("r27019"))
  r27019 = sessionStorage.getItem("r27019") !== 'null' ? sessionStorage.getItem("r27019") : ''
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
    sessionStorage.setItem("r27019", JSON.stringify(e))
    //this.r27019 = sessionStorage.getItem("r27019")
    console.log(this.r27019)
    if (this.r27019 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r27019
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/discovering-wisdom/s27020'])

        },
        () => {
          this.router.navigate(['/adults/discovering-wisdom/s27020'])
        })
    }

    else {
      this.router.navigate(['/adults/discovering-wisdom/s27020'])

    }




  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/discovering-wisdom/s27018'])
  }

  ngOnDestroy() {



  }


}
