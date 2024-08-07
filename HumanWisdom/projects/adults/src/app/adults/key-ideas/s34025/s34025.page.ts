import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s34025',
  templateUrl: './s34025.page.html',
  styleUrls: ['./s34025.page.scss'],
})
export class S34025Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "This could be even before you began this program."
  toc = "key-ideas/s34001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 34025
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 260
  reflection: any
  reflectionA: any
  //r34025 = JSON.parse(sessionStorage.getItem("r34025"))
  r34025 = sessionStorage.getItem("r34025") !== 'null' ? sessionStorage.getItem("r34025") : ''
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
    sessionStorage.setItem("r34025", JSON.stringify(e))
   // this.r34025 = sessionStorage.getItem("r34025")
    
    if (this.r34025 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r34025
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/key-ideas/s34026'])

        },
        () => {
          this.router.navigate(['/adults/key-ideas/s34026'])
        })
    }

    else {
      this.router.navigate(['/adults/key-ideas/s34026'])

    }




  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/key-ideas/s34024'])
  }

  ngOnDestroy() {



  }


}
