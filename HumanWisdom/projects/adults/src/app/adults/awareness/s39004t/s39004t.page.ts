import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s39004t',
  templateUrl: './s39004t.page.html',
  styleUrls: ['./s39004t.page.scss'],
})
export class S39004tPage implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w3"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/awareness/s39004"
  toc="awareness/s39000"

  avDuration=localStorage.getItem("avDuration39004")
  totalTime=localStorage.getItem("totalTime39004")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=39004
 
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark39004"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark39004"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark39004",JSON.stringify(this.bookmark))
  }
  submitProgress(){
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
 
    this.router.navigate(['/adults/awareness/s39005'])
  }
  prev(){
    this.router.navigate(['/adults/awareness/s39003'])
  }
}
