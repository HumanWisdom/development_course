import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-change-unhelpful-habits',
  templateUrl: './change-unhelpful-habits.page.html',
  styleUrls: ['./change-unhelpful-habits.page.scss'],
})
export class ChangeUnhelpfulHabitsPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  addictionP:any
  pleasureP:any
  conditioningP:any
  stressP:any
  foodP:any

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
     this.addictionP=res.ModUserScrPc.find(e=>e.Module=="Addiction")?.Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure")?.Percentage
     this.conditioningP=res.ModUserScrPc.find(e=>e.Module=="Conditioning")?.Percentage  
     this.stressP=res.ModUserScrPc.find(e=>e.Module=="Stress")?.Percentage
     this.foodP=res.ModUserScrPc.find(e=>e.Module=="Food")?.Percentage
    })
  }
  
}
