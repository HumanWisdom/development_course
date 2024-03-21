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
  bg_tn = "bg_green_yellow"
  bg_cft = "bg_green_yellow"
  bg = "comparison_envy_w7"

  toc = "teenagers/benefits-of-enquiry/s95001"
   path = setTimeout(() => {
    return this.router.url;
  }, 1000);
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
  enableTick = false;

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

  checkOption(opt)
  {
    this.sessionOption = []
   
    if (opt.CorrectAns)
    {
      this.enableTick = true;
      this.option = opt.OptId
      sessionStorage.setItem("sessionOptions111012", JSON.stringify(this.option))
      document.getElementById(opt.OptId).style.background = '#E58D82';
      document.getElementById(opt.OptId+ 'text').style.color = '#FFFFFF';
      if (this.falseans !== '') {
        document.getElementById(this.falseans).style.background = 'rgba(255,255,255,0.1)';
        document.getElementById(this.falseans + 'text').style.color = 'rgba(255, 255, 255, 0.50)';
        document.getElementById(this.falseans).style.opacity = '0.75';
        this.falseans = opt.OptId
      }
      else
      {
        this.falseans = opt.OptId
      }
    }
    else
    {
      this.enableTick = false;
      if (this.falseans !== '')
      {
        document.getElementById(this.falseans).style.background = 'rgba(255,255,255,0.1)';
        document.getElementById(this.falseans + 'text').style.color = 'rgba(255, 255, 255, 0.50)';
        // document.getElementById(this.falseans).style.opacity = '0.1';
        this.falseans = opt.OptId
      }
      else
      {
        this.falseans = opt.OptId
      }
      document.getElementById(opt.OptId).style.background = '#120F40';
      // document.getElementById(opt.OptId + 'text').style.color = '#FFFFFF';
    }
    console.log(this.enableTick)
  }


  submitProgress() {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

    this.router.navigate(['/teenagers/benefits-of-enquiry/s95016'])
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
    this.router.navigate(['/teenagers/benefits-of-enquiry/s95013'])
  }

  ngOnDestroy() {



  }



}
