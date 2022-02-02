import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s238t',
  templateUrl: './s238t.page.html',
  styleUrls: ['./s238t.page.scss'],
})
export class S238tPage implements OnInit {

  bg="conditioning_w5"
  path=this.router.url
  audioPage="/conditioning/s238"
  toc="/conditioning/s232"
  bookmark=0

  avDuration=localStorage.getItem("avDuration238")
  totalTime=localStorage.getItem("totalTime238")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=238
 
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
 
    if(JSON.parse(sessionStorage.getItem("bookmark238"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark238"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark238",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/conditioning/s239'])
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
    this.router.navigate(['/conditioning/s237'])
  }
}
