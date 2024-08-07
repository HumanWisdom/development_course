import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s24',
  templateUrl: './s24.page.html',
  styleUrls: ['./s24.page.scss'],
})
export class S24Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w7"
  hint = "It is okay to feel envious. It’s only human. How did it affect you and how did you respond?"

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 24
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 7
  reflection: any
  reflectionA: any
  r24 = JSON.parse(sessionStorage.getItem("r24"))

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
    console.log("r24", this.r24)
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
    sessionStorage.setItem("r24", JSON.stringify(e))
    this.r24 = sessionStorage.getItem("r24")
    
    if (this.r24 != null) {

      this.service.submitProgressReflection({
        "ScrNumber": this.screenNumber,
        "UserId": this.userId,
        "BookMark": this.bookmark,
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "timeSpent": this.totalTime,
        "ReflectionId": this.rId,
        "Resp": this.r24
      }).subscribe(res => {

      },
        error => {
          console.log(error)
          this.router.navigate(['/adults/comparison/s25'])
        },
        () => {
          this.router.navigate(['/adults/comparison/s25'])
        })
    }

    else {
      this.router.navigate(['/adults/comparison/s25'])

    }




  }

  previous() {
    this.router.navigate(['/adults/comparison/s23'])
  }

  ngOnDestroy() {



  }

}
