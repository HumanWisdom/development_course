import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s59077t',
  templateUrl: './s59077t.page.html',
  styleUrls: ['./s59077t.page.scss'],
})
export class S59077tPage implements OnInit {

  bg="blue_w2"

  bookmark=0
  path=this.router.url
  audioPage="/leadership/s59077"
  toc="/leadership/s59001"
  
  screenType=localStorage.getItem("audio")
  userId:any
  
  moduleId=localStorage.getItem("moduleId")
  screenNumber=59077
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  avDuration=localStorage.getItem("avDuration59077")
  totalTime=localStorage.getItem("totalTime59077")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark59077"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark59077"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark59077",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/leadership/s59078'])
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
    this.router.navigate(['/leadership/s59076'])
  }


}
