import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s171t',
  templateUrl: './s171t.page.html',
  styleUrls: ['./s171t.page.scss'],
})
export class S171tPage implements OnInit {

  bg="anger_w9" 

  bookmark=0
  path=this.router.url
  audioPage="/anger/s171"
  toc="/anger/s162p0"
  
  screenType=localStorage.getItem("audio")
avDuration:any
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=171
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }


  ngOnInit() {
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
  submitProgress(){
    this.router.navigate(['/adults/anger/s172'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":0,
       "avDuration":this.avDuration
    }).subscribe(res=>
      {
        
      })

    // this.router.navigate(['/adults/anger/s172'])
  }
  previous(){
    this.router.navigate(['/adults/anger/s170'])
  }

}
