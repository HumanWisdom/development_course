import { Component, OnInit ,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s53080t',
  templateUrl: './s53080t.page.html',
  styleUrls: ['./s53080t.page.scss'],
})
export class S53080tPage implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w7"

  bookmark=0
  path=this.router.url
  audioPage="/communication/s53080"
  toc="/communication/s53001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=53080
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration53080")
  totalTime=localStorage.getItem("totalTime53080")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    ) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark53080"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark53080"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark53080",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/adults/communication/s53081'])
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
    this.router.navigate(['/adults/communication/s53079'])
  }

}