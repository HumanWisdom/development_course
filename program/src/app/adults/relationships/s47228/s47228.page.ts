import { Component, OnInit, OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s47228',
  templateUrl: './s47228.page.html',
  styleUrls: ['./s47228.page.scss'],
})
export class S47228Page implements OnInit,OnDestroy {

  bg="red_pink_overlay_footer"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("text")
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=47228
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  toc="/relationships/s47000"
  path=this.router.url
  

  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }

  ngOnInit() {
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
   


    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
  }
  toggleBookmark(){
    if(this.bookmark==0)
      this.bookmark=1
    else
      this.bookmark=0

  }
  createScreen(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        console.log(res)
      })
    

  }


  submitProgress(){
    this.router.navigate(['/relationships/s47229'])
    this.service.submitProgressText({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime
    }).subscribe(res=>
      {
        console.log(res)
      })
    
    

  }
  prev(){
    this.router.navigate(['/relationships/s47227'])
    
  }

  ngOnDestroy(){
   



  }

}
