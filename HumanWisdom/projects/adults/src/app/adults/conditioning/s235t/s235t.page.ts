import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

import {Location } from '@angular/common'

@Component({
  selector: 'app-s235t',
  templateUrl: './s235t.page.html',
  styleUrls: ['./s235t.page.scss'],
})
export class S235tPage implements OnInit {

  bg_tn="bg_pink_orange"
  bg_cft="bg_pink_orange"
  bg="conditioning_w2"

  bookmark=0
 path :any;
  audioPage="/conditioning/s235"
  toc="/conditioning/s232"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=235
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration235")
  totalTime=localStorage.getItem("totalTime235")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    ) {
      this.path = this.router.url;
     }
 
 
  ngOnInit() {
    console.log("bm5",JSON.parse(sessionStorage.getItem("bookmark235")))
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark235"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark235"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark235",JSON.stringify(this.bookmark))
  }
  submitProgress(){
   this.router.navigate(['/adults/conditioning/s236'])
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
   
    this.router.navigate(['/adults/conditioning/s234'])
  }

}
