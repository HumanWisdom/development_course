import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-manage-your-emotions',
  templateUrl: './manage-your-emotions.page.html',
  styleUrls: ['./manage-your-emotions.page.scss'],
})
export class ManageYourEmotionsPage implements OnInit {

  userId=100
  qrList:any
  goToPage:any
  angerP:any
  rmP:any
  pleasureP:any
  addictionP:any
  comparisonP:any
  lonelinessP:any
  lifestoriesList = []
  sId:any

  constructor(private service: AdultsService, private router: Router,private location:Location) { }

  ngOnInit() {
    localStorage.setItem('curated', 'emotions');
    let rem = localStorage.getItem('remember');
    if(!rem || rem === 'F' && localStorage.getItem("isloggedin") === 'T') {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }

    this.service.getcuratedemotionsdashstories().subscribe((res) => {
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
     this.angerP=res.ModUserScrPc.find(e=>e.Module=="Anger")?.Percentage
     this.rmP=res.ModUserScrPc.find(e=>e.Module=="Reactive Mind")?.Percentage
     this.pleasureP=res.ModUserScrPc.find(e=>e.Module=="Pleasure")?.Percentage
     this.addictionP=res.ModUserScrPc.find(e=>e.Module=="Addiction")?.Percentage
     this.comparisonP=res.ModUserScrPc.find(e=>e.Module=="Comparison")?.Percentage
     this.lonelinessP=res.ModUserScrPc.find(e=>e.Module=="Loneliness")?.Percentage
    })
  }

}
