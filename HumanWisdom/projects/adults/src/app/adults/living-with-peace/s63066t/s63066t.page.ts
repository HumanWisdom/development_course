import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s63066t',
  templateUrl: './s63066t.page.html',
  styleUrls: ['./s63066t.page.scss'],
})
export class S63066tPage implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w3"
  bookmark=0
  path=this.router.url
  audioPage="/living-with-peace/s63066"
  toc="living-with-peace/s63001"

  avDuration=localStorage.getItem("avDuration63066")
  totalTime=localStorage.getItem("totalTime63066")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=63066
 
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
 
    if(JSON.parse(sessionStorage.getItem("bookmark63066"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark63066"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark63066",JSON.stringify(this.bookmark))
  }
  submitProgress(){
 
    this.router.navigate(['/adults/living-with-peace/s63067'])
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
    
  }
  prev(){
    this.router.navigate(['/adults/living-with-peace/s63065'])
  }
}
