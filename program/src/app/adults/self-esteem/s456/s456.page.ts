import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s456',
  templateUrl: './s456.page.html',
  styleUrls: ['./s456.page.scss'],
})
export class S456Page implements OnInit {
  
  bg="teal_flat"  
  toc="self-esteem/s433"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=456
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    console.log(this.bookmarkList)
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark456")))
    if(JSON.parse(sessionStorage.getItem("bookmark456"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark456"))==1)
      this.bookmark=1
   
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
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark456",JSON.stringify(this.bookmark))
  }


  submitProgress(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/self-esteem/s457'])
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
        // this.router.navigate(['/self-esteem/s457'])
      })
     

  }

  goNext(){

  }

  ngOnDestroy(){
    



  }




}
