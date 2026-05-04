import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';



@Component({
  selector: 'app-QuestionAnswersSelection',
  templateUrl: './question-answers-selection.page.html',
  styleUrls: ['./question-answers-selection.page.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('* => left', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => right', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class QuestionAnswersSelection implements OnInit {
  [x: string]: any;
  bg_tn = "bg_green_yellow"
  bg = "comparison_envy_w7"
  toc = "/comparison/s0"
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);

  progress = 0;

  @Input()
  questionAndAns: any;

  @Input()
  question: any;

  @Output() sendRating = new EventEmitter<string>();
  bookmark = 0
  selectedObj = {};
  direction: string = '';
  currentSection = 0;
  isAdults = false;
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
  moduleId = 50
  screenNumber = 50001
  screenType = JSON.parse(localStorage.getItem("feedbackSurvey"))

  endTime: any
  totalTime: any
  startTime: any
  userId: any
  wisdomScore: any
  option: any
  public enableAlert = false;
  public content = '';
  btnDisabled = true;
  prevBtnDisabled = false;
  loading = false;
  loginResponse: any;
  timeoutId: any;

  constructor
    (
      private router: Router,
      private service: OnboardingService,
      public logeventservice: LogEventService,
      private navigation: NavigationService
    ) { 
     if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

    }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
    this.questionAndAns = JSON.parse(localStorage.getItem("questionAns"));
    if (!this.questionAndAns || this.questionAndAns.length === 0) {
      this.getQuestions();
    }
  }

  getQuestions() {
    this.loading = true;
    this.service.clickModule(this.moduleId, this.userId)
      .subscribe(res => {
        let qrList = res
        let questionA = qrList.ListOfQueOpts;
        let obj = {};
        let result = [];
        questionA.forEach((d) => {
          let dataObj = {};

          if (obj[d['Que']]?.OptId) {
            dataObj['OptId'] = obj[d['Que']]['OptId'].concat(d['OptId'])
          } else {
            dataObj['OptId'] = [d['OptId']]
          }

          if (obj[d['Que']]?.OptStr) {
            dataObj['OptStr'] = obj[d['Que']]['OptStr'].concat(d['OptStr'])
          } else {
            dataObj['OptStr'] = [d['OptStr']]
          }

          if (obj[d['Que']]?.Points) {
            dataObj['Points'] = obj[d['Que']]['Points'].concat(d['Points'])
          } else {
            dataObj['Points'] = [d['Points']]
          }
          obj[d['Que']] = dataObj;
        });

        for (const property in obj) {
          let objRes = {
            "Que": property,
            "OptStr": obj[property]['OptStr'],
            "Points": obj[property]['Points'],
            "OptId": obj[property]['OptId'],
          };
          result.push(objRes);
        }

        this.questionAndAns = result;
        localStorage.setItem("questionAns", JSON.stringify(this.questionAndAns))
        this.loading = false;
      },
        e => {
          console.log(e);
          this.loading = false;
        }
      )
  }

  checkOption(index, OptId, i, strSelected) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    let obj = {
      "Id": (index + 1).toString(),
      "Rating": i,
      "s": OptId
    }
    this.selectedObj[index] = strSelected;
    this.receiveRating(JSON.stringify(obj));
    this.btnDisabled = false;
    this.timeoutId = setTimeout(() => {

      if (index == 9)
        this.submitProgress();
      else
        this.next('click_Daily_Practice_Next');

    }, 400);

  }

  receiveBookmark(e) {
    console.log(e)
    if (e == true)
      this.bookmark = 1
    else
      this.bookmark = 0
    sessionStorage.setItem("bookmark11", JSON.stringify(this.bookmark))
  }


  next(event) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    window.scrollTo(0, 0);
    this.currentSection++;
    if (this.currentSection >= 10) {
      this.currentSection = 0;
    }

    if (this.currentSection === 1) {
      this.prevBtnDisabled = true;
    }
    this.progress = this.progress + 10;
    if (this.currentSection === 1 && this.s2) {

      this.btnDisabled = false;
    } else if (this.currentSection === 2 && this.s3) {
      this.btnDisabled = false;
    } else if (this.currentSection === 3 && this.s4) {
      this.btnDisabled = false;
    } else if (this.currentSection === 4 && this.s5) {
      this.btnDisabled = false;
    } else if (this.currentSection === 5 && this.s6) {
      this.btnDisabled = false;
    } else if (this.currentSection === 6 && this.s7) {
      this.btnDisabled = false;
    } else if (this.currentSection === 7 && this.s8) {
      this.btnDisabled = false;
    } else if (this.currentSection === 8 && this.s9) {
      this.btnDisabled = false;
    } else if (this.currentSection === 9 && this.s10) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }

    if (this.currentSection != 0) {
      this.direction = 'left';
    }

  }

  back(event) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    window.scrollTo(0, 0);
    if (this.currentSection == 0) {
      this.currentSection = 10;
    } else {
      this.currentSection--;
    }
    this.direction = 'right';
    this.progress = this.progress - 10;

    if (this.currentSection === 0) {
      this.prevBtnDisabled = false;
      if (this.s1)
        this.btnDisabled = false;

    }

    if (this.currentSection === 1 && this.s2) {
      this.btnDisabled = false;
    } else if (this.currentSection === 2 && this.s3) {
      this.btnDisabled = false;
    } else if (this.currentSection === 3 && this.s4) {
      this.btnDisabled = false;
    } else if (this.currentSection === 4 && this.s5) {
      this.btnDisabled = false;
    } else if (this.currentSection === 5 && this.s6) {
      this.btnDisabled = false;
    } else if (this.currentSection === 6 && this.s7) {
      this.btnDisabled = false;
    } else if (this.currentSection === 7 && this.s8) {
      this.btnDisabled = false;
    } else if (this.currentSection === 8 && this.s9) {
      this.btnDisabled = false;
    } else if (this.currentSection === 9 && this.s10) {
      this.btnDisabled = false;
    }
  }

  receiveRating(e) {
    e = JSON.parse(e)
    switch (e.Id) {
      case "1": {
        // this.rating1 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.rating1 = Number(e.Rating)
        this.s1 = e.s
        break;
      }
      case "2": {
        // this.rating2 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.rating2 = Number(e.Rating)
        this.s2 = e.s
        break;
      }
      case "3": {
        // this.rating3 = (e.Rating == 0) ? (1) : e.Rating
        this.rating3 = Number(e.Rating)
        this.s3 = e.s
        break;
      } case "4": {
        // this.rating4 = (e.Rating == 0) ? (1) : e.Rating
        this.rating4 = Number(e.Rating)
        this.s4 = e.s
        break;
      } case "5": {
        // this.rating5 = (e.Rating == 0) ? (1) : e.Rating
        this.rating5 = Number(e.Rating)
        this.s5 = e.s
        break;
      } case "6": {
        // this.rating6 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.rating6 = Number(e.Rating)
        this.s6 = e.s
        break;

      }
      case "7": {
        // this.rating7 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.rating7 = Number(e.Rating)
        this.s7 = e.s
        break;

      }
      case "8": {
        // this.rating8 = (e.Rating == 0) ? (1) : e.Rating
        this.rating8 = Number(e.Rating)
        this.s8 = e.s
        break;

      }
      case "9": {
        // this.rating9 = (e.Rating == 0) ? (1) : e.Rating
        this.rating9 = Number(e.Rating)
        this.s9 = e.s
        break;

      }
      case "10": {
        // this.rating10 = (e.Rating == 0) ? (1) : e.Rating
        this.rating10 = Number(e.Rating)
        this.s10 = e.s
        break;

      }
      default: {
        break;
      }
    }
  }


  submitProgress() {
    if (this.s1 && this.s2 && this.s3 && this.s4 && this.s5 && this.s6 && this.s7 && this.s8 && this.s9 && this.s10) {
      this.logeventservice.logEvent('click_survey_submit');
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;

      const optionT = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7, this.s8, this.s9, this.s10];
      this.wisdomScore = (this.rating1 + this.rating2 + this.rating3 + this.rating4 + this.rating5 + this.rating6 + this.rating7 + this.rating8 + this.rating9 + this.rating10) * 2;
      localStorage.setItem("wisdomScore", this.wisdomScore);

       const savedLogin = localStorage.getItem("loginResponse") || sessionStorage.getItem("loginResponse");
      if (savedLogin) {
      this.loginResponse = JSON.parse(savedLogin);
      }
      this.loginResponse.hwScore = this.wisdomScore;
       localStorage.setItem(
        "loginResponse",
        JSON.stringify(this.loginResponse)
      );

      this.option = optionT.join();

      this.service.submitProgressQuestion({
        "ModuleId": this.moduleId,
        "screenType": this.screenType,
        "ScrNumber": this.screenNumber,
        "Bookmark": this.bookmark,
        "UserId": this.userId,
        "timeSpent": this.totalTime,
        "OptionIDs": this.option
      }).subscribe((res: any) => {

        this.service.wisdomScore(this.wisdomScore).subscribe(r => console.log(r));

        localStorage.setItem('wisdomRecomm', JSON.stringify(res.WisdomSurveyRecomm || []));

        const { isUseCloseButton, routedFromLogin } = window.history.state;

        this.router.navigate(["/" + SharedService.getprogramName() + "/wisdom-survey/wisdom-score"],
          {
            state: {
              'isUseCloseButton': isUseCloseButton,
              'routedFromLogin': routedFromLogin
            }
          });

      }, error => {
        console.log(error)
      });
    } else {
      this.content = 'Please complete the survey';
      this.enableAlert = true;
    }
  }


  goBack() {
    var url = this.navigation.navigateToBackLink();
    if (url == null) {
      this.router.navigate(["/" + SharedService.getprogramName() + "/wisdom-survey"]);
    } else {
      this.router.navigate([url]);
    }
  }

}
