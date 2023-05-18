import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';


@Component({
  selector: 'app-s104029',
  templateUrl: './s104029.page.html',
  styleUrls: ['./s104029.page.scss'],
})
export class S104029Page implements OnInit,OnDestroy {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w1"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=104029
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="obstacles-enquiry/s104001"
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
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/obstacles-enquiry/s104028'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        
      }
      )
   
     
    

  }
  prev(){
    debugger
    this.router.navigate(['/obstacles-enquiry/s104028'])
    
  }
  ngOnDestroy(){
   

  }


}
