import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../adults.service';
declare var $: any;
import {Location } from '@angular/common'

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.page.html',
  styleUrls: ['./dashboard-module.page.scss'],
})
export class DashboardModulePage implements OnInit {

  yellow="#FFC455"
  // @Input() audioLink: string;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/anger/audios/anger+1.1.mp3';
  userId=100
  qrList:any
  goToPage:any
  //static progress mapping
  mediaVideo="https://d1tenzemoxuh75.cloudfront.net"  
  mediaPercent:any
  freeScreens=[]
   //static progress mapping
   text=2
  video=3
  audio=4
  question=6
  reflection=5
  feedbackSurvey=7
  programId:any
  sectionId:any
  moduleId=7
  userName:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  points:any
  daysVisited:any
  timeSpent:any
  percentage:any
  bookmarks=[]
  resume=[]
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
 ibP:any
 wP:any
 lP:any
 seP:any
 niP:any
 lonelinessP:any
 livingwithpeaceP:any
 loveP:any
 dealingwithdeathP:any
 opinionsandbeliefsP:any
 successandfailureP:any
 addictionP:any
 foodP:any
 moneyP:any
 Subscriber:any
 alertMsg:any
 friendemail = ''
 friendname = ''
 name = ''
 sorrowandlossP
 isloggedIn=false
 x=[]
 isSubscribe = false
 enablebanner = false;
 modaldata = {}
 firstpage = true;
 secondpage = false;
 thirdpage = false;
 fourthpage = false;
 fifthpage = false;
 sixthpage = false;
 activationCode:any = ''
 countryCode: any = '';
 email: any = '';
 verificationCode: any;
 loginpassword: any = '';
 loginemail: any = '';
 subthirdpage = false;
 subfirstpage = true;
 subsecondpage = false;
 user:any
idToken:any
socialFirstName:any
 socialLastName:any
 socialEmail:any
 yearormonth = ''
 personalisedList = []

  constructor(private service: AdultsService, private router: Router, private location:Location,) { }

