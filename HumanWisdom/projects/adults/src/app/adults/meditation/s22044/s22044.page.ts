import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s22044',
  templateUrl: './s22044.page.html',
  styleUrls: ['./s22044.page.scss'],
})
export class S22044Page implements OnInit {

  bg_tn = "bg_blue"
  bg_cft = "bg_blue"
  bg = "blue_w8"
  hint = "It could be from your childhood, or experience, or social media or TV etc.  "
  toc = "/meditation/s22001"
  path = this.router.url

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 22044
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 164
  reflection: any
  reflectionA: any
  //r22044 = JSON.parse(sessionStorage.getItem("r22044"))
  r22044 = sessionStorage.getItem("r22044") !== 'null' ? sessionStorage.getItem("r22044") : ''
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
    sessionStorage.setItem("r22044", JSON.stringify(e))
    //this.r22044 = sessionStorage.getItem("r22044")
    console.log(this.r22044)


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r22044
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/meditation/s22045'])

      },
      () => {
        this.router.navigate(['/adults/meditation/s22045'])
      })

  }

  previous() {
    this.router.navigate(['/adults/meditation/s22043'])
  }

  ngOnDestroy() {



  }


}
