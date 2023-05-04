import { Platform } from "@angular/cdk/platform";
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramModel, ProgramType } from "../../../shared/models/program-model";


@Component({
  selector: 'app-module-end',
  templateUrl: './module-end.component.html',
  styleUrls: ['./module-end.component.scss'],
})

export class ModuleEndComponent implements OnInit, AfterViewInit {
  isModuleCompleted: boolean = false;
  file: any;
  @Input() moduleImg: string;
  @Input() moduleLink: string;
  @Input() moduleName: string;
  @Input() sectionName: string;
  @Input() bg: string;
  @Input() toc: string;
  @Input() moduleId: any;
  qrList: any
  token = JSON.parse(localStorage.getItem("token"))
  socialShare = false
  shareUrl: any
  userId: any
  pdfBlob: any;
  percentage: string;
  currentModuleName: string;
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"));
  @Input() programType :ProgramType = ProgramType.Adults;
  moduleData:Array<ProgramModel>;
  @Input() moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/51.png',
      link: '/guided-meditation',
      id: 51
    },
  ]

  constructor(private router: Router, private service: AdultsService, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService) {

    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    console.log(this.toc)
    this.GetModuleDataBasedOnProgramType();
    this.getDataForCertificate();


  }

  getDataForCertificate() {
    this.userId = JSON.parse(localStorage.getItem("userId"))
    let path = this.router.url.split("/");
    let currentModuleName = path[path.length - 2]
    this.service.getPoints(this.userId).subscribe(res => {
      let data = res?.ModUserScrPc?.find(e => e.Module.toLowerCase().includes(currentModuleName.replace("-", " ").toLowerCase()));
      if(data && data != null){
        this.currentModuleName = data.Module;
        this.percentage = data.Percentage;
        if (this.percentage == "100.00") {
          this.isModuleCompleted = true;
        }
      }
    });
  }

  shareIndex() {
    this.socialShare = true
    this.shareUrl = "https://humanwisdom.me/adults/" + this.toc + `?t=${this.token}`

    /*  if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
       alert(`This service/api is not supported in your Browser`);
       return;
     } */

    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.shareUrl
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  proceed() {
    localStorage.setItem("progressbarvalue", '')
    this.routeResume(this.moduleId, '')
  }

  routeResume(r, link) {

    switch (r.toString()) {
      case "0": {
        this.router.navigate([link])
        break
      }
      case "7": {
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
        this.routeHowCanWisdomHelp(1)
        break
      }

      case "76": {
        this.routeBullying(1)
        break
      }
      case "77": {
        this.routeMakingBetterDecision(1)
        break
      } case "92": {
        this.routeDealingWithDepression(1)
        break
      }
    }
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

        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("discoveringWisdomResume", discoveringWisdomResume)
        let mediaPercent = parseInt(res.MediaPercent)
        //[]=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify([]))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent.toString()))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
          // }
          // else
          this.router.navigate([`/adults/discovering-wisdom/s27001`])
          /*
          if(!discoveringWisdomResume)
          {

            this.router.navigate([`/adults/discovering-wisdom`])
          }
          else
            this.router.navigate([`/adults/discovering-wisdom/s${discoveringWisdomResume}`])*/

        })


  }


  routeHowCanWisdomHelp(cont: any = 1) {
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
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
          // }
          // else
          this.router.navigate([`/adults/how-can-wisdom-help/`])
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/five-circles/${fiveCirclesResume}`])
          // }
          // else
          this.router.navigate([`/adults/five-circles/s33001`])
          /*if(!fiveCirclesResume)
          {

            this.router.navigate([`/adults/five-circles`])
          }
          else
            this.router.navigate([`/adults/five-circles/s${fiveCirclesResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/key-ideas/${keyIdeasResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/program-guide/${pgResume}`])
          // }
          // else
          this.router.navigate([`/adults/program-guide/s35001`])
          /* if(!pgResume)
           {

             this.router.navigate([`/adults/program-guide/s35002`])
           }
           else
             this.router.navigate([`/adults/program-guide/s${ pgResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/nature/${natureR}`])
          // }
          // else
          this.router.navigate([`/adults/nature/s28001`])

          /*if(!natureR)
           {

             this.router.navigate([`/adults/nature`])
           }
           else
             this.router.navigate([`/adults/nature/s${natureR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/breathing/${breathingR}`])
          // }
          // else
          this.router.navigate([`/adults/breathing/s29000`])

          /* if(!breathingR)
           {

             this.router.navigate([`/adults/breathing`])

           }
           else
             this.router.navigate([`/adults/breathing/s${breathingR}`])*/

        })

  }

  routeNoticingThoughts(cont: any = 1) {
    var ntR

    localStorage.setItem("moduleId", JSON.stringify(30))
    this.service.clickModule(30, this.userId)
      .subscribe(res => {
        this.qrList = res
        ntR = "s" + res.lastVisitedScreen

        // continue where you left
        /*if(res.lastVisitedScreen ==='')
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else
        {
          localStorage.setItem("lastvisited", 'T')
        }*/
        // /continue where you left
        sessionStorage.setItem("ntR", ntR)
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
          // }
          // else
          this.router.navigate([`/adults/noticing-thoughts/s30001`])
          /*if(!ntR)
          {

            this.router.navigate([`/adults/noticing-thoughts`])
          }
          else
            this.router.navigate([`/adults/noticing-thoughts/s${ntR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/guided-meditation/${gamR}`])
          // }
          // else
          this.router.navigate([`/adults/guided-meditation/s51000`])

          /* if(!gamR)
           {

             this.router.navigate([`/adults/guided-meditation`])

           }
           else
             this.router.navigate([`/adults/guided-meditation/s${gamR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/meditation/${meditationResume}`])
          // }
          // else
          this.router.navigate([`/adults/meditation/s22001`])
          /*if(!meditationResume)
          {

            this.router.navigate([`/adults/meditation`])
          }
          else
            this.router.navigate([`/adults/meditation/s${meditationResume}`])*/

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

        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("resumeBenefitsEnquiry", resumeBenefitsEnquiry)
        let mediaPercent = parseInt(res.MediaPercent)
        //[]=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify([]))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent.toString()))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/benefits-of-enquiry/${resumeBenefitsEnquiry}`])
          // }
          // else
          this.router.navigate([`/adults/benefits-of-enquiry/s26001`])
          /*
           if(!resumeBenefitsEnquiry)
           {

            this.router.navigate([`/adults/benefits-of-enquiry`])
           }
           else
             this.router.navigate([`/adults/benefits-of-enquiry/s${resumeBenefitsEnquiry}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/how-to-begin/${beginResume}`])
          // }
          // else
          this.router.navigate([`/adults/how-to-begin/s36000`])
          /*if(!this.goToPage)
          {

            this.router.navigate([`/adults/how-to-begin`])
          }
          else
            this.router.navigate([`/adults/how-to-begin/s${beginResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/three-steps-enquiry/${threeStepsResume}`])
          // }
          // else
          this.router.navigate([`/adults/three-steps-enquiry/s37000`])
          /*if(!threeStepsResume)
          {

            this.router.navigate([`/adults/three-steps-enquiry`])
          }
          else
            this.router.navigate([`/adults/three-steps-enquiry/s${threeStepsResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/insight/${insightResume}`])
          // }
          // else
          this.router.navigate([`/adults/insight/s38000`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/adults/insight`])
           }
           else
             this.router.navigate([`/adults/insight/s${insightResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/awareness/${awarenessResume}`])
          // }
          // else
          this.router.navigate([`/adults/awareness/s39000`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/adults/awareness`])
           }
           else
             this.router.navigate([`/adults/awareness/s${awarenessResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/no-judgement/${njResume}`])
          // }
          // else
          this.router.navigate([`/adults/no-judgement/s40000`])
          /*if(!njResume)
          {

            this.router.navigate([`/adults/no-judgement/`])
          }
          else
            this.router.navigate([`/adults/no-judgement/s${njResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/questions-are-key/${qakResume}`])
          // }
          // else
          this.router.navigate([`/adults/questions-are-key/s41000`])
          /*if(!qakResume)
          {

            this.router.navigate([`/adults/questions-are-key`])
          }
          else
            this.router.navigate([`/adults/questions-are-key/s${qakResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/without-language/${lwlResume}`])
          // }
          // else
          this.router.navigate([`/adults/without-language/s42000`])
          /* if(!lwlResume)
           {

             this.router.navigate([`/adults/without-language`])
           }
           else
             this.router.navigate([`/adults/without-language/s${lwlResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/obstacles-enquiry/${obstaclesResume}`])
          // }
          // else
          this.router.navigate([`/adults/obstacles-enquiry/s43000`])
          /*if(! obstaclesResume)
          {

            this.router.navigate([`/adults/obstacles-enquiry`])
          }
          else
            this.router.navigate([`/adults/obstacles-enquiry/s${obstaclesResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/conditioning/${conditioningResume}`])
          // }
          // else
          this.router.navigate([`/adults/conditioning/s232`])
          /*if(!conditioningResume)
          {

            this.router.navigate([`/adults/conditioning`])
          }
          else
            this.router.navigate([`/adults/conditioning/s${conditioningResume}`])*/

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
        let mediaPercent = parseInt(res.MediaPercent)
        let free = res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify(free))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent.toString()))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/comparison/${comparisonR}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/reactive-mind/${rmR}`])
          // }
          // else
          this.router.navigate([`/adults/reactive-mind/s54001`])
          /* if(!rmR)
           {

             this.router.navigate([`/adults/reactive-mind`])
           }
           else
             this.router.navigate([`/adults/reactive-mind/s${rmR}`])*/

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

        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("siR", siR)
        let mediaPercent = parseInt(res.MediaPercent)
        //[]=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify([]))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent.toString()))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/self-image/${siR}`])
          // }
          // else
          this.router.navigate([`/adults/self-image/s25001`])
          /*
          if(!siR)
          {

           this.router.navigate([`/adults/self-image`])
          }
          else
            this.router.navigate([`/adults/self-image/s${siR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/self-interest/${sinR}`])
          // }
          // else
          this.router.navigate([`/adults/self-interest/s55001`])

          /*if(!sinR)
          {

            this.router.navigate([`/adults/self-interest`])
          }
          else
            this.router.navigate([`/adults/self-interest/s${sinR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/identity/${identityResume}`])
          // }
          // else
          this.router.navigate([`/adults/identity/s21001`])
          /* if(!identityResume)
           {

             this.router.navigate([`/adults/identity`])
           }
           else
             this.router.navigate([`/adults/identity/s${identityResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/emotional-needs/${enR}`])
          // }
          // else
          this.router.navigate([`/adults/emotional-needs/s18001`])

          /*if(!sinR)
          {

            this.router.navigate([`/adults/self-interest`])
          }
          else
            this.router.navigate([`/adults/self-interest/s${sinR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/inner-boredom/${ibR}`])
          // }
          // else
          this.router.navigate([`/adults/inner-boredom/s56001`])

          /*if(!sinR)
          {

            this.router.navigate([`/adults/self-interest`])
          }
          else
            this.router.navigate([`/adults/self-interest/s${sinR}`])*/

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


          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/nature-of-i/${niR}`])
          // }
          // else
          this.router.navigate([`/adults/nature-of-i/s57001`])

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/fear-anxiety/${fearResume}`])
          // }
          // else
          this.router.navigate([`/adults/fear-anxiety/s486`])
          /* if(!fearResume)
           {

             this.router.navigate([`/adults/fear-anxiety`])
           }
           else
             this.router.navigate([`/adults/fear-anxiety/s${fearResume}`])*/

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

        // continue where you left
        if (res.lastVisitedScreen === '') {
          localStorage.setItem("lastvisited", 'F')
        }
        else {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pleasureResume", pleasureResume)
        let mediaPercent = parseInt(res.MediaPercent)
        // []=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens", JSON.stringify([]))
        localStorage.setItem("mediaPercent", JSON.parse(mediaPercent.toString()))
        localStorage.setItem("qrList", JSON.stringify(this.qrList))
      },
        error => {
          console.log(error)
        },
        () => {
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/pleasure/${pleasureResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/loneliness/${lonelinessResume}`])
          // }
          // else
          this.router.navigate([`/adults/loneliness/s61001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/adults/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/anger/${angerResume}`])
          // }
          // else
          this.router.navigate([`/adults/anger/s162p0`])
          /* if(!angerResume)
            {

              this.router.navigate([`/adults/anger/s162p0`])
            }
            else
              this.router.navigate([`/adults/anger/s${angerResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/stress/${stressResume}`])
          // }
          // else
          this.router.navigate([`/adults/stress/s44001`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/adults/stress`])
           }
           else
             this.router.navigate([`/adults/stress/s${stressResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/relationships/${relationshipResume}`])
          // }
          // else
          this.router.navigate([`/adults/relationships/s47000`])

          /*if(!relationshipResume)
            {

              this.router.navigate([`/adults/relationships`])
            }
            else
              this.router.navigate([`/adults/relationships/s${relationshipResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/love/${loveResume}`])
          // }
          // else
          this.router.navigate([`/adults/love/s62001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/adults/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/criticism/${criticismResume}`])
          // }
          // else
          this.router.navigate([`/adults/criticism/s324`])
          /*if(!criticismResume)
           {

             this.router.navigate([`/adults/criticism/s324`])
           }
           else
             this.router.navigate([`/adults/criticism/s${criticismResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/self-esteem/${sR}`])
          // }
          // else
          this.router.navigate([`/adults/self-esteem/s433`])
          /* if(!this.goToPage)
           {

             this.router.navigate([`/adults/conditioning/s232`])
           }
           else
             this.router.navigate([`/adults/conditioning/s${this.goToPage}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/living-with-peace/${livingwithpeaceResume}`])
          // }
          // else
          this.router.navigate([`/adults/living-with-peace/s63001`])
          /* if(!lonelinessResume)
            {

              this.router.navigate([`/adults/loneliness/s162p0`])
            }
            else
              this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
          // }
          // else
          this.router.navigate([`/adults/dealing-with-death/s64001`])

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/happiness/${hR}`])
          // }
          // else
          this.router.navigate([`/adults/happiness/s23001`])
          /* if(!identityResume)
           {

             this.router.navigate([`/adults/identity`])
           }
           else
             this.router.navigate([`/adults/identity/s${identityResume}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/communication/${communicationR}`])
          // }
          //  else
          this.router.navigate([`/adults/communication/s53001`])

          /* if(!communicationR)
           {

             this.router.navigate([`/adults/communication`])
           }
           else
             this.router.navigate([`/adults/communication/s${communicationR}`])*/

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/food-health/${foodResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/money/${moneyResume}`])
          // }
          // else
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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/work/${wR}`])
          // }
          // else
          this.router.navigate([`/adults/work/s58001`])

        })

  }

  routeMakingBetterDecision(cont: any = 1) {
    var making_better_decisionsResume
    localStorage.setItem("moduleId", JSON.stringify(77))
    this.service.clickModule(77, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        making_better_decisionsResume = "s" + res.lastVisitedScreen

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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/leadership/${lR}`])
          // }
          // else
          this.router.navigate([`adults/making-better-decisions/s77001`])



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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/leadership/${lR}`])
          // }
          // else
          this.router.navigate([`/adults/bullying/s76001`])



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
          // if(cont=="1")
          // {
          //   this.router.navigate([`/adults/leadership/${lR}`])
          // }
          // else
          this.router.navigate([`/adults/leadership/s59001`])



        })

  }
  // /transform your life 2

  goDashboard() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.router.navigate(['/adults/curated/manage-your-emotions'])
    }
    else if (cur && cur === 'stress') {
      this.router.navigate(['/adults/curated/overcome-stress-anxiety'])
    }
    else if (cur && cur === 'happier') {
      this.router.navigate(['/adults/curated/be-happier'])
    }
    else if (cur && cur === 'habits') {
      this.router.navigate(['/adults/curated/change-unhelpful-habits'])
    }
    else if (cur && cur === 'workplace') {
      this.router.navigate(['/adults/curated/wisdom-for-workplace'])
    }
    else if (cur && cur === 'relationships') {
      this.router.navigate(['/adults/curated/have-fulfilling-relationships'])
    }
    else if (cur && cur === 'sorrow') {
      this.router.navigate(['/adults/curated/deal-with-sorrow-loss'])
    }
    else if (cur && cur === 'mind') {
      this.router.navigate(['/adults/curated/have-calm-mind'])
    }
    else {
      this.router.navigate(['/adults/adult-dashboard'])
    }


  }
  routeJournal() {
    this.router.navigate(['/adults/journal'])
  }
  routeForum() {
    this.router.navigate(['/forum'])
  }

  public saveAsPDF() {
    const div = document.getElementById('myDiv'); // replace with the ID of your div
    html2canvas(div, {scale: 3,y: 0,  scrollY: 0}
      ).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a5',
        compress:false,
        putOnlyUsedFonts:true,
      });
      const imgProps = pdf.getImageProperties(imgData);
      let pdfWidth = pdf.internal.pageSize.getWidth();
      let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
       pdfHeight=pdfHeight-70;
       pdfWidth=pdfWidth;
       console.log("mobile")
      }else{
        pdfHeight=pdfHeight+10;
        pdfWidth=pdfWidth;
      }
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight+15, "SLOW");
      pdf.setDisplayMode("original", "single");
      pdf.save(this.currentModuleName + ' Certificate.pdf'); // replace with your desired file name
    });
  }

  shareCertificate() {
    //const url = URL.createObjectURL(this.pdfBlob.output('blob'));
    if (this.ngNavigatorShareService.canShareFile) {
      this.ngNavigatorShareService.share({
        title: this.moduleName + " Certificate",
        text: 'Certificate of Completion!',
        files: [this.file]
      }).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
     const div = document.getElementById('myDiv'); // replace with the ID of your div
     html2canvas(div, {scale: 3,y: 0,  scrollY: 0}
      ).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a5',
        compress:false,
        putOnlyUsedFonts:true,
      });
      const imgProps = pdf.getImageProperties(imgData);
      let pdfWidth = pdf.internal.pageSize.getWidth();
      let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
       pdfHeight=pdfHeight-30;
       pdfWidth=pdfWidth;
       console.log("mobile")
      }else{
        pdfHeight=pdfHeight+10;
        pdfWidth=pdfWidth;
      }
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, "SLOW");
      pdf.setDisplayMode("original", "single");
        this.file = new File([pdf.output('blob')], 'Certificate.pdf', { type: 'application/pdf' });
      });
    }, 2000);
  }

  routeDealingWithDepression(cont: any = 1) {
    var dealingwithdepressionResume
    localStorage.setItem("moduleId", JSON.stringify(92))
    this.service.clickModule(92, this.userId)
      .subscribe(res => {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList = res
        dealingwithdepressionResume = "s" + res.lastVisitedScreen
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
          // if (cont == "1") {
          //   this.router.navigate([`/adults/dealing-with-depression/${dealingwithdepressionResume}`])
          // }
          // else
          this.router.navigate([`/adults/dealing-with-depression/s92001`])
        })
  }

    GetModuleDataBasedOnProgramType(){
     this.moduleData= new Array<ProgramModel>();
     this.service.getModules(+this.programType).subscribe(res=>{
      this.moduleData=res;
     });
    }


    ContinueToThisModule(){
     let moduleData=this.moduleData.filter(x=>x.moduleId==this.moduleId);
     if(moduleData && moduleData!=null && moduleData.length>0) {
      this.RouteToModule(moduleData[0]);
     }
    }

    RouteToModule(moduleData:ProgramModel) {
      var addictionResume
      localStorage.setItem("moduleId",moduleData.moduleId)
      this.service.clickModule(+moduleData.moduleId, this.userId)
        .subscribe(res => {
          localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
          this.qrList = res
          addictionResume = "s" + res.lastVisitedScreen
  
          // continue where you left
          if (res.lastVisitedScreen === '') {
            localStorage.setItem("lastvisited", 'F')
          }
          else {
            localStorage.setItem("lastvisited", 'T')
          }
          // /continue where you left
          sessionStorage.setItem(moduleData.moduleName.trim() , 's'+moduleData.lastScreen)
          localStorage.setItem("qrList", JSON.stringify(this.qrList))
        },
          error => {
            console.log(error)
          },
          () => {
            // const isLocalhost = window.location.hostname === 'localhost';
            // if(isLocalhost){
            //     moduleData.path=moduleData.path.replace('teenagers/#/','');
            // }
            moduleData.path=moduleData.path.replace('teenagers/#/','');
            this.router.navigate([''+moduleData.path+'/s'+moduleData.firstScreen]);
          })
    }
}
