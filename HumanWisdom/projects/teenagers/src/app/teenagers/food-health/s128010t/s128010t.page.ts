import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-s128010t',
  templateUrl: './s128010t.page.html',
  styleUrls: ['./s128010t.page.scss'],
})
export class S128010tPage implements OnInit {
  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="green_w1"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/food-health/s128010"
  toc="/food-health/s128001"
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=128010
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration128010")
  totalTime=localStorage.getItem("totalTime128010")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName = "teenagers"
  
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
    if(JSON.parse(sessionStorage.getItem("bookmark128010"))==0)
    this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark128010"))==1)
      this.bookmark=1
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark128010",JSON.stringify(this.bookmark))
  }

  submitProgress()
  {
    this.router.navigate(['/food-health/s128011'])
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
    this.router.navigate(['/food-health/s128009'])
  }


}
