import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s45056',
  templateUrl: './s45056.page.html',
  styleUrls: ['./s45056.page.scss'],
})
export class S45056Page implements OnInit,OnDestroy {

  bg_tts = "bg_purple"
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=45056
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="habit-addiction/s45001"
  path=this.router.url
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  

  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  
 
  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }
 ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
  
  
    this.startTime = Date.now();
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark45056")))
    if(JSON.parse(sessionStorage.getItem("bookmark45056"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark45056"))==45056)
      this.bookmark=45056
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=45056
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark45056",JSON.stringify(this.bookmark))
  }
createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
    
 
  }
  submitProgress(){
    this.router.navigate(['/adults/habit-addiction/s45057'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/adults/conditioning/s234'])
      })
    
    

  }

  goNext(){
   // this.router.navigate(['/adults/habit-addiction/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    
    this.submitProgress()

  }

  ngOnDestroy(){
    



  }

}
