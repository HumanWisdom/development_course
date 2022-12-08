import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s11',
  templateUrl: './s11.page.html',
  styleUrls: ['./s11.page.scss'],
})
export class S11Page implements OnInit {

  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w7"
  toc = "/comparison/s0"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = JSON.parse(localStorage.getItem("moduleId"))
  screenType = JSON.parse(localStorage.getItem("question"))
  screenNumber = 11
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  queId = 33
  question: any
  optionList = []
  questionA: any
  checkedRight = false
  option: any
  sessionOption = JSON.parse(sessionStorage.getItem("sessionOptions11"))
  sendOption = []
  elseSelected = false
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))
  falseans = '';

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("bookmark115")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark115")) == 1)
      this.bookmark = 1
    this.createScreen()
    console.log(this.qrList, "Qrlist")
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

  checkOption(opt) {
    this.sessionOption = []
    if (opt.CorrectAns) {
      this.option = opt.OptId
      sessionStorage.setItem("sessionOptions11", JSON.stringify(this.option))
      document.getElementById(opt.OptId).style.background = '#FFC455';
      if (this.falseans !== '') {
        document.getElementById(this.falseans).style.background = '#FFFFFF';
        document.getElementById(this.falseans + 'text').style.color = '#5D5D5D';
        document.getElementById(this.falseans).style.opacity = '0.75';
        this.falseans = opt.OptId
      } else {
        this.falseans = opt.OptId
      }
    } else {
      if (this.falseans !== '') {
        document.getElementById(this.falseans).style.background = '#FFFFFF';
        document.getElementById(this.falseans + 'text').style.color = '#5D5D5D';
        document.getElementById(this.falseans).style.opacity = '0.75';
        this.falseans = opt.OptId
      } else {
        this.falseans = opt.OptId
      }
      document.getElementById(opt.OptId).style.background = '#5D5D5D';
      document.getElementById(opt.OptId + 'text').style.color = '#FFFFFF';
    }
  }


  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/adults/comparison/s13'])
    this.service.submitProgressQuestion({
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "ScrNumber": this.screenNumber,
      "Bookmark": this.bookmark,
      "UserId": this.userId,
      "timeSpent": this.totalTime,
      "OptionIDs": this.option
    })
      .subscribe((res) => { });



  }
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark11", JSON.stringify(this.bookmark))

  }
  prev() {
    this.router.navigate(['/adults/comparison/s10'])
  }

  ngOnDestroy() {



  }



}
