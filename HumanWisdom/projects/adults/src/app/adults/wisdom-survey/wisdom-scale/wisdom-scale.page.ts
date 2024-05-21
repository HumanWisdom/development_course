import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-wisdom-scale',
  templateUrl: './wisdom-scale.page.html',
  styleUrls: ['./wisdom-scale.page.scss'],
})
export class WisdomScalePage implements OnInit {

  bg = "bg_01"

  startTime: any
  skipToPage = "/adults/comparison/s159"
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  //qrList=JSON.parse(localStorage.getItem("qrList"))
  qrList: any
  //moduleId=JSON.parse(localStorage.getItem("moduleId"))
  moduleId = 50
  screenNumber = 50001
  screenType = JSON.parse(localStorage.getItem("feedbackSurvey"))

  endTime: any
  totalTime: any
  bookmark: any
  x = []
  q1: any
  q2: any
  q3: any
  q4: any
  q5: any
  q6: any
  q7: any
  q8: any
  q9: any
  q10: any
  optionList1 = []
  optionList2 = []
  optionList3 = []
  optionList4 = []
  optionList5 = []
  optionList6 = []
  optionList7 = []
  optionList8 = []
  optionList9 = []
  optionList10 = []

  s1: any
  s2: any
  s3: any
  s4: any
  s5: any
  s6: any
  s7: any
  s8: any
  s9: any
  s10: any
  question: any
  optionList = []
  questionA: any
  checkedRight = false
  enablebtn = false
  option: any
  sessionOption = JSON.parse(sessionStorage.getItem("sessionOption"))
  sendOption = []

