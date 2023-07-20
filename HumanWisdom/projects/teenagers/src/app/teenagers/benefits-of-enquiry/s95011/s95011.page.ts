import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';


@Component({
  selector: 'app-s95011',
  templateUrl: './s95011.page.html',
  styleUrls: ['./s95011.page.scss'],
})
export class S95011Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "green_yellow_w5"
  hint = "This could include problems like stress, anxiety, mental health problems, relationship conflict, addiction, war and climate change."

  toc = "benefits-of-enquiry/s95001"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("reflection")
  screenNumber = 95011
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  rId = 1177
  reflection: any
  reflectionA: any
  r95011 = JSON.parse(sessionStorage.getItem("r95011"))

  shared: any
  confirmed: any

  constructor(private router: Router,
    private service: TeenagersService,
  ) { }

  ngOnInit() {
    this.createScreen()
    console.log(this.r95011)



    this.reflectionA = this.qrList.ListOfReflection


    this.findReflection()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.startTime = Date.now();
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
    console.log(e)
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    sessionStorage.setItem("r95011", JSON.stringify(e))
    this.r95011 = JSON.parse(sessionStorage.getItem("r95011"))

    this.router.navigate(['/benefits-of-enquiry/s95012'])
    this.service.submitProgressReflection({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime,
      "ReflectionId": this.rId,
      "Resp": JSON.parse(sessionStorage.getItem("r95011"))
    }).subscribe(res => {

    },
      error => {
        console.log(error)
        this.router.navigate(['/benefits-of-enquiry/s95012'])

      },
      () => {

      })





  }

  previous() {
    this.router.navigate(['/benefits-of-enquiry/s95010'])
  }

  ngOnDestroy() {


  }


}
