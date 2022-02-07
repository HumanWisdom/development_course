import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59099t',
  templateUrl: './s59099t.page.html',
  styleUrls: ['./s59099t.page.scss'],
})
export class S59099tPage implements OnInit {

  bg="blue_w12"

  bookmark=0
  path=this.router.url
  audioPage="/leadership/s59099"
  toc="/leadership/s59001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=59099
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration59099")
  totalTime=localStorage.getItem("totalTime59099")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark59099"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark59099"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark59099",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/leadership/s59100'])
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
    this.router.navigate(['/leadership/s59098'])
  }


}
