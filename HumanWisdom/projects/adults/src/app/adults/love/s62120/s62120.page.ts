import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s62120',
  templateUrl: './s62120.page.html',
  styleUrls: ['./s62120.page.scss'],
})
export class S62120Page implements OnInit {

  bg_tn = "bg_blue_pink"
  bg_cft = "bg_blue_pink"
  bg = "blue_pink_w5"
  hint = "It could be because you reap what you sow, and because loving others enriches your spirit."
  toc = "/love/s62001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 62120
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 639
  reflection: any
  reflectionA: any
  r62120 = JSON.parse(sessionStorage.getItem("r62120"))

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
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r62120", JSON.stringify(e))
    this.r62120 = sessionStorage.getItem("r62120")
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/love/s62121'])
    if (this.userId === 563) return;

    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r62120
    }).subscribe(res => {

    },
      error => {
        console.log(error)
       

      },
      () => {
        
      })


  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/love/s62119'])
  }

  ngOnDestroy() {


  }


}
