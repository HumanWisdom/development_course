import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s37007t',
  templateUrl: './s37007t.page.html',
  styleUrls: ['./s37007t.page.scss'],
})
export class S37007tPage implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="pink_orange_w6"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/three-steps-enquiry/s37007"
  toc="three-steps-enquiry/s37000"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=37007
  startTime:any
  endTime:any
  totalTime:any
  
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration37007")
  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    this.totalTime=localStorage.getItem("totalTime37007")
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark37007"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark37007"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark37007",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/three-steps-enquiry/s37008'])
    if (this.userId !== 563){
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
   
  }
  prev(){
    this.router.navigate(['/adults/three-steps-enquiry/s37006'])
  }


}
