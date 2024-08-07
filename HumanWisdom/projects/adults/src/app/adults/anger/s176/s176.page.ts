import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s176',
  templateUrl: './s176.page.html',
  styleUrls: ['./s176.page.scss'],
})
export class S176Page implements OnInit, OnDestroy {

  userId: any
  toc = "/anger/s162p0"
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 176
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 64
  rId_1 = 2348

  reflection: any
  reflectionA: any
  r176 = JSON.parse(sessionStorage.getItem("r176"))
  r176_1 = JSON.parse(sessionStorage.getItem("r176_1"))
  hint = "My son did not call on my birthday, My anger is caused by my own expectations";
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  bg_tn = "bg_red_pink"
  bg_cft = "bg_red_pink"
  bg = "bg_176"

  shared: any
  confirmed: any
  scrNumber: any
  progress: any

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
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
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
  sharedForum(e) {
    console.log(e)
    this.shared = e
  }

  confirmShare() {
    this.confirmed = true
  }
  findReflection() {
    for (var i = 0; i < this.reflectionA.length; i++) {



      if (this.rId == this.reflectionA[i].ReflectionId) {
        this.reflection = this.reflectionA[i].Que
        // this.optionList.push(this.questionA[i])
      }

    }
    

  }

  submitProgress_1() {
    sessionStorage.setItem("r176_1", JSON.stringify(this.r176_1))
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId_1,
      "Resp": this.r176_1
    }).subscribe(res => {},
      error => {
        this.submitProgress();
      },
      () => {
       this.submitProgress();
      })
  }

  submitProgress() {
    sessionStorage.setItem("r176", JSON.stringify(this.r176))
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": this.r176
    }).subscribe(res => {},
      error => {
        console.log(error)
        this.router.navigate(['/adults/anger/s177'])
      },
      () => {
        this.router.navigate(['/adults/anger/s177'])
      })


  }

  ngOnDestroy() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()
  }

  getProgress(p) {
    this.service.screenProgress(p)
      .subscribe(
        r => {
          this.progress = parseFloat(r)
          
        }
      )

  }

  goToToc() {
    this.router.navigate(['/adults/' + this.toc])
  }
  goToDash() {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  prev()
  {
    this.router.navigate(['/adults/anger/s175'])
  }
}
