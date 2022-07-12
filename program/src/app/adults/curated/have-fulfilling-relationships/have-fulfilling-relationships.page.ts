import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-have-fulfilling-relationships',
  templateUrl: './have-fulfilling-relationships.page.html',
  styleUrls: ['./have-fulfilling-relationships.page.scss'],
})
export class HaveFulfillingRelationshipsPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  relationshipsP:any
  enP:any
  rmP:any
  communicationP:any
  loveP:any
  opinionsandbeliefsP:any
  lifestoriesList = []
  sId:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    localStorage.setItem('curated', 'relationships');
    let rem = localStorage.getItem('remember');
    if(!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedrelationshipdashstories().subscribe((res) => {
      if(res) {
        this.lifestoriesList = res
      }
   })
  }

  goBack(){
    this.location.back()
  }
  routeGuided(){
    this.router.navigate(['/adults/journal'], { queryParams: { "isGuided": true } })
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
    localStorage.setItem("story",JSON.stringify(obj))
    let res = localStorage.getItem("isloggedin");
    this.sId=obj.ScenarioID
    if(res && res === 'T') {
      this.service.clickStory(obj.ScenarioID).subscribe(res=>{
        
        this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
      })
    }  else {
      this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${this.sId}`}})
    }
    
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
     this.relationshipsP=res.ModUserScrPc.find(e=>e.Module=="Relationships")?.Percentage
     this.enP=res.ModUserScrPc.find(e=>e.Module=="Emotional Needs")?.Percentage
     this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind")?.Percentage
     this.communicationP=res.ModUserScrPc.find(e=>e.Module=="Communication")?.Percentage
     this.loveP=res.ModUserScrPc.find(e=>e.Module=="Love")?.Percentage
     this.opinionsandbeliefsP=res.ModUserScrPc.find(e=>e.Module=="Opinions And Beliefs")?.Percentage
    })
  }
}
