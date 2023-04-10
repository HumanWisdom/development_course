import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s100005t',
  templateUrl: './s100005t.page.html',
  styleUrls: ['./s100005t.page.scss'],
})
export class S100005tPage implements OnInit {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w3"
  bookmark=0
  path=this.router.url
  audioPage="/awareness/s100005"
  toc="awareness/s100001"

  avDuration=localStorage.getItem("avDuration100005")
  totalTime=localStorage.getItem("totalTime100005")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=100005
  progName="teenagers"
 
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark100005"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark100005"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark100005",JSON.stringify(this.bookmark))
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
 
    this.router.navigate(['/awareness/s100006'])
  }
  prev(){
    this.router.navigate(['/awareness/s100004'])
  }
}
