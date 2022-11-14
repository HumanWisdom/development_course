import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";
@Component({
  selector: 'app-s12',
  templateUrl: './s12.page.html',
  styleUrls: ['./s12.page.scss'],
})
export class S12Page implements OnInit, OnDestroy {
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = localStorage.getItem("moduleId")
  screenType = localStorage.getItem("question")
  screenNumber = 12
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  queId = 33
  question: any
  optionList = []
  questionA: any
  checkedRight = false
  option = []
  sendOption = []



  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()

    console.log(this.qrList.ListOfQueOpts)
    this.questionA = this.qrList.ListOfQueOpts


    this.findQuestion()
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

  findQuestion() {
    for (var i = 0; i < this.questionA.length; i++) {
      if (this.questionA[i].CorrectAns == "0")
        this.questionA[i].CorrectAns = false
      else
        this.questionA[i].CorrectAns = true


      if (this.queId == this.questionA[i].QueId) {
        this.question = this.questionA[i].Que
        this.optionList.push(this.questionA[i])
      }

    }
    console.log(this.question, this.optionList)

  }

  checkOption(optId) {
    console.log(optId)
    this.option.push(optId)
    console.log(this.option)
    this.sendOption.push(this.option[this.option.length - 1])
  }
  checkright() {
    this.checkedRight = true

  }

  submitProgress() {
    this.service.submitProgressText({
      "ScrNumber": this.screenNumber,
      "UserId": this.userId,
      "BookMark": this.bookmark,
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "timeSpent": this.totalTime
    }).subscribe(res => {

    })


  }
  ngOnDestroy() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    if (this.userId !== 563) this.submitProgress()
  }




}
