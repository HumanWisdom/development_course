import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s33019',
  templateUrl: './s33019.page.html',
  styleUrls: ['./s33019.page.scss'],
})
export class S33019Page implements OnInit {

  bg_tn = "bg_purple_blue"
  bg_cft = "bg_purple_blue"
  bg = "purple_blue_w1"
  hint = "It could be subjects like stress, anxiety, or your relationships."
  toc = "five-circles/s33001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 33019
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 276
  reflection: any
  reflectionA: any
  //r33019 = JSON.parse(sessionStorage.getItem("r33019"))
  r33019 = sessionStorage.getItem("r33019") !== 'null' ? sessionStorage.getItem("r33019") : ''
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
    sessionStorage.setItem("r33019", JSON.stringify(e))
    //this.r33019 = sessionStorage.getItem("r33019")
    


    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r33019
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/adults/five-circles/s33020'])

      },
      () => {
        this.router.navigate(['/adults/five-circles/s33020'])
      })







  }

  previous() {
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/five-circles/s33018'])
  }

  ngOnDestroy() {



  }


}
