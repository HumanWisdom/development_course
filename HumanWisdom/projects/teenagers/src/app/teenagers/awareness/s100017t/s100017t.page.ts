import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s100017t',
  templateUrl: './s100017t.page.html',
  styleUrls: ['./s100017t.page.scss'],
})
export class S100017tPage implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w3"

  bookmark=0
  path=this.router.url
  audioPage="/awareness/s100017"
  toc="awareness/s100000"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=100017
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  progName="teenagers"
  
 
  
  avDuration=localStorage.getItem("avDuration100017")
  totalTime=localStorage.getItem("totalTime100017")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark100017"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark100017"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark100017",JSON.stringify(this.bookmark))
  }
  submitProgress(){

    this.router.navigate(['/awareness/s100018'])
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
    this.router.navigate(['/awareness/s100016'])
  }


}
