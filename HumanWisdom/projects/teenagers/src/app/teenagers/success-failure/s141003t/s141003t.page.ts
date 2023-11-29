import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s141003t',
  templateUrl: './s141003t.page.html',
  styleUrls: ['./s141003t.page.scss'],
})
export class S141003tPage implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w1"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/success-failure/s141003"
  toc="success-failure/s141001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=141003
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  progName= "teenagers";
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }


  ngOnInit() {
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
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['success-failure/s141004'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":0,
      "avDuration":0
    }).subscribe(res=>
      {
        
      })

   
  }
  previous(){
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/success-failure/s141002'])
  }

}
