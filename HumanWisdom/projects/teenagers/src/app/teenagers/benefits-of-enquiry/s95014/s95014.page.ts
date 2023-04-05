import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s95014',
  templateUrl: './s95014.page.html',
  styleUrls: ['./s95014.page.scss'],
})
export class S95014Page implements OnInit {
  bg_tn = "bg_dark_blue"
  bg_cft = "bg_dark_blue"
  bg = "dark_blue_w12"
  toc = "benefits-of-enquiry/s95001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = JSON.parse(localStorage.getItem("moduleId"))
  screenType = JSON.parse(localStorage.getItem("question"))
  screenNumber = 95014
  startTime: any
  endTime: any
  totalTime: any
  bookmark = 0
  queId = 351
  question: any
  optionList = []
  questionA: any
  checkedRight = false
  option: any
  sessionOption = JSON.parse(sessionStorage.getItem("sessionOptions95014"))
  sendOption = []
  elseSelected = false
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"))
  falseans = '';


  constructor(private router: Router,
    private service: TeenagersService,
    private location: Location) { }

  ngOnInit() {
    this.createScreen()
    if (JSON.parse(sessionStorage.getItem("bookmar95015")) == 0)
      this.bookmark = 0
    else if (this.bookmarkList.includes(this.screenNumber) || JSON.parse(sessionStorage.getItem("bookmark95014")) == 1)
      this.bookmark = 1
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
  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark95014", JSON.stringify(this.bookmark))
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
      sessionStorage.setItem("sessionOptions95014", JSON.stringify(this.option))
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
    //this.option.push(optId)

    //this.sendOption.push(this.option[this.option.length-1])
  }


  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/benefits-of-enquiry/s95016'])
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
  prev() {
    this.router.navigate(['/benefits-of-enquiry/s95013'])
  }

  ngOnDestroy() {



  }



}
