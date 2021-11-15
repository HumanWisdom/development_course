import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  //get global settings here
  text=2
  video=3
  audio=4
  question=6
  reflection=5
  feedbackSurvey=7
  programId:any
  sectionId:any
  moduleId=7
  userId=100
  userName:any
  qrList:any
  goToPage:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  points:any
  daysVisited:any
  timeSpent:any
  percentage:any
  bookmarks=[]
  bookmarkLength:any

 //static progress mapping
 angerP:any
 comparisonP:any
 awarenessP:any
 obstaclesP:any
 meditationP:any
 benefitsWisdomP:any
 guideP:any
 fearP:any
 benefitsEnquiryP:any
 questionsP:any
 identityP:any
 keyP:any
 selfEsteemP:any
 conditioningP:any
 fiveCirclesP:any
 happinessP:any
 threeStepsP:any
 noJudgementP:any
 discoveringP:any
 beginP:any
 insightP:any
 pleasureP:any
 withoutLanguageP:any
 criticismP:any
 stressP:any
 relationshipsP:any
 natureP:any
 breathingP:any
 ntP:any
 gamP:any
 communicationP:any
 rmP:any
 siP:any
 sinP:any
 enP:any

 //static progress mapping
  mediaAudio="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"
  mediaVideo="https://humanwisdoms3.s3.eu-west-2.amazonaws.com"  
  mediaPercent:any
  freeScreens=[]

  constructor(private router: Router, private location:Location,private service: AdultsService) { }

  ngOnInit() {
    
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
      this.userName=JSON.parse(sessionStorage.getItem("userName"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
      this.userName=JSON.parse(localStorage.getItem("userName"))

    }
    console.log(this.userId)
     
      //get last screen number here as well
   /* console.log(this.loginResponse.LastScrId)
    if(!this.loginResponse.LastScrId)
      this.goToPage=0
    else
      this.goToPage=parseInt(this.loginResponse.LastScrId)
    console.log(this.goToPage)*/
    this.getProgress()
    localStorage.setItem("text",JSON.stringify(this.text))
    localStorage.setItem("video",JSON.stringify(this.video))
    localStorage.setItem("audio",JSON.stringify(this.audio))
    localStorage.setItem("moduleId",JSON.stringify(this.moduleId))
    localStorage.setItem("question",JSON.stringify(this.question))
    localStorage.setItem("reflection",JSON.stringify(this.reflection))
    localStorage.setItem("feedbackSurvey",JSON.stringify(this.feedbackSurvey))

    //this.getQnR()
    this.getBookmarks()
    
  }
  
 

  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{
      console.log(res)
      this.points=parseInt(res.PointsScored)
      this.goToPage=res.LastScrNo
      this.daysVisited=res.noOfDaysVisited
      this.timeSpent=res.noOfDaysVisited
      this.percentage=parseInt(res.overallPercentage)
    
     //static progress
     this.angerP=res.ModUserScrPc.find(e=>e.Module=="Anger").Percentage
     this.comparisonP=res.ModUserScrPc.find(e=>e.Module=="Comparison").Percentage
     this.awarenessP=res.ModUserScrPc.find(e=>e.Module=="Awareness").Percentage
     this.obstaclesP=res.ModUserScrPc.find(e=>e.Module=="Obstacles to Enquiry").Percentage
     this.meditationP=res.ModUserScrPc.find(e=>e.Module=="Meditation").Percentage
     this.benefitsWisdomP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Wisdom").Percentage
     this.guideP=res.ModUserScrPc.find(e=>e.Module=="Program Guide").Percentage
    this.fearP=res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety").Percentage
     this.benefitsEnquiryP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Enquiry").Percentage
     this.questionsP=res.ModUserScrPc.find(e=>e.Module=="Questions are Key").Percentage
     this.identityP=res.ModUserScrPc.find(e=>e.Module=="Identity").Percentage
     this.keyP=res.ModUserScrPc.find(e=>e.Module=="Key Ideas").Percentage
     this.selfEsteemP=res.ModUserScrPc.find(e=>e.Module=="Self Esteem").Percentage
     this.conditioningP=res.ModUserScrPc.find(e=>e.Module=="Conditioning").Percentage
     this.fiveCirclesP=res.ModUserScrPc.find(e=>e.Module=="5 Circles of Wisdom").Percentage
     this.happinessP=res.ModUserScrPc.find(e=>e.Module=="Happiness").Percentage
     this.threeStepsP=res.ModUserScrPc.find(e=>e.Module=="Three Steps to Enquiry").Percentage
     this.noJudgementP=res.ModUserScrPc.find(e=>e.Module=="No Judgement").Percentage
     this.discoveringP=res.ModUserScrPc.find(e=>e.Module=="Discovering Wisdom").Percentage
     this.beginP=res.ModUserScrPc.find(e=>e.Module=="How to Begin?").Percentage
     this.insightP=res.ModUserScrPc.find(e=>e.Module=="Insight").Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure").Percentage
     this.withoutLanguageP=res.ModUserScrPc.find(e=>e.Module=="Look without Language").Percentage
     this.criticismP=res.ModUserScrPc.find(e=>e.Module=="Criticism").Percentage
     this.stressP=res.ModUserScrPc.find(e=>e.Module=="Stress").Percentage
     this.relationshipsP=res.ModUserScrPc.find(e=>e.Module=="Relationships").Percentage
     this.natureP=res.ModUserScrPc.find(e=>e.Module=="Nature").Percentage
     this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing").Percentage
     this.ntP=res.ModUserScrPc.find(e=>e.Module=="Noticing Thoughts").Percentage
     this.gamP=res.ModUserScrPc.find(e=>e.Module=="Guided Audio Meditation").Percentage
     this.communicationP=res.ModUserScrPc.find(e=>e.Module=="Communication").Percentage
     this.siP=res.ModUserScrPc.find(e=>e.Module=="Self Image").Percentage
     this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind").Percentage
     this.sinP=res.ModUserScrPc.find(e=>e.Module=="Self Interest").Percentage
     this.enP=res.ModUserScrPc.find(e=>e.Module=="Emotional Needs").Percentage
     
     
    


    
    })
  }

  getBookmarks(){
    this.service.getBookmarks(this.userId)
    .subscribe(res=>{
      //console.log("bookmarks",res)
      
      this.bookmarks=res
      this.bookmarks = this.bookmarks.map(a => parseInt(a.ScrNo));
      console.log("bookmarked screens",this.bookmarks)
      localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarks))
      this.bookmarkLength=this.bookmarks.length
     
    })
  
  }

  routeComparison(){
    console.log("comparison")
    localStorage.setItem("moduleId",JSON.stringify(7))
    console.log(this.userId)
    this.service.clickModule(7,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        this.goToPage=res.lastVisitedScreen
        this.mediaPercent=parseInt(res.MediaPercent)
        this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/comparison/s0`])
     /* console.log("goToPage",this.goToPage)
      if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/comparison/s0`])
      }
      else
        this.router.navigate([`/adults/comparison/s${this.goToPage}`])*/

    })
   

  }

  routePleasure(){
    var pleasureResume
    console.log("pleasure")
    localStorage.setItem("moduleId",JSON.stringify(20))
    console.log(this.userId)
    this.service.clickModule(20,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        pleasureResume=res.lastVisitedScreen
        this.mediaPercent=parseInt(res.MediaPercent)
       // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/pleasure/s20001`])
      
     /* if(!pleasureResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/pleasure`])
      }
      else
        this.router.navigate([`/adults/pleasure/s${pleasureResume}`])*/

    })
   

  }

  routeAnger(){
    var angerResume
    console.log("anger")
    localStorage.setItem("moduleId",JSON.stringify(14))
    this.service.clickModule(14,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        angerResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/anger/s162p0`])
    /* if(!angerResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/anger/s162p0`])
      }
      else
        this.router.navigate([`/adults/anger/s${angerResume}`])*/

    })
   
    
    
   
  }

  routeRelationships(){
    var relationshipResume
    console.log("relationships")
    localStorage.setItem("moduleId",JSON.stringify(47))
    this.service.clickModule(47,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        relationshipResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/relationships`])
     
    /*if(!relationshipResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/relationships`])
      }
      else
        this.router.navigate([`/adults/relationships/s${relationshipResume}`])*/

    })
  }

  routeCriticism(){
    var criticismResume
    console.log("criticism")
   localStorage.setItem("moduleId",JSON.stringify(16))
    this.service.clickModule(16,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        criticismResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/criticism/s324`])
     /*if(!criticismResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/criticism/s324`])
      }
      else
        this.router.navigate([`/adults/criticism/s${criticismResume}`])*/

    })
    
   
   
  }

  routeHappiness(){
    var hR
    console.log("happiness")
    localStorage.setItem("moduleId",JSON.stringify(23))
    this.service.clickModule(23,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        hR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/happiness`])
     /* if(!identityResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
   
   
  }
  routeIdentity(){
    var identityResume
    console.log("identity")
    localStorage.setItem("moduleId",JSON.stringify(21))
    this.service.clickModule(21,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        identityResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/identity/s21001`])
     /* if(!identityResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
    
  }
  routeIdeas(){
    var keyIdeasResume
    console.log("key-ideas")
    localStorage.setItem("moduleId",JSON.stringify(34))
    this.service.clickModule(34,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        keyIdeasResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/key-ideas/s34002`])
      /*if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/key-ideas`])
      }
      else
        this.router.navigate([`/adults/key-ideas/s${keyIdeasResume}`])*/

    })
    
  }
  routeConditioning(){
    var conditioningResume
    console.log("conditioning")
    localStorage.setItem("moduleId",JSON.stringify(15))
    this.service.clickModule(15,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        conditioningResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/conditioning/s232`])
      /*if(!conditioningResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/conditioning`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${conditioningResume}`])*/

    })

  }
  routeMeditation(){
    var meditationResume
    console.log("meditation")
    localStorage.setItem("moduleId",JSON.stringify(22))
    this.service.clickModule(22,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        meditationResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/meditation/s22001`])
      /*if(!meditationResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/meditation`])
      }
      else
        this.router.navigate([`/adults/meditation/s${meditationResume}`])*/

    })
   

  }
  routeSelfEsteem(){
    localStorage.setItem("moduleId",JSON.stringify(17))
    this.service.clickModule(17,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        this.goToPage=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/self-esteem/s433`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/conditioning/s232`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${this.goToPage}`])*/

    })

    
    

  }

  routeFearAnxiety(){
    var fearResume
    localStorage.setItem("moduleId",JSON.stringify(19))
    this.service.clickModule(19,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        fearResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/fear-anxiety/s486`])
     /* if(!fearResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/fear-anxiety`])
      }
      else
        this.router.navigate([`/adults/fear-anxiety/s${fearResume}`])*/

    })

    
   

  }

  routeSelfImage(){
    console.log("self-image")
    var siR
    
    localStorage.setItem("moduleId",JSON.stringify(25))
    console.log(this.userId)
    this.service.clickModule(25,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        siR=res.lastVisitedScreen
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/self-image`])
      /*console.log("goToPage",siR)
      if(!siR)
      {
        console.log("null go to page")
       this.router.navigate([`/adults/self-image`])
      }
      else
        this.router.navigate([`/adults/self-image/s${siR}`])*/

    })
    
    
   

  }

  routeBenefitsEnquiry(){
    var resumeBenefitsEnquiry
    console.log("enquiry benefits")
    localStorage.setItem("moduleId",JSON.stringify(26))
    console.log(this.userId)
    this.service.clickModule(26,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        resumeBenefitsEnquiry=res.lastVisitedScreen
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
     this.router.navigate([`/adults/benefits-of-enquiry/s26002`])
     /* console.log("goToPage",resumeBenefitsEnquiry)
      if(!resumeBenefitsEnquiry)
      {
        console.log("null go to page")
       this.router.navigate([`/adults/benefits-of-enquiry`])
      }
      else
        this.router.navigate([`/adults/benefits-of-enquiry/s${resumeBenefitsEnquiry}`])*/

    })
   
  }

  routeDiscoveringWisdom(){
    var discoveringWisdomResume
    console.log("discovering wisdom")
    localStorage.setItem("moduleId",JSON.stringify(27))
    console.log(this.userId)
    this.service.clickModule(27,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        discoveringWisdomResume=res.lastVisitedScreen
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        console.log(this.freeScreens)
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/discovering-wisdom/s27002`])
      /*console.log("goToPage",this.goToPage)
      if(!discoveringWisdomResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/discovering-wisdom`])
      }
      else
        this.router.navigate([`/adults/discovering-wisdom/s${discoveringWisdomResume}`])*/

    })
    

  }

  routeBenefits(){
    var benefitsWisdomResume
    console.log("benefits of wisdom")
    localStorage.setItem("moduleId",JSON.stringify(32))
    this.service.clickModule(32,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        benefitsWisdomResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/benefits-of-wisdom/s32002`])
      /*if(!benefitsWisdomResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/benefits-of-wisdom`])
      }
      else
        this.router.navigate([`/adults/benefits-of-wisdom/s${benefitsWisdomResume}`])*/

    })
   
   
  }

  routeCircles(){
    var fiveCirclesResume
    console.log("five circles")
    localStorage.setItem("moduleId",JSON.stringify(33))
    this.service.clickModule(33,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        fiveCirclesResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/five-circles/s33002`])
      /*if(!fiveCirclesResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/five-circles`])
      }
      else
        this.router.navigate([`/adults/five-circles/s${fiveCirclesResume}`])*/

    })
   
   
  }

  routeGuide(){
    var pgResume
    console.log("guide")
    localStorage.setItem("moduleId",JSON.stringify(35))
    this.service.clickModule(35,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        pgResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/program-guide/s35002`])
     /* if(!pgResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/program-guide/s35002`])
      }
      else
        this.router.navigate([`/adults/program-guide/s${ pgResume}`])*/

    })
    
   
  }
  routeHowToBegin(){
    var beginResume
    console.log("begin")
    localStorage.setItem("moduleId",JSON.stringify(36))
    this.service.clickModule(36,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        beginResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/how-to-begin/s36001`])
      /*if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/how-to-begin`])
      }
      else
        this.router.navigate([`/adults/how-to-begin/s${beginResume}`])*/

    })
   
  }
  routeThreeSteps(){
    var threeStepsResume
    console.log("3 steps")
    localStorage.setItem("moduleId",JSON.stringify(37))
    this.service.clickModule(37,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        threeStepsResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/three-steps-enquiry/s37001`])
      /*if(!threeStepsResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/three-steps-enquiry`])
      }
      else
        this.router.navigate([`/adults/three-steps-enquiry/s${threeStepsResume}`])*/

    })
    
   
  }
  routeInsights(){
    var insightResume
    console.log("insight")
    localStorage.setItem("moduleId",JSON.stringify(38))
    this.service.clickModule(38,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        insightResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/insight/s38001`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/insight`])
      }
      else
        this.router.navigate([`/adults/insight/s${insightResume}`])*/

    })
  }
  routeAwareness(){
    var awarenessResume
    console.log("awareness")
    localStorage.setItem("moduleId",JSON.stringify(39))
    this.service.clickModule(39,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        awarenessResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/awareness/s39001`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/awareness`])
      }
      else
        this.router.navigate([`/adults/awareness/s${awarenessResume}`])*/

    })
   
   
  }
  routeNoJudgement(){
    var njResume
    console.log("nj")
    localStorage.setItem("moduleId",JSON.stringify(40))
    this.service.clickModule(40,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        njResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/no-judgement/s40001`])
      /*if(!njResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/no-judgement/`])
      }
      else
        this.router.navigate([`/adults/no-judgement/s${njResume}`])*/

    })
   
  }
  routeQuestionsAreKey(){
    var qakResume
    console.log("qak")
    localStorage.setItem("moduleId",JSON.stringify(41))
    this.service.clickModule(41,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        qakResume=res.lastVisitedScreen
        console.log(qakResume,"qafResume")
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      console.log(qakResume,"qafResume")
      this.router.navigate([`/adults/questions-are-key/s41001`])
      /*if(!qakResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/questions-are-key`])
      }
      else
        this.router.navigate([`/adults/questions-are-key/s${qakResume}`])*/

    })
   
    
  }
  routeLookWithoutLanguage(){
    var lwlResume
    console.log("lwl")
    localStorage.setItem("moduleId",JSON.stringify(42))
    this.service.clickModule(42,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        lwlResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
     this.router.navigate([`/adults/without-language/s42001`])
     /* if(!lwlResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/without-language`])
      }
      else
        this.router.navigate([`/adults/without-language/s${lwlResume}`])*/

    })
   
  }
  routeObstacles(){
    var obstaclesResume
    console.log("obstacles")
    localStorage.setItem("moduleId",JSON.stringify(43))
    this.service.clickModule(43,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        obstaclesResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/obstacles-enquiry/s43001`])
      /*if(! obstaclesResume)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/obstacles-enquiry`])
      }
      else
        this.router.navigate([`/adults/obstacles-enquiry/s${obstaclesResume}`])*/

    })
   
   
  }
  routeNature(){
    var natureR
    console.log("nature")
    localStorage.setItem("moduleId",JSON.stringify(28))
    this.service.clickModule(28,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        natureR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/nature`])
     
     /*if(!natureR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/nature`])
      }
      else
        this.router.navigate([`/adults/nature/s${natureR}`])*/

    })
    
   

  }
  routeNoticingThoughts(){
    var ntR
    
    localStorage.setItem("moduleId",JSON.stringify(30))
    this.service.clickModule(30,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        ntR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/noticing-thoughts`])
      /*if(!ntR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/noticing-thoughts`])
      }
      else
        this.router.navigate([`/adults/noticing-thoughts/s${ntR}`])*/

    })

  }

  routeBreathing(){

    var breathingR
    console.log("breathing")
    
    localStorage.setItem("moduleId",JSON.stringify(29))
    this.service.clickModule(29,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
       breathingR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/breathing`])
    
     /* if(!breathingR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/breathing`])
       
      }
      else
        this.router.navigate([`/adults/breathing/s${breathingR}`])*/

    })

  }
  routeGuidedMeditation(){
    var gamR
    localStorage.setItem("moduleId",JSON.stringify(51))
    this.service.clickModule(51,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        gamR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/guided-meditation`])
      
     /* if(!gamR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/guided-meditation`])
        
      }
      else
        this.router.navigate([`/adults/guided-meditation/s${gamR}`])*/

    })

  }
  routeStress(){
    var stressResume
    console.log("stress")
    localStorage.setItem("moduleId",JSON.stringify(44))
    this.service.clickModule(44,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        stressResume=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
     this.router.navigate([`/adults/stress`])
     /* if(!this.goToPage)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/stress`])
      }
      else
        this.router.navigate([`/adults/stress/s${stressResume}`])*/

    })
   
  }

  routeCommunication(){
   var communicationR
    localStorage.setItem("moduleId",JSON.stringify(53))
    this.service.clickModule(53,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        communicationR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/communication`])
     
     /* if(!communicationR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/communication`])
      }
      else
        this.router.navigate([`/adults/communication/s${communicationR}`])*/

    })

    
    

  }

  routeReactiveMind(){
    var rmR
    console.log("reactive mind")
    localStorage.setItem("moduleId",JSON.stringify(54))
    this.service.clickModule(54,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        rmR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/reactive-mind`])
     /* if(!rmR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/reactive-mind`])
      }
      else
        this.router.navigate([`/adults/reactive-mind/s${rmR}`])*/

    })
   
  }

  routeSelfInterest(){
    var sinR
    console.log("self interest")
    localStorage.setItem("moduleId",JSON.stringify(55))
    this.service.clickModule(55,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        sinR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/self-interest`])
      
      /*if(!sinR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
   
  }
  routeEmotionalNeeds(){
    var enR
    console.log("emotional needs")
    localStorage.setItem("moduleId",JSON.stringify(18))
    this.service.clickModule(18,this.userId)
    .subscribe(res=>
      {console.log(res)
        this.qrList=res
        enR=res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      this.router.navigate([`/adults/emotional-needs`])
      
      /*if(!sinR)
      {
        console.log("null go to page")
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
  }

    routeInnerBoredom(){
      var ibR
      console.log("inner boredom")
      localStorage.setItem("moduleId",JSON.stringify(56))
      this.service.clickModule(56,this.userId)
      .subscribe(res=>
        {console.log(res)
          this.qrList=res
          ibR=res.lastVisitedScreen
          localStorage.setItem("qrList",JSON.stringify(this.qrList))
      },
      error=>{
        console.log(error)
      },
      ()=>{
        this.router.navigate([`/adults/inner-boredom`])
        
        /*if(!sinR)
        {
          console.log("null go to page")
          this.router.navigate([`/adults/self-interest`])
        }
        else
          this.router.navigate([`/adults/self-interest/s${sinR}`])*/
  
      })
   
  }

 



  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

}
