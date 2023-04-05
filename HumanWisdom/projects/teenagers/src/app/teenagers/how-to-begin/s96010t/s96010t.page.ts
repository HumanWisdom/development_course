import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s96010t',
  templateUrl: './s96010t.page.html',
  styleUrls: ['./s96010t.page.scss'],
})
export class S96010tPage implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w8"

  bookmark=0
  path=this.router.url
  audioPage="/how-to-begin/s96010"
  toc="how-to-begin/s96001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=96010
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  moduleName="teenagers"

  
 
  
  avDuration=localStorage.getItem("avDuration96010")
  totalTime=localStorage.getItem("totalTime96010")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark96010"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark96010"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark96010",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/how-to-begin/s96011'])
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
    this.router.navigate(['/how-to-begin/s96009'])
  }


}
