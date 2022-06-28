import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-deal-with-sorrow-loss',
  templateUrl: './deal-with-sorrow-loss.page.html',
  styleUrls: ['./deal-with-sorrow-loss.page.scss'],
})

export class DealWithSorrowLossPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  sorrowandlossP:any
  dealingwithdeathP:any
  enP:any
  withoutLanguageP:any
  breathingP:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    localStorage.setItem('curated', 'sorrow');
    let rem = localStorage.getItem('remember');
    if(!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
  }

  goBack(){
    this.location.back()
  }

  youtube(link) {
    this.router.navigate(['/adults/curated/youtubelink', link])
  }

  audiopage(audiofile, title) {
    let mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    let audioLink= mediaAudio+audiofile
    this.router.navigate(['/adults/curated/audiopage', audioLink, title])
  }

  toRead(obj){
    let sId= obj;
    this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${sId}`}})
  }

  getsupport(url, id, ind = 0) {
    let index = ind + 1
    url = url === '/adults/get-support-now/s7100' ? '/adults/get-support-now/s7100' + index : url
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

  getProgress(){
    this.service.getPoints(this.userId)
    .subscribe(res=>{

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
          }
        }
      })
    
     //static progress
     this.sorrowandlossP=res.ModUserScrPc.find(e=>e.Module=="Sorrow And Loss")?.Percentage    
     this.dealingwithdeathP=res.ModUserScrPc.find(e=>e.Module=="Dealing With Death")?.Percentage
     this.enP=res.ModUserScrPc.find(e=>e.Module=="Emotional Needs")?.Percentage
     this.withoutLanguageP=res.ModUserScrPc.find(e=>e.Module=="Look without Language")?.Percentage
     this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing")?.Percentage
    })
  }

}