  rating1 = 5
  rating2 = 5
  rating3 = 1
  rating4 = 1
  rating5 = 1
  rating6 = 5
  rating7 = 5
  rating8 = 1
  rating9 = 1
  rating10 = 1
  wisdomScore: any
  nextPath: any
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Happiness Survey' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#E58D82',
      backgroundColor: 'rgba(229, 141, 130, 0.2)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  constructor(private router: Router,
    private service: AdultsService,
    private location: Location,
    public logeventservice: LogEventService,
    private ac: ActivatedRoute, private navigationService: NavigationService,
    private meta: Meta, private title: Title) {

    this.ac.queryParams.subscribe(params => {
      this.nextPath = params['page'];
      if (this.nextPath !== '/adults/discovering-wisdom/s27032') {
        this.enablebtn = true;
      }

    });
    console.log(this.nextPath)
  }

  ngOnInit() {

    this.title.setTitle('Mindful Insights: Our Happiness Survey for a More Fulfilling Life')
    this.meta.updateTag({ property: 'title', content: 'Mindful Insights: Our Happiness Survey for a More Fulfilling Life' })
    this.meta.updateTag({ property: 'description', content: 'Discover mindful insights with our Happiness Survey. Share your thoughts on meditation, spirituality, and other topics related to a more fulfilling life.' })
    this.meta.updateTag({ property: 'keywords', content: 'Personal growth survey,Self-improvement survey,Mindfulness survey,Happiness survey,Success survey,Mental health survey,Life lessons survey,Positive mindset survey' })


    this.createScreen()
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.service.clickModule(50, this.userId)
      .subscribe(res => {
        this.qrList = res
        // localStorage.setItem("qrList",JSON.stringify(this.qrList))
      },
        e => console.log(e),
        () => {

          console.log(this.qrList.ListOfQueOpts)
          this.questionA = this.qrList.ListOfQueOpts

          this.q1 = this.findQuestion(122).Question
          this.optionList1 = this.findQuestion(122).optionList
          this.q2 = this.findQuestion(123).Question
          this.optionList2 = this.findQuestion(123).optionList
          this.q3 = this.findQuestion(124).Question
          this.optionList3 = this.findQuestion(124).optionList
          this.q4 = this.findQuestion(125).Question
          this.optionList4 = this.findQuestion(125).optionList
          this.q5 = this.findQuestion(126).Question
          this.optionList5 = this.findQuestion(126).optionList
          this.q6 = this.findQuestion(127).Question
          this.optionList6 = this.findQuestion(127).optionList
          this.q7 = this.findQuestion(128).Question
          this.optionList7 = this.findQuestion(128).optionList
          this.q8 = this.findQuestion(129).Question
          this.optionList8 = this.findQuestion(129).optionList
          this.q9 = this.findQuestion(130).Question
          this.optionList9 = this.findQuestion(130).optionList
          this.q10 = this.findQuestion(131).Question
          this.optionList10 = this.findQuestion(131).optionList
        })

    this.service.wisdomSurveyinsightsummary(this.userId).subscribe((r) => {
      console.log(r)
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      r = r.sort((a, b) => new Date(a['wsDate']).getTime() - new Date(b['wsDate']).getTime());
      // r = r.sort((a,b) => new Date(b['wsDate']).getDate() - new Date(a['wsDate']).getDate());
      // r = r.sort((a,b) => new Date(a['wsDate']).getFullYear() - new Date(b['wsDate']).getFullYear());
      r.forEach((d) => {
        if (this.lineChartData[0]['data'].length < 6) {
          let name = monthNames[d['month'] - 1];
          this.lineChartData[0]['data'].push(parseInt(d['Score']));
          if (!(this.lineChartLabels.find(a => a.includes(d['year'].slice(-2))))) {
            this.lineChartLabels.push(new Date(d['wsDate']).getDate() + ' ' + name.substring(0, 3) + "'" + d['year'].slice(-2));
          } else {
            this.lineChartLabels.push(new Date(d['wsDate']).getDate() + ' ' + name.substring(0, 3));
          }
        }
      })
    });
  }

  onSelect(event) {

  }

  receiveRating(e) {
    console.log(e)
    e = JSON.parse(e)
    switch (e.Id) {
      case "1": {
        this.rating1 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        console.log(this.rating1)
        this.s1 = this.optionList1.find(x => x.Points == this.rating1).OptId
        console.log("selected rating", this.s1)
        break;
      }
      case "2": {
        this.rating2 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        // this.optionList2.forEach((x)=>{ x.OptId=parseInt(x.OptId) });
        // this.optionList2.sort((a, b) => a.OptId - b.OptId);
        // this.s2=this.optionList2.find(x=>this.optionList2.indexOf(x)+1==e.Rating).OptId
        this.s2 = this.optionList2.find(x => x.Points == this.rating2).OptId
        console.log(this.s2)
        break;
      }
      case "3": {
        this.rating3 = (e.Rating == 0) ? (1) : e.Rating
        this.s3 = this.optionList3.find(x => x.Points == this.rating3).OptId
        console.log("selected rating", this.s3)
        break;
      } case "4": {
        this.rating4 = (e.Rating == 0) ? (1) : e.Rating
        this.s4 = this.optionList4.find(x => x.Points == this.rating4).OptId
        console.log("selected rating", this.s4)
        break;
      } case "5": {
        this.rating5 = (e.Rating == 0) ? (1) : e.Rating
        this.s5 = this.optionList5.find(x => x.Points == this.rating5).OptId
        console.log("selected rating", this.s5)
        break;
      } case "6": {
        this.rating6 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.s6 = this.optionList6.find(x => x.Points == this.rating6).OptId
        console.log("selected rating", this.s6)
        break;

      }
      case "7": {
        this.rating7 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.s7 = this.optionList7.find(x => x.Points == this.rating7).OptId
        console.log("selected rating", this.s7)
        break;

      }
      case "8": {
        this.rating8 = (e.Rating == 0) ? (1) : e.Rating
        this.s8 = this.optionList8.find(x => x.Points == this.rating8).OptId
        console.log("selected rating", this.s8)
        break;

      }
      case "9": {
        this.rating9 = (e.Rating == 0) ? (1) : e.Rating
        this.s9 = this.optionList9.find(x => x.Points == this.rating9).OptId
        console.log("selected rating", this.s9)
        break;

      }
      case "10": {
        this.rating10 = (e.Rating == 0) ? (1) : e.Rating
        this.s10 = this.optionList10.find(x => x.Points == this.rating10).OptId
        console.log("selected rating", this.s10)
        break;

      }
      default: {
        console.log("week")
        break;
      }
    }
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
      }
    }
    console.log(question, optionList)
    return ({ "Question": question, "optionList": optionList })
  }

  submitProgress() {
    this.logeventservice.logEvent('click_survey_submit');
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    var optionT = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7, this.s8, this.s9, this.s10]
    this.wisdomScore = (this.rating1 + this.rating2 + this.rating3 + this.rating4 + this.rating5 + this.rating6 + this.rating7 + this.rating8 + this.rating9 + this.rating10) * 2
    localStorage.setItem("wisdomScore", this.wisdomScore)
    console.log(this.wisdomScore, "ws")
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
          this.service.wisdomScore(this.wisdomScore).subscribe(r => console.log(r))
          const { isUseCloseButton } = window.history.state;
          if (isUseCloseButton) {
            this.router.navigate(["/wisdom-survey/wisdom-score"], { state: { 'isUseCloseButton': true } });
          } else {
            this.router.navigate(["/wisdom-survey/wisdom-score"]);
          }
        });
  }

  goBack() {
    // this.location.back()
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  viewClickEvent(url) {
    let res = localStorage.getItem("isloggedin")
    if (res && res === 'T') {
      this.router.navigate([url]);
    } else {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }
  }
}
