import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-QuestionAnswersSelection',
  templateUrl: './question-answers-selection.page.html',
  styleUrls: ['./question-answers-selection.page.scss'],
  animations: [
    trigger('slideAnimation', [
      // Wildcard transition for swipe left (next)
      transition('* => left', [
        style({ transform: 'translateX(0%)' }), // start from right
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      // Wildcard transition for swipe right (previous)
      transition('* => right', [
        style({ transform: 'translateX(0%)' }), // start from left
        animate('0.7s ease-in-out', style({ transform: 'translateX(0)' }))
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



  @Input()
  questionAndAns = JSON.parse(localStorage.getItem("questionAns"));

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
  prevBtnDisabled = true;

  constructor
    (
      private router: Router,
      private service: OnboardingService,
      public logeventservice: LogEventService,
    ) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
  }

  checkOption(index, OptId, i, strSelected) {
    let obj = {
      "Id": (index + 1).toString(),
      "Rating": i,
      "s": OptId
    }
    this.selectedObj[index] = strSelected;
    this.receiveRating(JSON.stringify(obj));
    this.btnDisabled = false;
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
    window.scrollTo(0, 0);
    this.currentSection++;
    if (this.currentSection >= 10) {
      this.currentSection = 0;
    }

    if (this.currentSection === 1) {
      this.prevBtnDisabled = false;
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
    } else {
      this.btnDisabled = true;
    }

    if (this.currentSection != 0) {
      this.direction = 'left';
    }

  }

  back(event) {
    window.scrollTo(0, 0);
    if (this.currentSection == 0) {
      this.currentSection = 10;
    } else {
      this.currentSection--;
    }
    this.direction = 'right';
    if (this.currentSection === 0) {
      this.prevBtnDisabled = true;
    }

    if (this.currentSection === 1 && this.s1) {
      this.btnDisabled = false;
    } else if (this.currentSection === 2 && this.s2) {
      this.btnDisabled = false;
    } else if (this.currentSection === 3 && this.s3) {
      this.btnDisabled = false;
    } else if (this.currentSection === 4 && this.s4) {
      this.btnDisabled = false;
    } else if (this.currentSection === 5 && this.s5) {
      this.btnDisabled = false;
    } else if (this.currentSection === 6 && this.s6) {
      this.btnDisabled = false;
    } else if (this.currentSection === 7 && this.s7) {
      this.btnDisabled = false;
    } else if (this.currentSection === 8 && this.s8) {
      this.btnDisabled = false;
    } else if (this.currentSection === 9 && this.s9) {
      this.btnDisabled = false;
    }
  }

  receiveRating(e) {
    e = JSON.parse(e)
    switch (e.Id) {
      case "1": {
        // this.rating1 = (e.Rating == 5) ? 1 : (5 - e.Rating)
        this.rating1 =  Number(e.Rating)
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
      var optionT = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7, this.s8, this.s9, this.s10]
      this.wisdomScore = (this.rating1 + this.rating2 + this.rating3 + this.rating4 + this.rating5 + this.rating6 + this.rating7 + this.rating8 + this.rating9 + this.rating10) * 2
      localStorage.setItem("wisdomScore", this.wisdomScore)

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
              this.router.navigate(["/" + SharedService.getprogramName() + "/wisdom-survey/wisdom-score"], { state: { 'isUseCloseButton': true } });
            } else {
              this.router.navigate(["/" + SharedService.getprogramName() + "/wisdom-survey/wisdom-score"]);
            }
          });
    } else {
      this.content = 'Please complete the survey';
      this.enableAlert = true;
    }

  }



  ngOnDestroy() { }

  
  goBack() {
    // this.location.back()
              this.router.navigate(["/" + SharedService.getprogramName() + "/wisdom-survey"]);

  }

}