  ngOnInit() {
    this.userId=JSON.parse(localStorage.getItem("userId"))
    // carousel multiple items increment by 1 - c1_w33
    // Add minus icon for collapse element which is open by default
    $('.c1_w33 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 3; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c1_w33

    // carousel multiple items increment by 1 - c2_w50
    // Add minus icon for collapse element which is open by default
    $('.c2_w50 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 2; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c2_w50

    // carousel multiple items increment by 1 - c3_w100
    // Add minus icon for collapse element which is open by default
    $('.c3_w100 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 1; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c3_w100

    // carousel multiple items increment by 1 - c1_w33_01
    // Add minus icon for collapse element which is open by default
    $('.c1_w33_01 .item').each(function () {
      let itemToClone = $(this);

      for (let i = 1; i < 6; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass(`cloneditem-${i}`)
          .appendTo($(this));
      }
    });
    // /carousel multiple items increment by 1 - c1_w33_01

  }

  goBack(){
    this.location.back()
  }

  getsupport(url, id) {
    this.service.clickModule(id,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem('activemoduleid', id);
        localStorage.setItem('moduleId', id);
        this.router.navigate([url])
        localStorage.setItem("supportwisdomstories", JSON.stringify(res['scenarios']))
    },
    error=>{
      console.log(error)
    },
    ()=>{

    })
  }

  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{
      
      this.points=parseInt(res.PointsScored)
      this.goToPage=res.LastScrNo
      this.daysVisited=res.noOfDaysVisited
      this.timeSpent=res.noOfDaysVisited
      this.percentage=parseInt(res.overallPercentage)
      localStorage.setItem("overallPercentage",this.percentage)

      //resume section
      res.ModUserScrPc.filter(x=>{
        if(parseFloat(x.Percentage)<100){
          if(x.ModuleId != 71 && x.ModuleId !=72)
          {
            if(x.ModuleId<10)
            {
              x.ModuleId="0"+x.ModuleId
              
            }

            x.imgPath=`https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/${x.ModuleId}.png`
            this.resume.push(x)
            this.resume.sort((val1, val2)=> {return <any>new Date(val2.LastUpdatedOn) - <any>new Date(val1.LastUpdatedOn)})
          }
        }
      })
    
     //static progress
     this.angerP=res.ModUserScrPc.find(e=>e.Module=="Anger")?.Percentage
     this.comparisonP=res.ModUserScrPc.find(e=>e.Module=="Comparison")?.Percentage
     this.awarenessP=res.ModUserScrPc.find(e=>e.Module=="Awareness")?.Percentage
     this.obstaclesP=res.ModUserScrPc.find(e=>e.Module=="Obstacles to Enquiry")?.Percentage
     this.meditationP=res.ModUserScrPc.find(e=>e.Module=="Meditation")?.Percentage
     this.benefitsWisdomP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Wisdom")?.Percentage
     this.guideP=res.ModUserScrPc.find(e=>e.Module=="Program Guide")?.Percentage
     this.fearP=res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety")?.Percentage
     this.benefitsEnquiryP=res.ModUserScrPc.find(e=>e.Module=="Benefits of Enquiry")?.Percentage
     this.questionsP=res.ModUserScrPc.find(e=>e.Module=="Questions are Key")?.Percentage
     this.identityP=res.ModUserScrPc.find(e=>e.Module=="Identity")?.Percentage
     this.keyP=res.ModUserScrPc.find(e=>e.Module=="Key Ideas")?.Percentage
     this.selfEsteemP=res.ModUserScrPc.find(e=>e.Module=="Self Esteem")?.Percentage
     this.conditioningP=res.ModUserScrPc.find(e=>e.Module=="Conditioning")?.Percentage
     this.fiveCirclesP=res.ModUserScrPc.find(e=>e.Module=="5 Circles of Wisdom")?.Percentage
     this.happinessP=res.ModUserScrPc.find(e=>e.Module=="Happiness")?.Percentage
     this.threeStepsP=res.ModUserScrPc.find(e=>e.Module=="Three Steps to Enquiry")?.Percentage
     this.noJudgementP=res.ModUserScrPc.find(e=>e.Module=="No Judgement")?.Percentage
     this.discoveringP=res.ModUserScrPc.find(e=>e.Module=="Discovering Wisdom")?.Percentage
     this.beginP=res.ModUserScrPc.find(e=>e.Module=="How to Begin?")?.Percentage
     this.insightP=res.ModUserScrPc.find(e=>e.Module=="Insight")?.Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure")?.Percentage
     this.withoutLanguageP=res.ModUserScrPc.find(e=>e.Module=="Look without Language")?.Percentage
     this.criticismP=res.ModUserScrPc.find(e=>e.Module=="Criticism")?.Percentage
     this.stressP=res.ModUserScrPc.find(e=>e.Module=="Stress")?.Percentage
     this.relationshipsP=res.ModUserScrPc.find(e=>e.Module=="Relationships")?.Percentage
     this.natureP=res.ModUserScrPc.find(e=>e.Module=="Nature")?.Percentage
     this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing")?.Percentage
     this.ntP=res.ModUserScrPc.find(e=>e.Module=="Noticing Thoughts")?.Percentage
     this.gamP=res.ModUserScrPc.find(e=>e.Module=="Guided Audio Meditation")?.Percentage
     this.communicationP=res.ModUserScrPc.find(e=>e.Module=="Communication")?.Percentage
     this.siP=res.ModUserScrPc.find(e=>e.Module=="Self Image")?.Percentage
     this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind")?.Percentage
     this.sinP=res.ModUserScrPc.find(e=>e.Module=="Self Interest")?.Percentage
     this.enP=res.ModUserScrPc.find(e=>e.Module=="Emotional Needs")?.Percentage
     this.ibP=res.ModUserScrPc.find(e=>e.Module=="Inner Boredom")?.Percentage
     this.wP=res.ModUserScrPc.find(e=>e.Module=="Work")?.Percentage
     this.lP=res.ModUserScrPc.find(e=>e.Module=="Leadership")?.Percentage
     this.niP=res.ModUserScrPc.find(e=>e.Module=="The Nature of the I")?.Percentage
     this.seP=res.ModUserScrPc.find(e=>e.Module=="Self Esteem")?.Percentage
     this.lonelinessP=res.ModUserScrPc.find(e=>e.Module=="Loneliness")?.Percentage
     this.livingwithpeaceP=res.ModUserScrPc.find(e=>e.Module=="Living With Peace")?.Percentage
     this.loveP=res.ModUserScrPc.find(e=>e.Module=="Love")?.Percentage
     this.dealingwithdeathP=res.ModUserScrPc.find(e=>e.Module=="Dealing With Death")?.Percentage
     this.opinionsandbeliefsP=res.ModUserScrPc.find(e=>e.Module=="Opinions And Beliefs")?.Percentage
     this.successandfailureP=res.ModUserScrPc.find(e=>e.Module=="Success And Failure")?.Percentage
     this.addictionP=res.ModUserScrPc.find(e=>e.Module=="Addiction")?.Percentage
     this.foodP=res.ModUserScrPc.find(e=>e.Module=="Food")?.Percentage
     this.moneyP=res.ModUserScrPc.find(e=>e.Module=="Money")?.Percentage
     this.sorrowandlossP=res.ModUserScrPc.find(e=>e.Module=="Sorrow And Loss")?.Percentage    
    })
  }

