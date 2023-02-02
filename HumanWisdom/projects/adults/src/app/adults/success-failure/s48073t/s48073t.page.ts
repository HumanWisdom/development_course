import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s48073t',
  templateUrl: './s48073t.page.html',
  styleUrls: ['./s48073t.page.scss'],
})
export class S48073tPage implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w4"

  bookmark=0
  path=this.router.url
  audioPage="/success-failure/s48073"
  toc="/success-failure/s48001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=48073
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration48073")
  totalTime=localStorage.getItem("totalTime48073")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark48073"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark48073"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark48073",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/success-failure/s48074'])
    if (this.userId === 563) return;

    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>
      {
        
      })
 
    
  }
  prev(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/success-failure/s48072'])
  }


}
