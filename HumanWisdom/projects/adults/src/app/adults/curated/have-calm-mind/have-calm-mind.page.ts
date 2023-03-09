import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-have-calm-mind',
  templateUrl: './have-calm-mind.page.html',
  styleUrls: ['./have-calm-mind.page.scss'],
})

export class HaveCalmMindPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  natureP:any
  breathingP:any
  ntP:any
  gamP:any
  meditationP:any
  withoutLanguageP:any

  constructor(private service: AdultsService, private router: Router,private location:Location, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Mindfulness Practices for a Calm Mind')
    this.meta.updateTag({ property: 'title', content: 'Mindfulness Practices for a Calm Mind' })
    this.meta.updateTag({ property: 'description', content: 'Learn effective mindfulness practices for calming the mind and reducing stress. Discover relaxation techniques and self-care tips for anxiety and mental clarity.' })
    this.meta.updateTag({ property: 'keywords', content: 'Mindfulness practices,Calming techniques,Mental clarity,Meditation for calmness,Stress-free living,Inner peace tips,Relaxation techniques' })


    localStorage.setItem('curated', 'mind');
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
     this.natureP=res.ModUserScrPc.find(e=>e.Module=="Nature")?.Percentage
     this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing")?.Percentage
     this.ntP=res.ModUserScrPc.find(e=>e.Module=="Noticing Thoughts")?.Percentage
     this.gamP=res.ModUserScrPc.find(e=>e.Module=="Guided Audio Meditation")?.Percentage
     this.meditationP=res.ModUserScrPc.find(e=>e.Module=="Meditation")?.Percentage
     this.withoutLanguageP=res.ModUserScrPc.find(e=>e.Module=="Look without Language")?.Percentage
    })
  }

}
