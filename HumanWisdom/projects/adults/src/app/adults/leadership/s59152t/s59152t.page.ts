import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59152t',
  templateUrl: './s59152t.page.html',
  styleUrls: ['./s59152t.page.scss'],
})
export class S59152tPage implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w7"

  bookmark=0
  path=this.router.url
  audioPage="/leadership/s59152"
  toc="/leadership/s59001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=59152
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration59152")
  totalTime=localStorage.getItem("totalTime59152")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark59152"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark59152"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark59152",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/leadership/s59153'])
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
    this.router.navigate(['/adults/leadership/s59151'])
  }


}
