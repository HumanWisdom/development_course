import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s58079',
  templateUrl: './s58079.page.html',
  styleUrls: ['./s58079.page.scss'],
})
export class S58079Page implements OnInit {


  bg="dark_blue_w6"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=58079
  startTime:any
  endTime:any
  totalTime:any
  
  

  bookmark=0
  toc="work/s58001"
  path=this.router.url
  

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
  
    this.startTime = Date.now();
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark58079")))
    if(JSON.parse(sessionStorage.getItem("bookmark58079"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark58079"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark58079",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/work/s58080'])
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
        //this.router.navigate(['/adults/conditioning/s58079'])
      })
     
    

  }
  prev(){
    this.router.navigate(['/adults/work/s58078'])

  }
  

  goNext(){
   // this.router.navigate(['/adults/work/s58079'])
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    
    this.submitProgress()

  }

  ngOnDestroy(){
    



  }

}
