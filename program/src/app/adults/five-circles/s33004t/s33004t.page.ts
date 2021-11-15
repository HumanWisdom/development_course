import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s33004t',
  templateUrl: './s33004t.page.html',
  styleUrls: ['./s33004t.page.scss'],
})
export class S33004tPage implements OnInit {

  bg="purple_blue_w2"  

  bookmark=0
  path=this.router.url
  audioPage="/five-circles/s33004"
  toc="five-circles/s33001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=33004
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
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":0,
      "avDuration":0
    }).subscribe(res=>
      {
        console.log(res)
      })

    this.router.navigate(['/five-circles/s33005'])
  }
  previous(){
    this.router.navigate(['/five-circles/s33003'])
  }

}
