import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router,ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s232',
  templateUrl: './s232.page.html',
  styleUrls: ['./s232.page.scss'],
})
export class S232Page implements OnInit,OnDestroy {
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=232
  startTime:any
  endTime:any
  totalTime:any
  bookmark:any
  bookmarkList=[]
  path=this.router.url
  
 
  token="1234"
  shareUrl=this.path+"?t="+this.token
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
  socialShare=false
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any
  conditioningResume=sessionStorage.getItem("conditioningResume")
  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
  tocColor="white"
  lastvisited = false;

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location,
    private url: ActivatedRoute
  ) { 
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
     
  }

  ngOnInit() {
    // continue where you left    
    let last = localStorage.getItem('lastvisited');
    if(last === 'T') 
    {
      this.lastvisited = true;
    }
    else 
    {
      this.lastvisited = false;
    }    
    // /continue where you left

    console.log(this.shareUrl,this.loginResponse)
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(!this.t) //if no token in url- not shared
    {
     
      if(this.loginResponse.Subscriber!=1 && !this.freeScreens.includes(this.screenNumber))
        console.log("move")

    }
    else{
      console.log("show")

    }
     
   
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    this.createScreen()
    
    


    
  }
  addToken(){
    history.replaceState(null, null, this.path+`?t=${this.token}`);
    this.socialShare=true
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

  }
  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        console.log(res)
      })
    

  }
  goBack(){
    this.location.back()
  }


  submitProgress(){
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        console.log(res)
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        
      })
    

  }
  ngOnDestroy(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    //console.log(this.totalTime,"total time")
    this.submitProgress()



  }

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }

}
