import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s48050t',
  templateUrl: './s48050t.page.html',
  styleUrls: ['./s48050t.page.scss'],
})
export class S48050tPage implements OnInit {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w11"

  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/success-failure/s48050"
  toc="/success-failure/s48001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=48050
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration48050")
  totalTime=localStorage.getItem("totalTime48050")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark48050"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark48050"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark48050",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/success-failure/s48051'])
    if (this.userId === 563) return;

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
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/adults/success-failure/s48049'])
  }


}
