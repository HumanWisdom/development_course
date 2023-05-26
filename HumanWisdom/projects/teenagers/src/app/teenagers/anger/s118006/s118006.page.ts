import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s118006',
  templateUrl: './s118006.page.html',
  styleUrls: ['./s118006.page.scss'],
})
export class S118006Page implements OnInit,OnDestroy {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="anger_overlay_footer"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=118006
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="anger/s118001"
  path=this.router.url
  

  constructor(
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) { }

  ngOnInit() {
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
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
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

  }
  createScreen(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
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
    this.router.navigate(['/anger/s118007'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
      })

  }
  prev(){
    this.router.navigate(['/anger/s118005'])
    
  }

  ngOnDestroy(){
  }

}
