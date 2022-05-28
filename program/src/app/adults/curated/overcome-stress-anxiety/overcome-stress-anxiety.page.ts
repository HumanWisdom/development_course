import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-overcome-stress-anxiety',
  templateUrl: './overcome-stress-anxiety.page.html',
  styleUrls: ['./overcome-stress-anxiety.page.scss'],
})
export class OvercomeStressAnxietyPage implements OnInit {
  userId=100
  qrList:any
  goToPage:any
  breathingP:any
  stressP:any
  fearP:any
  natureP:any
  rmP:any
  lifestoriesList = []
  sId:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    let rem = localStorage.getItem('remember');
    if(!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedstressdashstories().subscribe((res) => {
      if(res) {
        this.lifestoriesList = res
      }
   })
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

  goBack(){
    this.location.back()
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
       this.fearP=res.ModUserScrPc.find(e=>e.Module=="Fear & Anxiety")?.Percentage
       this.stressP=res.ModUserScrPc.find(e=>e.Module=="Stress")?.Percentage
       this.natureP=res.ModUserScrPc.find(e=>e.Module=="Nature")?.Percentage
       this.breathingP=res.ModUserScrPc.find(e=>e.Module=="Breathing")?.Percentage
       this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind")?.Percentage   
      })
    }
  
}
