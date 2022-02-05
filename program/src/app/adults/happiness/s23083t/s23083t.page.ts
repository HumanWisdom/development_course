import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s23083t',
  templateUrl: './s23083t.page.html',
  styleUrls: ['./s23083t.page.scss'],
})
export class S23083tPage implements OnInit {

  bg="red_pink_w4"
  bookmark=0
  path=this.router.url
  audioPage="/happiness/s23083"
  toc="/happiness/s23001"

  avDuration=localStorage.getItem("avDuration23083")
  totalTime=localStorage.getItem("totalTime23083")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=23083
 
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
 
    if(JSON.parse(sessionStorage.getItem("bookmark23083"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark23083"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark23083",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/happiness/s23084'])
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
        console.log(res)
      })
 
     
  }
  prev(){
    this.router.navigate(['/happiness/s23082'])
  }
}
