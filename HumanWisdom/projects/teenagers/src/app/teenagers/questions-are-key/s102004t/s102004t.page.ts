import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s102004t',
  templateUrl: './s102004t.page.html',
  styleUrls: ['./s102004t.page.scss'],
})
export class S102004tPage implements OnInit {

  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w2"
  bookmark=0
  path=this.router.url
  audioPage="questions-are-key/s102004"
  toc="questions-are-key/s102001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=102004
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration102004")
  totalTime=localStorage.getItem("totalTime102004")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName="teenagers"
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    if(JSON.parse(sessionStorage.getItem("bookmark102004"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark102004"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark102004",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/questions-are-key/s102005'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>{})
  }

  prev()
  {
    this.router.navigate(['/questions-are-key/s102003'])
  }

}