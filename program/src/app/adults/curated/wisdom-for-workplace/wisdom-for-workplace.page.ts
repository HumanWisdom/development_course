import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
@Component({
  selector: 'HumanWisdom-wisdom-for-workplace',
  templateUrl: './wisdom-for-workplace.page.html',
  styleUrls: ['./wisdom-for-workplace.page.scss'],
})

export class WisdomForWorkplacePage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  wP:any
  lP:any
  communicationP:any
  successandfailureP:any
  relationshipsP:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    localStorage.setItem('curated', 'T');
    let rem = localStorage.getItem('remember');
    if(!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
  }

  goBack(){
    this.location.back()
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

  toRead(obj){
    let sId= obj;
    this.router.navigate(['/wisdom-stories/view-stories'],{ queryParams: {sId: `${sId}`}})
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
     this.wP=res.ModUserScrPc.find(e=>e.Module=="Work")?.Percentage
     this.lP=res.ModUserScrPc.find(e=>e.Module=="Leadership")?.Percentage 
     this.communicationP=res.ModUserScrPc.find(e=>e.Module=="Communication")?.Percentage
     this.successandfailureP=res.ModUserScrPc.find(e=>e.Module=="Success And Failure")?.Percentage
     this.relationshipsP=res.ModUserScrPc.find(e=>e.Module=="Relationships")?.Percentage
    })
  }
}