  // introduction
  routeDiscoveringWisdom(cont: any = 1){
    var discoveringWisdomResume
    localStorage.setItem("moduleId",JSON.stringify(27))
    this.service.clickModule(27,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        discoveringWisdomResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("discoveringWisdomResume",discoveringWisdomResume)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/discovering-wisdom/${discoveringWisdomResume}`])
      }
      else
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
  
  routeBenefits(cont: any = 1){
    var benefitsWisdomResume
    localStorage.setItem("moduleId",JSON.stringify(32))
    this.service.clickModule(32,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        benefitsWisdomResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("benefitsWisdomResume",benefitsWisdomResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/benefits-of-wisdom/${benefitsWisdomResume}`])
      }
      else
      this.router.navigate([`/adults/benefits-of-wisdom/s32001`])
    })
  }    

  routeCircles(cont: any = 1){
    var fiveCirclesResume
    localStorage.setItem("moduleId",JSON.stringify(33))
    this.service.clickModule(33,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        fiveCirclesResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fiveCirclesResume",fiveCirclesResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/five-circles/${fiveCirclesResume}`])
      }
      else
      this.router.navigate([`/adults/five-circles/s33001`])
      /*if(!fiveCirclesResume)
      {
        
        this.router.navigate([`/adults/five-circles`])
      }
      else
        this.router.navigate([`/adults/five-circles/s${fiveCirclesResume}`])*/

    })
   
   
  }

  routeIdeas(cont: any = 1){
    var keyIdeasResume
    localStorage.setItem("moduleId",JSON.stringify(34))
    this.service.clickModule(34,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        keyIdeasResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("keyIdeasResume",keyIdeasResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
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

  routeGuide(cont: any = 1){
    var pgResume
    localStorage.setItem("moduleId",JSON.stringify(35))
    this.service.clickModule(35,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        pgResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pgResume",pgResume)
        pgResume="s"+res.lastVisitedScreen
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/program-guide/${pgResume}`])
      }
      else
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
  routeNature(cont: any = 1){
    var natureR
    localStorage.setItem("moduleId",JSON.stringify(28))
    this.service.clickModule(28,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        natureR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("natureR",natureR)      
       
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {
        this.router.navigate([`/adults/nature/${natureR}`])
      }
      else
      this.router.navigate([`/adults/nature/s28001`])
     
     /*if(!natureR)
      {
        
        this.router.navigate([`/adults/nature`])
      }
      else
        this.router.navigate([`/adults/nature/s${natureR}`])*/

    })
    
   

  }

  routeBreathing(cont: any = 1){

    var breathingR
    
    localStorage.setItem("moduleId",JSON.stringify(29))
    this.service.clickModule(29,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        breathingR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("breathingR",breathingR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/breathing/${breathingR}`])
      }
      else
      this.router.navigate([`/adults/breathing/s29000`])
    
     /* if(!breathingR)
      {
        
        this.router.navigate([`/adults/breathing`])
       
      }
      else
        this.router.navigate([`/adults/breathing/s${breathingR}`])*/

    })

  }
 
  routeNoticingThoughts(cont: any = 1){
    var ntR
    
    localStorage.setItem("moduleId",JSON.stringify(30))
    this.service.clickModule(30,this.userId)
    .subscribe(res=>
      {
        this.qrList=res
        ntR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
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
        sessionStorage.setItem("ntR",ntR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/noticing-thoughts/${ntR}`])
      }
      else
      this.router.navigate([`/adults/noticing-thoughts/s30001`])
      /*if(!ntR)
      {
        
        this.router.navigate([`/adults/noticing-thoughts`])
      }
      else
        this.router.navigate([`/adults/noticing-thoughts/s${ntR}`])*/

    })

  }

  routeGuidedMeditation(cont: any = 1){
    var gamR
    localStorage.setItem("moduleId",JSON.stringify(51))
    this.service.clickModule(51,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        gamR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("gamR",gamR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/guided-meditation/${gamR}`])
      }
      else
      this.router.navigate([`/adults/guided-meditation/s51000`])
      
     /* if(!gamR)
      {
        
        this.router.navigate([`/adults/guided-meditation`])
        
      }
      else
        this.router.navigate([`/adults/guided-meditation/s${gamR}`])*/

    })

  }
  
  routeMeditation(cont: any = 1){
    var meditationResume
    localStorage.setItem("moduleId",JSON.stringify(22))
    this.service.clickModule(22,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        meditationResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("meditationResume",meditationResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/meditation/${meditationResume}`])
      }
      else
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
  routeBenefitsEnquiry(cont: any = 1){
    var resumeBenefitsEnquiry
    localStorage.setItem("moduleId",JSON.stringify(26))
    this.service.clickModule(26,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        resumeBenefitsEnquiry="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("resumeBenefitsEnquiry",resumeBenefitsEnquiry)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/benefits-of-enquiry/${resumeBenefitsEnquiry}`])
      }
      else
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

  routeHowToBegin(cont: any = 1){
    var beginResume
    localStorage.setItem("moduleId",JSON.stringify(36))
    this.service.clickModule(36,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        beginResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("beginResume",beginResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/how-to-begin/${beginResume}`])
      }
      else
      this.router.navigate([`/adults/how-to-begin/s36000`])
      /*if(!this.goToPage)
      {
        
        this.router.navigate([`/adults/how-to-begin`])
      }
      else
        this.router.navigate([`/adults/how-to-begin/s${beginResume}`])*/

    })
   
  }

  routeThreeSteps(cont: any = 1){
    var threeStepsResume
    localStorage.setItem("moduleId",JSON.stringify(37))
    this.service.clickModule(37,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        threeStepsResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("threeStepsResume",threeStepsResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/three-steps-enquiry/${threeStepsResume}`])
      }
      else
      this.router.navigate([`/adults/three-steps-enquiry/s37000`])
      /*if(!threeStepsResume)
      {
        
        this.router.navigate([`/adults/three-steps-enquiry`])
      }
      else
        this.router.navigate([`/adults/three-steps-enquiry/s${threeStepsResume}`])*/

    })
    
   
  }

  routeInsights(cont: any = 1){
    var insightResume
    localStorage.setItem("moduleId",JSON.stringify(38))
    this.service.clickModule(38,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        insightResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("insightResume",insightResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/insight/${insightResume}`])
      }
      else
      this.router.navigate([`/adults/insight/s38000`])
     /* if(!this.goToPage)
      {
        
        this.router.navigate([`/adults/insight`])
      }
      else
        this.router.navigate([`/adults/insight/s${insightResume}`])*/

    })
  }

  routeAwareness(cont: any = 1){
    var awarenessResume
    localStorage.setItem("moduleId",JSON.stringify(39))
    this.service.clickModule(39,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        awarenessResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("awarenessResume",awarenessResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/awareness/${awarenessResume}`])
      }
      else
      this.router.navigate([`/adults/awareness/s39000`])
     /* if(!this.goToPage)
      {
        
        this.router.navigate([`/adults/awareness`])
      }
      else
        this.router.navigate([`/adults/awareness/s${awarenessResume}`])*/

    })
   
   
  }

  routeNoJudgement(cont: any = 1){
    var njResume
    localStorage.setItem("moduleId",JSON.stringify(40))
    this.service.clickModule(40,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        njResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("njResume",njResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/no-judgement/${njResume}`])
      }
      else
      this.router.navigate([`/adults/no-judgement/s40000`])
      /*if(!njResume)
      {
        
        this.router.navigate([`/adults/no-judgement/`])
      }
      else
        this.router.navigate([`/adults/no-judgement/s${njResume}`])*/

    })
   
  }

  routeQuestionsAreKey(cont: any = 1){
    var qakResume
    localStorage.setItem("moduleId",JSON.stringify(41))
    this.service.clickModule(41,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        qakResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("qakResume",qakResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/questions-are-key/${qakResume}`])
      }
      else
         this.router.navigate([`/adults/questions-are-key/s41000`])
      /*if(!qakResume)
      {
        
        this.router.navigate([`/adults/questions-are-key`])
      }
      else
        this.router.navigate([`/adults/questions-are-key/s${qakResume}`])*/

    })
   
    
  }  

  routeLookWithoutLanguage(cont: any = 1){
    var lwlResume
    localStorage.setItem("moduleId",JSON.stringify(42))
    this.service.clickModule(42,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lwlResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lwlResume",lwlResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/without-language/${lwlResume}`])
      }
      else
        this.router.navigate([`/adults/without-language/s42000`])
     /* if(!lwlResume)
      {
        
        this.router.navigate([`/adults/without-language`])
      }
      else
        this.router.navigate([`/adults/without-language/s${lwlResume}`])*/

    })
   
  }

  routeObstacles(cont: any = 1){
    var obstaclesResume
    localStorage.setItem("moduleId",JSON.stringify(43))
    this.service.clickModule(43,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        obstaclesResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("obstaclesResume",obstaclesResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/obstacles-enquiry/${obstaclesResume}`])
      }
      else
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
  routeConditioning(cont: any = 1){
    var conditioningResume
    localStorage.setItem("moduleId",JSON.stringify(15))
    this.service.clickModule(15,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        conditioningResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("conditioningResume",conditioningResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/conditioning/${conditioningResume}`])
      }
      else
      this.router.navigate([`/adults/conditioning/s232`])
      /*if(!conditioningResume)
      {
        
        this.router.navigate([`/adults/conditioning`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${conditioningResume}`])*/

    })

  }

  routeComparison(cont: any = 1){
    var comparisonR
    localStorage.setItem("moduleId",JSON.stringify(7))
    this.service.clickModule(7,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        comparisonR="s"+res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("comparisonR",comparisonR)
        this.mediaPercent=parseInt(res.MediaPercent)
        this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/comparison/${comparisonR}`])
      }
      else
        this.router.navigate([`/adults/comparison/s0`])

    })
   

  }

  routeReactiveMind(cont: any = 1){
    var rmR
    localStorage.setItem("moduleId",JSON.stringify(54))
    this.service.clickModule(54,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        rmR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("rmR",rmR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/reactive-mind/${rmR}`])
      }
      else
      this.router.navigate([`/adults/reactive-mind/s54001`])
     /* if(!rmR)
      {
        
        this.router.navigate([`/adults/reactive-mind`])
      }
      else
        this.router.navigate([`/adults/reactive-mind/s${rmR}`])*/

    })
   
  }

  routeSelfImage(cont: any = 1){
    var siR
    
    localStorage.setItem("moduleId",JSON.stringify(25))
    this.service.clickModule(25,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        siR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("siR",siR)
        this.mediaPercent=parseInt(res.MediaPercent)
        //this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/self-image/${siR}`])
      }
      else
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

  routeSelfInterest(cont: any = 1){
    var sinR
    localStorage.setItem("moduleId",JSON.stringify(55))
    this.service.clickModule(55,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sinR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sinR",sinR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/self-interest/${sinR}`])
      }
      else
      this.router.navigate([`/adults/self-interest/s55001`])
      
      /*if(!sinR)
      {
        
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
   
  }

  routeIdentity(cont: any = 1){
    var identityResume
    localStorage.setItem("moduleId",JSON.stringify(21))
    this.service.clickModule(21,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        identityResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("identityResume",identityResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/identity/${identityResume}`])
      }
      else
      this.router.navigate([`/adults/identity/s21001`])
     /* if(!identityResume)
      {
        
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
    
  }

  routeEmotionalNeeds(cont: any = 1){
    var enR
    localStorage.setItem("moduleId",JSON.stringify(18))
    this.service.clickModule(18,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        enR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("enR",enR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/emotional-needs/${enR}`])
      }
      else
      this.router.navigate([`/adults/emotional-needs/s18001`])
      
      /*if(!sinR)
      {
        
        this.router.navigate([`/adults/self-interest`])
      }
      else
        this.router.navigate([`/adults/self-interest/s${sinR}`])*/

    })
  }

  routeInnerBoredom(cont: any = 1){
      var ibR
      localStorage.setItem("moduleId",JSON.stringify(56))
      this.service.clickModule(56,this.userId)
      .subscribe(res=>
        {
          localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
          this.qrList=res
          ibR="s"+res.lastVisitedScreen
          this.goToPage=res.lastVisitedScreen
          // continue where you left
          if(res.lastVisitedScreen ==='') 
          {
            localStorage.setItem("lastvisited", 'F')
          }
          else 
          {
            localStorage.setItem("lastvisited", 'T')
          }
          // /continue where you left
          sessionStorage.setItem("ibR",ibR)
          localStorage.setItem("qrList",JSON.stringify(this.qrList))
      },
      error=>{
        console.log(error)
      },
      ()=>{
        if(cont=="1")
        {          
          this.router.navigate([`/adults/inner-boredom/${ibR}`])
        }
        else
          this.router.navigate([`/adults/inner-boredom/s56001`])
        
        /*if(!sinR)
        {
          
          this.router.navigate([`/adults/self-interest`])
        }
        else
          this.router.navigate([`/adults/self-interest/s${sinR}`])*/
  
      })
   
  }

  routeNatureOfI(cont: any = 1){
    var niR
    localStorage.setItem("moduleId",JSON.stringify(57))
    this.service.clickModule(57,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        niR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("niR",niR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
    
      
      if(cont=="1")
      {        
        this.router.navigate([`/adults/nature-of-i/${niR}`])
      }
      else
        this.router.navigate([`/adults/nature-of-i/s57001`])

    })
 
  }
  // /how the mind works
  
  // understand emotions
  routeFearAnxiety(cont: any = 1){
    var fearResume
    localStorage.setItem("moduleId",JSON.stringify(19))
    this.service.clickModule(19,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        fearResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("fearResume",fearResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/fear-anxiety/${fearResume}`])
      }
      else
      this.router.navigate([`/adults/fear-anxiety/s486`])
     /* if(!fearResume)
      {
        
        this.router.navigate([`/adults/fear-anxiety`])
      }
      else
        this.router.navigate([`/adults/fear-anxiety/s${fearResume}`])*/

    })

    
   

  }

  routePleasure(cont: any = 1){
    var pleasureResume
    localStorage.setItem("moduleId",JSON.stringify(20))
    this.service.clickModule(20,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        pleasureResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("pleasureResume",pleasureResume)
        this.mediaPercent=parseInt(res.MediaPercent)
       // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {      
        this.router.navigate([`/adults/pleasure/${pleasureResume}`])
      }
      else
       this.router.navigate([`/adults/pleasure/s20001`])
    })   

  }

  routeSorrowandLoss(cont: any = 1){
    var sorrowandlossResume
    localStorage.setItem("moduleId",JSON.stringify(60))
    this.service.clickModule(60,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sorrowandlossResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sorrowandlossResume",sorrowandlossResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/sorrow/${sorrowandlossResume}`])
      }
      else
        this.router.navigate([`/adults/sorrow/s60001`])
  
    })
  }

  routeLoneliness(cont: any = 1){
    var lonelinessResume
    localStorage.setItem("moduleId",JSON.stringify(61))
    this.service.clickModule(61,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lonelinessResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lonelinessResume",lonelinessResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/loneliness/${lonelinessResume}`])
      }
      else
        this.router.navigate([`/adults/loneliness/s61001`])
    /* if(!lonelinessResume)
      {
        
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeAnger(cont: any = 1){
    var angerResume
    localStorage.setItem("moduleId",JSON.stringify(14))
    this.service.clickModule(14,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        angerResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("angerResume",angerResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/anger/${angerResume}`])
      }
      else
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

  // living with wisdom 1
  routeStress(cont: any = 1){
    var stressResume
    localStorage.setItem("moduleId",JSON.stringify(44))
    this.service.clickModule(44,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        stressResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("stressResume",stressResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/stress/${stressResume}`])
      }
      else
        this.router.navigate([`/adults/stress/s44001`])
     /* if(!this.goToPage)
      {
        
        this.router.navigate([`/adults/stress`])
      }
      else
        this.router.navigate([`/adults/stress/s${stressResume}`])*/

    })
   
  }

  


  routeRelationships(cont: any = 1){
    var relationshipResume
    localStorage.setItem("moduleId",JSON.stringify(47))
    this.service.clickModule(47,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        relationshipResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("relationshipResume",relationshipResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/relationships/${relationshipResume}`])
      }
      else
      this.router.navigate([`/adults/relationships/s47000`])
     
    /*if(!relationshipResume)
      {
        
        this.router.navigate([`/adults/relationships`])
      }
      else
        this.router.navigate([`/adults/relationships/s${relationshipResume}`])*/

    })
  }

  routeLove(cont: any = 1){
    var loveResume
    localStorage.setItem("moduleId",JSON.stringify(62))
    this.service.clickModule(62,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        loveResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("loveResume",loveResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/love/${loveResume}`])
      }
      else
        this.router.navigate([`/adults/love/s62001`])
    /* if(!lonelinessResume)
      {
        
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeCriticism(cont: any = 1){
    var criticismResume
   localStorage.setItem("moduleId",JSON.stringify(16))
    this.service.clickModule(16,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        criticismResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("criticismResume",criticismResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/criticism/${criticismResume}`])
      }
      else
      this.router.navigate([`/adults/criticism/s324`])
     /*if(!criticismResume)
      {
        
        this.router.navigate([`/adults/criticism/s324`])
      }
      else
        this.router.navigate([`/adults/criticism/s${criticismResume}`])*/

    })
    
   
   
  }

  routeSelfEsteem(cont: any = 1){
    var sR
    localStorage.setItem("moduleId",JSON.stringify(17))
    this.service.clickModule(17,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        sR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("sR",sR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/self-esteem/${sR}`])
      }
      else
      this.router.navigate([`/adults/self-esteem/s433`])
     /* if(!this.goToPage)
      {
        
        this.router.navigate([`/adults/conditioning/s232`])
      }
      else
        this.router.navigate([`/adults/conditioning/s${this.goToPage}`])*/

    })

    
    

  }

  routeLivingWithPeace(cont: any = 1){
    var livingwithpeaceResume
    localStorage.setItem("moduleId",JSON.stringify(63))
    this.service.clickModule(63,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        livingwithpeaceResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("livingwithpeaceResume",livingwithpeaceResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/living-with-peace/${livingwithpeaceResume}`])
      }
      else
        this.router.navigate([`/adults/living-with-peace/s63001`])
    /* if(!lonelinessResume)
      {
        
        this.router.navigate([`/adults/loneliness/s162p0`])
      }
      else
        this.router.navigate([`/adults/loneliness/s${lonelinessResume}`])*/

    })
   
    
    
   
  }

  routeDealingWithDeath(cont: any = 1){
    var dealingwithdeathResume
    localStorage.setItem("moduleId",JSON.stringify(64))
    this.service.clickModule(64,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        dealingwithdeathResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("dealingwithdeathResume",dealingwithdeathResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/dealing-with-death/${dealingwithdeathResume}`])
      }
      else
        this.router.navigate([`/adults/dealing-with-death/s64001`])
  
    })
  }

  // /living with wisdom 1

  // living with wisdom 2
  routeHappiness(cont: any = 1){
    var hR
    localStorage.setItem("moduleId",JSON.stringify(23))
    this.service.clickModule(23,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        hR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("hR",hR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/happiness/${hR}`])
      }
      else
      this.router.navigate([`/adults/happiness/s23001`])
     /* if(!identityResume)
      {
        
        this.router.navigate([`/adults/identity`])
      }
      else
        this.router.navigate([`/adults/identity/s${identityResume}`])*/

    })
   
   
   
  }

  routeCommunication(cont: any = 1){
    var communicationR
     localStorage.setItem("moduleId",JSON.stringify(53))
     this.service.clickModule(53,this.userId)
     .subscribe(res=>
       {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
         this.qrList=res
         communicationR="s"+res.lastVisitedScreen
         this.goToPage=res.lastVisitedScreen         
          // continue where you left
          if(res.lastVisitedScreen ==='') 
          {
            localStorage.setItem("lastvisited", 'F')
          }
          else 
          {
            localStorage.setItem("lastvisited", 'T')
          }
          // /continue where you left
         sessionStorage.setItem("communicationR",communicationR)
         localStorage.setItem("qrList",JSON.stringify(this.qrList))
     },
     error=>{
       console.log(error)
     },
     ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/communication/${communicationR}`])
      }
       else
       this.router.navigate([`/adults/communication/s53001`])
      
      /* if(!communicationR)
       {
         
         this.router.navigate([`/adults/communication`])
       }
       else
         this.router.navigate([`/adults/communication/s${communicationR}`])*/
 
     })
 
     
     
 
  }

  routeOpinionsAndBeliefs(cont: any = 1){
    var opinionsandbeliefsResume
    localStorage.setItem("moduleId",JSON.stringify(49))
    this.service.clickModule(49,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        opinionsandbeliefsResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("opinionsandbeliefsResume",opinionsandbeliefsResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/opinions-beliefs/${opinionsandbeliefsResume}`])
      }
      else
        this.router.navigate([`/adults/opinions-beliefs/s49001`])
  
    })
  }
  
  routeSuccessAndFailure(cont: any = 1){
    var successandfailureResume
    localStorage.setItem("moduleId",JSON.stringify(48))
    this.service.clickModule(48,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        successandfailureResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("successandfailureResume",successandfailureResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/success-failure/${successandfailureResume}`])
      }
      else
        this.router.navigate([`/adults/success-failure/s48001`])
  
    })
  }
  
  routeAddiction(cont: any = 1){
    var addictionResume
    localStorage.setItem("moduleId",JSON.stringify(45))
    this.service.clickModule(45,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        addictionResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("addictionResume",addictionResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {       
        this.router.navigate([`/adults/habit-addiction/${addictionResume}`])
      }
      else
        this.router.navigate([`/adults/habit-addiction/s45001`])
  
    })
  }
  
  routeFood(cont: any = 1){
    var foodResume
    localStorage.setItem("moduleId",JSON.stringify(46))
    this.service.clickModule(46,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        foodResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("foodResume",foodResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/food-health/${foodResume}`])
      }
      else
        this.router.navigate([`/adults/food-health/s46001`])
  
    })
  }
  
  routeMoney(cont: any = 1){
    var moneyResume
    localStorage.setItem("moduleId",JSON.stringify(73))
    this.service.clickModule(73,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        moneyResume="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("moneyResume",moneyResume)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/money/${moneyResume}`])
      }
      else
        this.router.navigate([`/adults/money/s73001`])
  
    })
  }
 
  routeWork(cont: any = 1){
    var wR
    localStorage.setItem("moduleId",JSON.stringify(58))
    this.service.clickModule(58,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        wR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("wR",wR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/work/${wR}`])
      }
      else
        this.router.navigate([`/adults/work/s58001`])
  
    })
  
  }

  routeLeadership(cont: any = 1){
    var lR
    localStorage.setItem("moduleId",JSON.stringify(59))
    this.service.clickModule(59,this.userId)
    .subscribe(res=>
      {
        localStorage.setItem("wisdomstories", JSON.stringify(res['scenarios']))
        this.qrList=res
        lR="s"+res.lastVisitedScreen
        this.goToPage=res.lastVisitedScreen
        // continue where you left
        if(res.lastVisitedScreen ==='') 
        {
          localStorage.setItem("lastvisited", 'F')
        }
        else 
        {
          localStorage.setItem("lastvisited", 'T')
        }
        // /continue where you left
        sessionStorage.setItem("lR",lR)
        localStorage.setItem("qrList",JSON.stringify(this.qrList))
    },
    error=>{
      console.log(error)
    },
    ()=>{
      if(cont=="1")
      {        
        this.router.navigate([`/adults/leadership/${lR}`])
      }
      else
        this.router.navigate([`/adults/leadership/s59001`])
      
     
  
    })
  
  }
  // /living with wisdom 2 

}