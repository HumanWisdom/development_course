import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s134018',
  templateUrl: './s134018.page.html',
  styleUrls: ['./s134018.page.scss'],
})

export class S134018Page implements OnInit,OnDestroy 
{
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_overlay_footer"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=134018
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="/love/s134001"
  path=this.router.url
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }

  ngOnInit() 
  {
    this.createScreen()
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
  }

  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
  }

  toggleBookmark()
  {
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0
  }

  createScreen()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>{})
  }

  submitProgress()
  {
    this.router.navigate(['/love/s134019'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>{})
    // this.router.navigate(['/love/s134019'])
  }

  previous()
  {
    this.router.navigate(['/love/s134017'])
  }

  ngOnDestroy()
  {}

}