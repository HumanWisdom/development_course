import { AdultsService } from './../../../adults/src/app/adults/adults.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { SharedService } from "../../services/shared.service";
import { LogEventService } from '../../services/log-event.service';
import { ProgramType } from "../../models/program-model";

@Component({
  selector: 'app-repeat-user',
  templateUrl: './repeat-user.page.html',
  styleUrls: ['./repeat-user.page.scss'],
})
export class RepeatUserPage implements OnInit {
  public percentage: any
  public bookmarks = []
  public resume = [];
  public userId = 100;
  searchResult = [];
  mediaPercent: any
  freeScreens = []
  public qrList: any
  public goToPage: any
  public points: any
  public daysVisited: any
  public name;
  public loginResponse: any
  public socialFirstName: any
  public socialLastName: any
  public socialEmail: any
  public userName: any
  public video = 3
  public audio = 4
  public password: any
  public saveUsername = false
  public mediaAudio = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public mediaVideo = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  public text = 2
  public question = 6
  public reflection = 5
  public feedbackSurvey = 7
  public moduleId = 7
  searchinp = '';
  public moduleList = [];
  isAdults = true;

  constructor(public service: AdultsService, public router: Router, public logeventservice: LogEventService, private route: ActivatedRoute) {
    let authtoken;
    this.route.queryParams.subscribe(params => {
      authtoken = params?.authtoken
    });
    let app = localStorage.getItem("fromapp")
    if (authtoken && app && app === 'T') {
      localStorage.setItem('socialLogin', 'T');
      localStorage.setItem('acceptcookie', 'T')
      this.service.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          localStorage.setItem("email", res['Email'])
          localStorage.setItem("name", res['Name'])
          localStorage.setItem("userId", res['UserId'])
          let namedata = localStorage.getItem('name').split(' ')
          this.userId = res['UserId']
          localStorage.setItem("Subscriber", res['Subscriber'])
          this.name = res['Name'];
          this.loginadult(res)
          localStorage.setItem("FnName", namedata[0])
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '')

        }
      })
    } else if (localStorage.getItem("isloggedin") === 'T' && localStorage.getItem("userId")) {
      this.name = localStorage.getItem("name");
      this.userName = this.name;
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.getProgress();
      this.getBookmarks();
    }
  }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    setTimeout(() => {
      if (this.isAdults) {
        this.router.navigate(['/adults/adult-dashboard'])
      } else {
        this.router.navigate(['/teenagers/teenager-dashboard'])
      }
    }, 5000);
  }

  getProgress() {
    this.service.GetLastVisitedScreen(this.userId)
      .subscribe(res => {
        this.resume = res;
      });
  }

  loginadult(res) {
    this.loginResponse = res
    this.userId = res.UserId
    if (res['Email'] === "guest@humanwisdom.me") {
      localStorage.setItem('guest', 'T')
    }else {
      localStorage.setItem("guest", 'F')
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      localStorage.setItem("Subscriber", res.Subscriber)
      localStorage.setItem("userId", JSON.stringify(this.userId))
      localStorage.setItem("email", res['Email'])
      localStorage.setItem("name", res.Name)
      this.userName = res.Name;
      localStorage.setItem("text", JSON.stringify(this.text))
      localStorage.setItem("video", JSON.stringify(this.video))
      localStorage.setItem("audio", JSON.stringify(this.audio))
      localStorage.setItem("moduleId", JSON.stringify(this.moduleId))
      localStorage.setItem("question", JSON.stringify(this.question))
      localStorage.setItem("reflection", JSON.stringify(this.reflection))
      localStorage.setItem("feedbackSurvey", JSON.stringify(this.feedbackSurvey))
      this.userId = JSON.parse(localStorage.getItem("userId"))
      localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
      localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    }
    if (localStorage.getItem("token") && (this.saveUsername == true)) {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    } else {
      this.userId = JSON.parse(localStorage.getItem("userId"))
      this.userName = JSON.parse(localStorage.getItem("userName"))
    }
    this.getBookmarks()
    this.getProgress()
    if (res.UserId == 0) {
    }
    else {
      this.userId = res.UserId
      this.userName = res.Name
      sessionStorage.setItem("loginResponse", JSON.stringify(this.loginResponse))
      localStorage.setItem("userId", JSON.stringify(this.userId))
      localStorage.setItem("token", JSON.stringify(res.access_token))
      if (this.saveUsername == true) {
        localStorage.setItem("userId", JSON.stringify(this.userId))
        localStorage.setItem("userEmail", JSON.stringify(res.Email))
        localStorage.setItem("userName", JSON.stringify(this.userName))

      } else {
        sessionStorage.setItem("userId", JSON.stringify(this.userId))
        sessionStorage.setItem("userEmail", JSON.stringify(res.Email))
        sessionStorage.setItem("userName", JSON.stringify(this.userName))
      }
    }
  }

  getBookmarks() {
    this.service.getBookmarks(this.userId)
      .subscribe(res => {
        this.bookmarks = res
        this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
        localStorage.setItem("bookmarkList", JSON.stringify(this.bookmarks))
      })
  }

  routeResume() {
    this.logeventservice.logEvent("click_continue_where_u_left");
       //let r = this.resume[0]['screenno'].substring(0, 2);

    localStorage.setItem("pageaction", 'next')
    let id = this.resume[0]['ModuleId'].toString();

    this.service.setmoduleID(id, this.resume[0]['ModuleUrl'].toString(), this.resume[0]['ModuleUrl'].toString()+'s'+this.resume[0]['screenno'].toString())


    /* switch (r.toString()) {
      case "07": {
        this.routeComparison(1)
        break
      }
      case "14": {
        this.routeAnger(1)
        break
      }
      case "15": {
        this.routeConditioning(1)
        break
      }
      case "16": {
        this.routeCriticism(1)
        break
      }
      case "17": {
        this.routeSelfEsteem(1)
        break
      }
      case "18": {
        this.routeEmotionalNeeds(1)
        break
      }
      case "19": {
        this.routeFearAnxiety(1)
        break
      }
      case "20": {
        this.routePleasure(1)
        break
      }
      case "21": {
        this.routeIdentity(1)
        break
      }
      case "22": {
        this.routeMeditation(1)
        break
      }
      case "23": {
        this.routeHappiness(1)
        break
      }
      case "25": {
        this.routeSelfImage(1)
        break
      }
      case "26": {
        this.routeBenefitsEnquiry(1)
        break
      }
      case "27": {
        this.routeDiscoveringWisdom(1)
        break
      }
      case "28": {
        this.routeNature(1)
        break
      }
      case "29": {
        this.routeBreathing(1)
        break
      }
      case "30": {
        this.routeNoticingThoughts(1)
        break
      }
      case "32": {
        this.routeBenefits(1)
        break
      }
      case "33": {
        this.routeCircles(1)
        break
      }
      case "34": {
        this.routeIdeas(1)
        break
      }
      case "35": {
        this.routeGuide(1)
        break
      }
      case "36": {
        this.routeHowToBegin(1)
        break
      }
      case "37": {
        this.routeThreeSteps(1)
        break
      }
      case "38": {
        this.routeInsights(1)
        break
      }
      case "39": {
        this.routeAwareness(1)
        break
      }
      case "40": {
        this.routeNoJudgement(1)
        break
      }
      case "41": {
        this.routeQuestionsAreKey(1)
        break
      }
      case "42": {
        this.routeLookWithoutLanguage(1)
        break
      }
      case "43": {
        this.routeObstacles(1)
        break
      }
      case "44": {
        this.routeStress(1)
        break
      }
      case "45": {
        this.routeAddiction(1)
        break
      }
      case "46": {
        this.routeFood(1)
        break
      }
      case "47": {
        this.routeRelationships(1)
        break
      }
      case "48": {
        this.routeSuccessAndFailure(1)
        break
      }
      case "49": {
        this.routeOpinionsAndBeliefs(1)
        break
      }
      case "50": {
        this.goToYourWisdomScoreComponent();
        break;
      }
      case "51": {
        this.routeGuidedMeditation(1)
        break
      }
      case "53": {
        this.routeCommunication(1)
        break
      }
      case "54": {
        this.routeReactiveMind(1)
        break
      }
      case "55": {
        this.routeSelfInterest(1)
        break
      }
      case "56": {
        this.routeInnerBoredom(1)
        break
      }
      case "57": {
        this.routeNatureOfI(1)
        break
      }
      case "58": {
        this.routeWork(1)
        break
      }
      case "59": {
        this.routeLeadership(1)
        break
      }
      case "60": {
        this.routeSorrowandLoss(1)
        break
      }
      case "61": {
        this.routeLoneliness(1)
        break
      }
      case "62": {
        this.routeLove(1)
        break
      }
      case "63": {
        this.routeLivingWithPeace(1)
        break
      }
      case "64": {
        this.routeDealingWithDeath(1)
        break
      }
      case "73": {
        this.routeMoney(1)
        break
      }
      case "74": {
        this.routehowcanwisdomhelp(1)
        break
      }
      case "75": {
        this.wisdomexercise();
        break
      }
      case "76": {
        this.routeBullying(1)
        break
      }
      case "77": {
        this.routeMakingBetterDecisions(1)
        break
      }
      case "92": {
        this.routeDealingWithDepression(1)
        break
      }
      case "91": {
        this.routeExternalApproval(1)
        break
      }
      case "143": {
        this.routeDiversityandInclusion(1)
        break
      }

    } */
  }

  // introduction
  routeDiscoveringWisdom(cont: any = 1) {
    var discoveringWisdomResume
    localStorage.setItem("moduleId", JSON.stringify(27))
    this.service.clickModule(27, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        discoveringWisdomResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        sessionStorage.setItem("discoveringWisdomResume", discoveringWisdomResume)
        this.mediaPercent = parseInt(res.MediaPercent)
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
          }
          else
            this.router.navigate([`/adults/discovering-wisdom/s27001`])
        })
  }

  routeBenefits(cont: any = 1) {
    var benefitsWisdomResume
    localStorage.setItem("moduleId", JSON.stringify(32))
    this.service.clickModule(32, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        benefitsWisdomResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("benefitsWisdomResume", benefitsWisdomResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
          }
          else
            this.router.navigate([`/adults/benefits-of-wisdom/s32001`])
        })
  }

  routeCircles(cont: any = 1) {
    var fiveCirclesResume
    localStorage.setItem("moduleId", JSON.stringify(33))
    this.service.clickModule(33, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        fiveCirclesResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fiveCirclesResume", fiveCirclesResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/five-circles/${fiveCirclesResume}`])
          }
          else
            this.router.navigate([`/adults/five-circles/s33001`])
        })


  }

  routeIdeas(cont: any = 1) {
    var keyIdeasResume
    localStorage.setItem("moduleId", JSON.stringify(34))
    this.service.clickModule(34, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        keyIdeasResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("keyIdeasResume", keyIdeasResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/key-ideas/${keyIdeasResume}`])
          }
          else
            this.router.navigate([`/adults/key-ideas/s34001`])
          /*if(!this.goToPage)
          {

            this.router.navigate([`/adults/key-ideas`])
          }
          else
            this.router.navigate([`/adults/key-ideas/s${keyIdeasResume}`])*/

        })

  }

  routeGuide(cont: any = 1) {
    var pgResume
    localStorage.setItem("moduleId", JSON.stringify(35))
    this.service.clickModule(35, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        pgResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pgResume", pgResume)
        pgResume = "s" + res.lastVisitedScreen
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/program-guide/${pgResume}`])
          }
          else
            this.router.navigate([`/adults/program-guide/s35001`])
        })
  }
  // /introduction

  // nuture a quiet mind
  routeNature(cont: any = 1) {
    var natureR
    localStorage.setItem("moduleId", JSON.stringify(28))
    this.service.clickModule(28, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        natureR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("natureR", natureR)

        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/nature/${natureR}`])
          }
          else
            this.router.navigate([`/adults/nature/s28001`])
        })
  }

  routeBreathing(cont: any = 1) {

    var breathingR

    localStorage.setItem("moduleId", JSON.stringify(29))
    this.service.clickModule(29, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        breathingR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("breathingR", breathingR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/breathing/${breathingR}`])
          }
          else
            this.router.navigate([`/adults/breathing/s29000`])
        })
  }

  routeNoticingThoughts(cont: any = 1) {
    var ntR

    localStorage.setItem("moduleId", JSON.stringify(30))
    this.service.clickModule(30, this.userId)
      .subscribe(res => {
        this.qrList = res
        ntR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        sessionStorage.setItem("ntR", ntR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
          }
          else
            this.router.navigate([`/adults/noticing-thoughts/s30001`])
        })
  }

  routeGuidedMeditation(cont: any = 1) {
    var gamR
    localStorage.setItem("moduleId", JSON.stringify(51))
    this.service.clickModule(51, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        gamR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("gamR", gamR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/guided-meditation/${gamR}`])
          }
          else
            this.router.navigate([`/adults/guided-meditation/s51000`])
        })
  }

  routeMeditation(cont: any = 1) {
    var meditationResume
    localStorage.setItem("moduleId", JSON.stringify(22))
    this.service.clickModule(22, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        meditationResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("meditationResume", meditationResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/meditation/${meditationResume}`])
          }
          else
            this.router.navigate([`/adults/meditation/s22001`])
        })
  }
  // /nuture a quiet mind

  // art of enquiry
  routeBenefitsEnquiry(cont: any = 1) {
    var resumeBenefitsEnquiry
    localStorage.setItem("moduleId", JSON.stringify(26))
    this.service.clickModule(26, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        resumeBenefitsEnquiry = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("resumeBenefitsEnquiry", resumeBenefitsEnquiry)
        this.mediaPercent = parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/benefits-of-enquiry/${resumeBenefitsEnquiry}`])
          }
          else
            this.router.navigate([`/adults/benefits-of-enquiry/s26001`])
        })
  }

  routeHowToBegin(cont: any = 1) {
    var beginResume
    localStorage.setItem("moduleId", JSON.stringify(36))
    this.service.clickModule(36, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        beginResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("beginResume", beginResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/how-to-begin/${beginResume}`])
          }
          else
            this.router.navigate([`/adults/how-to-begin/s36000`])
        })
  }

  routeThreeSteps(cont: any = 1) {
    var threeStepsResume
    localStorage.setItem("moduleId", JSON.stringify(37))
    this.service.clickModule(37, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        threeStepsResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("threeStepsResume", threeStepsResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/three-steps-enquiry/${threeStepsResume}`])
          }
          else
            this.router.navigate([`/adults/three-steps-enquiry/s37000`])
        })
  }

  routeInsights(cont: any = 1) {
    var insightResume
    localStorage.setItem("moduleId", JSON.stringify(38))
    this.service.clickModule(38, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        insightResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("insightResume", insightResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/insight/${insightResume}`])
          }
          else
            this.router.navigate([`/adults/insight/s38000`])
        })
  }

  routeAwareness(cont: any = 1) {
    var awarenessResume
    localStorage.setItem("moduleId", JSON.stringify(39))
    this.service.clickModule(39, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        awarenessResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("awarenessResume", awarenessResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/awareness/${awarenessResume}`])
          }
          else
            this.router.navigate([`/adults/awareness/s39000`])
        })
  }

  routeNoJudgement(cont: any = 1) {
    var njResume
    localStorage.setItem("moduleId", JSON.stringify(40))
    this.service.clickModule(40, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        njResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("njResume", njResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/no-judgement/${njResume}`])
          }
          else
            this.router.navigate([`/adults/no-judgement/s40000`])
        })
  }

  routeQuestionsAreKey(cont: any = 1) {
    var qakResume
    localStorage.setItem("moduleId", JSON.stringify(41))
    this.service.clickModule(41, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        qakResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("qakResume", qakResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/questions-are-key/${qakResume}`])
          }
          else
            this.router.navigate([`/adults/questions-are-key/s41000`])
        })
  }

  routeLookWithoutLanguage(cont: any = 1) {
    var lwlResume
    localStorage.setItem("moduleId", JSON.stringify(42))
    this.service.clickModule(42, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lwlResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lwlResume", lwlResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/without-language/${lwlResume}`])
          }
          else
            this.router.navigate([`/adults/without-language/s42000`])
        })
  }

  routeObstacles(cont: any = 1) {
    var obstaclesResume
    localStorage.setItem("moduleId", JSON.stringify(43))
    this.service.clickModule(43, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        obstaclesResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("obstaclesResume", obstaclesResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/obstacles-enquiry/${obstaclesResume}`])
          }
          else
            this.router.navigate([`/adults/obstacles-enquiry/s43000`])
        })
  }
  // /art of enquiry

  // how the mind works
  routeConditioning(cont: any = 1) {
    var conditioningResume
    localStorage.setItem("moduleId", JSON.stringify(15))
    this.service.clickModule(15, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        conditioningResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("conditioningResume", conditioningResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/conditioning/${conditioningResume}`])
          }
          else
            this.router.navigate([`/adults/conditioning/s232`])
        })
  }

  routeComparison(cont: any = 1) {
    var comparisonR
    localStorage.setItem("moduleId", JSON.stringify(7))
    this.service.clickModule(7, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        comparisonR = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("comparisonR", comparisonR)
        this.mediaPercent = parseInt(res.MediaPercent)
        this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/comparison/${comparisonR}`])
          }
          else
            this.router.navigate([`/adults/comparison/s0`])
        })
  }

  routeReactiveMind(cont: any = 1) {
    var rmR
    localStorage.setItem("moduleId", JSON.stringify(54))
    this.service.clickModule(54, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        rmR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("rmR", rmR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/reactive-mind/${rmR}`])
          }
          else
            this.router.navigate([`/adults/reactive-mind/s54001`])
        })
  }

  routeSelfImage(cont: any = 1) {
    var siR

    localStorage.setItem("moduleId", JSON.stringify(25))
    this.service.clickModule(25, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        siR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("siR", siR)
        this.mediaPercent = parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/self-image/${siR}`])
          }
          else
            this.router.navigate([`/adults/self-image/s25001`])
        })
  }

  routeSelfInterest(cont: any = 1) {
    var sinR
    localStorage.setItem("moduleId", JSON.stringify(55))
    this.service.clickModule(55, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        sinR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sinR", sinR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/self-interest/${sinR}`])
          }
          else
            this.router.navigate([`/adults/self-interest/s55001`])
        })
  }

  routeIdentity(cont: any = 1) {
    var identityResume
    localStorage.setItem("moduleId", JSON.stringify(21))
    this.service.clickModule(21, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        identityResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("identityResume", identityResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/identity/${identityResume}`])
          }
          else
            this.router.navigate([`/adults/identity/s21001`])
        })
  }

  routeEmotionalNeeds(cont: any = 1) {
    var enR
    localStorage.setItem("moduleId", JSON.stringify(18))
    this.service.clickModule(18, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        enR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("enR", enR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/emotional-needs/${enR}`])
          }
          else
            this.router.navigate([`/adults/emotional-needs/s18001`])
        })
  }

  routeInnerBoredom(cont: any = 1) {
    var ibR
    localStorage.setItem("moduleId", JSON.stringify(56))
    this.service.clickModule(56, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        ibR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("ibR", ibR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/inner-boredom/${ibR}`])
          }
          else
            this.router.navigate([`/adults/inner-boredom/s56001`])
        })
  }

  routeNatureOfI(cont: any = 1) {
    var niR
    localStorage.setItem("moduleId", JSON.stringify(57))
    this.service.clickModule(57, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        niR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("niR", niR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/nature-of-i/${niR}`])
          }
          else
            this.router.navigate([`/adults/nature-of-i/s57001`])
        })
  }

  routeExternalApproval(cont: any = 1) {
    var externalapprovalR
    localStorage.setItem("moduleId", JSON.stringify(91))
    this.service.clickModule(91, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        externalapprovalR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("externalapprovalR", externalapprovalR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/external-approval/${externalapprovalR}`])
          }
          else
            this.router.navigate([`/adults/external-approval/s91001`])
        })
  }
  // /how the mind works

  // understand emotions
  routeFearAnxiety(cont: any = 1) {
    var fearResume
    localStorage.setItem("moduleId", JSON.stringify(19))
    this.service.clickModule(19, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        fearResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fearResume", fearResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/fear-anxiety/${fearResume}`])
          }
          else
            this.router.navigate([`/adults/fear-anxiety/s486`])
        })
  }

  routeDealingWithDepression(cont: any = 1) {
    var dealingwithdepressionResume
    localStorage.setItem("moduleId", JSON.stringify(92))
    this.service.clickModule(92, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        dealingwithdepressionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdepressionResume", dealingwithdepressionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/dealing-with-depression/${dealingwithdepressionResume}`])
          }
          else
            this.router.navigate([`/adults/dealing-with-depression/s92001`])
        })
  }

  routePleasure(cont: any = 1) {
    var pleasureResume
    localStorage.setItem("moduleId", JSON.stringify(20))
    this.service.clickModule(20, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        pleasureResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pleasureResume", pleasureResume)
        this.mediaPercent = parseInt(res.MediaPercent)
        // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/pleasure/${pleasureResume}`])
          }
          else
            this.router.navigate([`/adults/pleasure/s20001`])
        })

  }

  routeSorrowandLoss(cont: any = 1) {
    var sorrowandlossResume
    localStorage.setItem("moduleId", JSON.stringify(60))
    this.service.clickModule(60, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        sorrowandlossResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sorrowandlossResume", sorrowandlossResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
          }
          else
            this.router.navigate([`/adults/sorrow/s60001`])

        })
  }

  routeLoneliness(cont: any = 1) {
    var lonelinessResume
    localStorage.setItem("moduleId", JSON.stringify(61))
    this.service.clickModule(61, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lonelinessResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lonelinessResume", lonelinessResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/loneliness/${lonelinessResume}`])
          }
          else
            this.router.navigate([`/adults/loneliness/s61001`])
        })
  }

  routeAnger(cont: any = 1) {
    var angerResume
    localStorage.setItem("moduleId", JSON.stringify(14))
    this.service.clickModule(14, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        angerResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("angerResume", angerResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/anger/${angerResume}`])
          }
          else
            this.router.navigate([`/adults/anger/s162p0`])
        })
  }
  // /understand emotions

  // transform your life 1
  routeStress(cont: any = 1) {
    var stressResume
    localStorage.setItem("moduleId", JSON.stringify(44))
    this.service.clickModule(44, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        stressResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("stressResume", stressResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/stress/${stressResume}`])
          }
          else
            this.router.navigate([`/adults/stress/s44001`])
          //this.router.navigate([`/adults/wisdom-exercise/s75001`])
        })
  }




  routeRelationships(cont: any = 1) {
    var relationshipResume
    localStorage.setItem("moduleId", JSON.stringify(47))
    this.service.clickModule(47, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        relationshipResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("relationshipResume", relationshipResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/relationships/${relationshipResume}`])
          }
          else
            this.router.navigate([`/adults/relationships/s47000`])
        })
  }

  routeLove(cont: any = 1) {
    var loveResume
    localStorage.setItem("moduleId", JSON.stringify(62))
    this.service.clickModule(62, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        loveResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("loveResume", loveResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/love/${loveResume}`])
          }
          else
            this.router.navigate([`/adults/love/s62001`])
        })
  }

  routeCriticism(cont: any = 1) {
    var criticismResume
    localStorage.setItem("moduleId", JSON.stringify(16))
    this.service.clickModule(16, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        criticismResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("criticismResume", criticismResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/criticism/${criticismResume}`])
          }
          else
            this.router.navigate([`/adults/criticism/s324`])
        })
  }

  routeSelfEsteem(cont: any = 1) {
    var sR
    localStorage.setItem("moduleId", JSON.stringify(17))
    this.service.clickModule(17, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        sR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sR", sR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/self-esteem/${sR}`])
          }
          else
            this.router.navigate([`/adults/self-esteem/s433`])
        })
  }

  routeLivingWithPeace(cont: any = 1) {
    var livingwithpeaceResume
    localStorage.setItem("moduleId", JSON.stringify(63))
    this.service.clickModule(63, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        livingwithpeaceResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("livingwithpeaceResume", livingwithpeaceResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/living-with-peace/${livingwithpeaceResume}`])
          }
          else
            this.router.navigate([`/adults/living-with-peace/s63001`])
        })
  }

  routeDealingWithDeath(cont: any = 1) {
    var dealingwithdeathResume
    localStorage.setItem("moduleId", JSON.stringify(64))
    this.service.clickModule(64, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        dealingwithdeathResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdeathResume", dealingwithdeathResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
          }
          else
            this.router.navigate([`/adults/dealing-with-death/s64001`])

        })
  }

  routeBullying(cont: any = 1) {
    var bullyingResume
    localStorage.setItem("moduleId", JSON.stringify(76))
    this.service.clickModule(76, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        bullyingResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("bullyingResume", bullyingResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/bullying/${bullyingResume}`])
          }
          else
            this.router.navigate([`/adults/bullying/s76001`])

        })
  }

  routeMakingBetterDecisions(cont: any = 1) {
    var making_better_decisionsResume
    localStorage.setItem("moduleId", JSON.stringify(77))
    this.service.clickModule(77, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        making_better_decisionsResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("making_better_decisionsResume", making_better_decisionsResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/making-better-decisions/${making_better_decisionsResume}`])
          }
          else
            this.router.navigate([`/adults/making-better-decisions/s77001`])

        })
  }

  routeDiversityandInclusion(cont: any = 1) {
    var diversity_and_inclusionResume
    localStorage.setItem("moduleId", JSON.stringify(143))
    this.service.clickModule(143, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        diversity_and_inclusionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("diversity_and_inclusionResume", diversity_and_inclusionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/diversity-and-inclusion/${diversity_and_inclusionResume}`])
          }
          else
            this.router.navigate([`/adults/diversity-and-inclusion/s143001`])

        })
  }

  // /transform your life 1

  // transform your life 2
  routeHappiness(cont: any = 1) {
    var hR
    localStorage.setItem("moduleId", JSON.stringify(23))
    this.service.clickModule(23, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        hR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hR", hR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/happiness/${hR}`])
          }
          else
            this.router.navigate([`/adults/happiness/s23001`])
        })
  }

  routeCommunication(cont: any = 1) {
    var communicationR
    localStorage.setItem("moduleId", JSON.stringify(53))
    this.service.clickModule(53, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        communicationR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("communicationR", communicationR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/communication/${communicationR}`])
          }
          else
            this.router.navigate([`/adults/communication/s53001`])
        })
  }

  routeOpinionsAndBeliefs(cont: any = 1) {
    var opinionsandbeliefsResume
    localStorage.setItem("moduleId", JSON.stringify(49))
    this.service.clickModule(49, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        opinionsandbeliefsResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("opinionsandbeliefsResume", opinionsandbeliefsResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
          }
          else
            this.router.navigate([`/adults/opinions-beliefs/s49001`])
        })
  }

  routeSuccessAndFailure(cont: any = 1) {
    var successandfailureResume
    localStorage.setItem("moduleId", JSON.stringify(48))
    this.service.clickModule(48, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        successandfailureResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("successandfailureResume", successandfailureResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
          }
          else
            this.router.navigate([`/adults/success-failure/s48001`])
        })
  }

  routeAddiction(cont: any = 1) {
    var addictionResume
    localStorage.setItem("moduleId", JSON.stringify(45))
    this.service.clickModule(45, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        addictionResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("addictionResume", addictionResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
          }
          else
            this.router.navigate([`/adults/habit-addiction/s45001`])
        })
  }

  routeFood(cont: any = 1) {
    var foodResume
    localStorage.setItem("moduleId", JSON.stringify(46))
    this.service.clickModule(46, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        foodResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("foodResume", foodResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/food-health/${foodResume}`])
          }
          else
            this.router.navigate([`/adults/food-health/s46001`])
        })
  }

  routeMoney(cont: any = 1) {
    var moneyResume
    localStorage.setItem("moduleId", JSON.stringify(73))
    this.service.clickModule(73, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        moneyResume = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("moneyResume", moneyResume)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/money/${moneyResume}`])
          }
          else
            this.router.navigate([`/adults/money/s73001`])
        })
  }

  routeWork(cont: any = 1) {
    var wR
    localStorage.setItem("moduleId", JSON.stringify(58))
    this.service.clickModule(58, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        wR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("wR", wR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/work/${wR}`])
          }
          else
            this.router.navigate([`/adults/work/s58001`])
        })
  }

  routeLeadership(cont: any = 1) {
    var lR
    localStorage.setItem("moduleId", JSON.stringify(59))
    this.service.clickModule(59, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        lR = "s" + res.lastVisitedScreen
        this.goToPage = res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lR", lR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/leadership/${lR}`])
          }
          else
            this.router.navigate([`/adults/leadership/s59001`])
        })
  }

  routehowcanwisdomhelp(cont: any = 1) {
    var hcwhR
    localStorage.setItem("moduleId", JSON.stringify(74))
    this.service.clickModule(74, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        hcwhR = "s" + res.lastVisitedScreen
        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hcwhR", hcwhR)
        this.mediaPercent = parseInt(res.MediaPercent)
        this.freeScreens = res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent", JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          if (cont == "1") {
            this.router.navigate([`/adults/how-can-wisdom-help/${hcwhR}`])
          }
          else
            this.router.navigate([`/adults/how-can-wisdom-help/s74001`])
        })
  }

  goToYourWisdomScoreComponent() {
    //this.logeventservice.logEvent('click_wisdom_score');
    this.router.navigate(['/adults/wisdom-survey'], { state: { 'isUseCloseButton': true } });
  }

  wisdomexercise() {
    this.service.GetLastVisitedScreen(this.userId)

    .subscribe(res => {
      


    if( res[0]['screenno'].length >=1)
    {
     this.router.navigate(['adults/wisdom-exercise/s' +  res[0]['screenno'].substring(0, res[0]['screenno'].length - 2)], {
       state: {
         day: 2,
       }
     });
    }
    else
    this.router.navigate([`/adults/wisdom-exercise/s75001`])

  });


   }

   logEvent(event, url){
    this.logeventservice.logEvent(event);
    this.router.navigate([url]);
   }

  //  search
  clearSearch() {
    this.searchinp = "";
    this.searchResult = [];
  }

  getinp(event) {
    let url = `/adults/site-search/${this.searchinp}`
    this.router.navigate([url])
  }

  searchEvent(module) {
    this.logeventservice.logEvent("click_search");
    this.searchinp = module;
    this.searchResult = [];
    this.getinp(module);
  }

  getAutoCompleteList(value) {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(value?.toLocaleLowerCase()));
      }
    }
  }

  onFocus() {
    this.getModuleList(true);
    if (this.searchinp == '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
    }
  }

  onFocusOutEvent() {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
  }

  getModuleList(isLoad?) {
    this.service.getModuleList().subscribe(res => {
      this.moduleList = res;
      if (isLoad) {
        if (this.searchinp == '') {
          this.searchResult = this.moduleList;
        } else {
          this.searchResult = this.moduleList.filter(x => (x.ModuleName.toLocaleLowerCase()).includes(this.searchinp?.toLocaleLowerCase()));
        }
      }
    })
  }
  // /search

}
