import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s76007',
  templateUrl: './s76007.page.html',
  styleUrls: ['./s76007.page.scss'],
})
export class S76007Page implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w5" 
  
  toc="bullying/s76001"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=76007
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
 
  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }

  ngOnInit() 
  {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
    this.startTime = Date.now();
    
    if(JSON.parse(sessionStorage.getItem("bookmark76007"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark76007"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark76007",JSON.stringify(this.bookmark))
  }

  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
  }

  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/bullying/s76008'])
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
        
      })
  }

  prev()
  {
    this.router.navigate(['/adults/bullying/s76006'])
  }

  ngOnDestroy()
  {}
}