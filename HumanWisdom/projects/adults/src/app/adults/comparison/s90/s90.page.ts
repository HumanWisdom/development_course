import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s90',
  templateUrl: './s90.page.html',
  styleUrls: ['./s90.page.scss'],
})
export class S90Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w6"
  hint = "You could be free."
  toc = "/comparison/s0"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 90
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 42
  reflection: any
  reflectionA: any
  r90 = JSON.parse(sessionStorage.getItem("r90"))
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
    sessionStorage.setItem("r90", JSON.stringify(e))
    this.r90 = sessionStorage.getItem("r90")
    
    if (this.r90 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r90
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/comparison/s91'])

        },
        () => {
          this.router.navigate(['/adults/comparison/s91'])
        })
    }

    else {
      this.router.navigate(['/adults/comparison/s91'])

    }




  }

  previous() {
    this.router.navigate(['/adults/comparison/s89'])
  }

  ngOnDestroy() {



  }

}
