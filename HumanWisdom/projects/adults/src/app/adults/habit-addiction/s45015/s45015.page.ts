import { Options } from '@angular-slider/ngx-slider';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from "../../adults.service";

@Component({
  selector: 'app-s45015',
  templateUrl: './s45015.page.html',
  styleUrls: ['./s45015.page.scss'],
})
export class S45015Page implements OnInit {

  bg_tn = "bg_purple"
  bg_cft = "bg_purple"
  bg = "purple_w5"
  toc = "/habit-addiction/s45001"
  path = this.router.url
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  qrList = JSON.parse(localStorage.getItem("qrList"))
  moduleId = JSON.parse(localStorage.getItem("moduleId"))
  screenType = JSON.parse(localStorage.getItem("question"))
  screenNumber = 45015
  startTime: any
  endTime: any
  totalTime: any
  bookmark: any
  x = []
  q1: any


  optionList1 = []


  s1: any


  question: any
  optionList = []
  questionA: any
  checkedRight = false
  option: any
  sessionOption = JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption = []
  value1: number = 100

  dummychange: any
  options1: Options = {
    floor: 0,
    ceil: 5
  }




  rating1 = 0



  constructor(private router: Router,
    private service: AdultsService,
    private location: Location) { }

  ngOnInit() {




    this.createScreen()

    console.log(this.qrList.ListOfQueOpts)
    this.questionA = this.qrList.ListOfQueOpts

    this.q1 = this.findQuestion(286).Question
    this.optionList1 = this.findQuestion(286).optionList




    console.log(this.q1, this.optionList1)


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

  findQuestion(q) {
    var optionList = []
    console.log(q, "questionId")
    for (var i = 0; i < this.questionA.length; i++) {
      if (this.questionA[i].CorrectAns == "0")
        this.questionA[i].CorrectAns = false
      else
        this.questionA[i].CorrectAns = true


      if (q == this.questionA[i].QueId) {

        var question = this.questionA[i].Que

        optionList.push(this.questionA[i])

        //this.optionList.push(this.questionA[i])

      }


    }
    console.log(question, optionList)
    return ({ "Question": question, "optionList": optionList })

  }
  receiveRating(e) {
    console.log(e)
    e = JSON.parse(e)

    switch (e.Id) {
      case "1": {
        this.rating1 = e.Rating
        this.s1 = this.optionList1.find(x => x.Points == e.Rating).OptId
        console.log("selected rating", this.s1)
        break;

      }



      default: {
        console.log("week")
        break;
      }
    }


  }




  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/adults/habit-addiction/s45016'])

    var optionT = [this.s1]
    this.option = optionT.join()
    this.service.submitProgressQuestion({
      "ModuleId": this.moduleId,
      "screenType": this.screenType,
      "ScrNumber": this.screenNumber,
      "Bookmark": this.bookmark,
      "UserId": this.userId,
      "timeSpent": this.totalTime,
      "OptionIDs": this.option
    })
      .subscribe((res) => { },
        error => {
          console.log(error)
        },
        () => {

        })


  }

  prev() {
    this.router.navigate(['/adults/habit-addiction/s45014'])

  }
  ngOnDestroy() {


  }


}
