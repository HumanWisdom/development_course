import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47104',
  templateUrl: './s47104.page.html',
  styleUrls: ['./s47104.page.scss'],
})
export class S47104Page implements OnInit,OnDestroy {

  bg="purple_flat"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=47104
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="relationships/s47000"
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
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark47104")))
    if(JSON.parse(sessionStorage.getItem("bookmark47104"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark47104"))==47104)
      this.bookmark=47104
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=47104
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark47104",JSON.stringify(this.bookmark))
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
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      },
      error=>{console.log(error)},
      ()=>{
        //this.router.navigate(['/conditioning/s234'])
      })
      this.router.navigate(['/relationships/s47105'])
    

  }

  goNext(){
   // this.router.navigate(['/relationships/s2'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    //console.log(this.totalTime,"total time")
    this.submitProgress()

  }

  ngOnDestroy(){
    



  }

}
