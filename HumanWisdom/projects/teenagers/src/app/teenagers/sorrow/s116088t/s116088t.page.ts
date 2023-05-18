import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116088t',
  templateUrl: './s116088t.page.html',
  styleUrls: ['./s116088t.page.scss'],
})
export class S116088tPage implements OnInit {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w11"

  bookmark=0
  path=this.router.url
  audioPage="/sorrow/s116088"
  toc="/sorrow/s116001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=116088
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  avDuration=localStorage.getItem("avDuration116088")
  totalTime=localStorage.getItem("totalTime116088")
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
    if(JSON.parse(sessionStorage.getItem("bookmark116088"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark116088"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark116088",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/sorrow/s116089'])
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
    this.router.navigate(['/sorrow/s116087'])
  }

}