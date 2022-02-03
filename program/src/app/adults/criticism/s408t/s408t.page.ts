import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s408t',
  templateUrl: './s408t.page.html',
  styleUrls: ['./s408t.page.scss'],
})
export class S408tPage implements OnInit {

  bg="criticism_w3" 
  
  bookmark=0
  path=this.router.url
  audioPage="/criticism/s408"
  toc="/criticism/s324"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=408
  startTime:any
  endTime:any
  
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration408")
  totalTime=localStorage.getItem("totalTime408")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark408"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark408"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark408",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/criticism/s409'])
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
    this.router.navigate(['/criticism/s407'])
  }
  

}

