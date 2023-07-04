import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';


@Component({
  selector: 'app-s130004t',
  templateUrl: './s130004t.page.html',
  styleUrls: ['./s130004t.page.scss'],
})
export class S130004tPage implements OnInit {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w1" 
  
  bookmark=0
  path=this.router.url
  audioPage="/dealing-with-death/s130004"
  toc="/dealing-with-death/s130001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=130004
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername")) 
  
  avDuration=localStorage.getItem("avDuration130004")
  totalTime=localStorage.getItem("totalTime130004")
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
    if(JSON.parse(sessionStorage.getItem("bookmark130004"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark130004"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark130004",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/dealing-with-death/s130005'])
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
    this.router.navigate(['/dealing-with-death/s130003'])
  }

}