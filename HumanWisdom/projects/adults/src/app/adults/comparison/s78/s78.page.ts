import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s78',
  templateUrl: './s78.page.html',
  styleUrls: ['./s78.page.scss'],
})
export class S78Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w7"
  hint = "It could make you feel vain, or bitter, and that’s okay - it’s just human. Explore the process of comparison that operates in the background."

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 78
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 18
  reflection: any
  reflectionA: any
  r78 = JSON.parse(sessionStorage.getItem("r78"))
  shared: any
  confirmed: any
  toc = "/comparison/s0"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);


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
    sessionStorage.setItem("r78", JSON.stringify(e))
    this.r78 = sessionStorage.getItem("r78")
    
    if (this.r78 != "undefined") {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r78
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/comparison/s79'])
        },
        () => {
          this.router.navigate(['/adults/comparison/s79'])
        })
    }

    else {
      this.router.navigate(['/adults/comparison/s79'])

    }




  }

  previous() {
    this.router.navigate(['/adults/comparison/s77'])
  }

  ngOnDestroy() {



  }

}
