import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-be-happier',
  templateUrl: './be-happier.page.html',
  styleUrls: ['./be-happier.page.scss'],
})
export class BeHappierPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  happinessP:any
  livingwithpeaceP:any
  pleasureP:any
  ibP:any
  comparisonP:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    localStorage.setItem('curated', 'happier');
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

  s3video(link) {
    this.router.navigate(['/adults/wisdom-shorts', link])
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
        // this.mediaPercent=parseInt(res.MediaPercent)
        // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        // localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        // localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
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
        // this.mediaPercent=parseInt(res.MediaPercent)
        // this.freeScreens=res.FreeScrs.map(a => a.ScrNo);
        // localStorage.setItem("freeScreens",JSON.stringify(this.freeScreens))
        // localStorage.setItem("mediaPercent",JSON.parse(this.mediaPercent))
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
     this.happinessP=res.ModUserScrPc.find(e=>e.Module=="Happiness")?.Percentage
     this.livingwithpeaceP=res.ModUserScrPc.find(e=>e.Module=="Living With Peace")?.Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure")?.Percentage
     this.ibP=res.ModUserScrPc.find(e=>e.Module=="Inner Boredom")?.Percentage
     this.comparisonP=res.ModUserScrPc.find(e=>e.Module=="Comparison")?.Percentage
    })
  }

}
