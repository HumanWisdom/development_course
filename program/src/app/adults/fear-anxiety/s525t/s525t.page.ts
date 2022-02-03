import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s525t',
  templateUrl: './s525t.page.html',
  styleUrls: ['./s525t.page.scss'],
})
export class S525tPage implements OnInit {

  bg="purple_red_w1" 
  
  bookmark=0
  path=this.router.url
  audioPage="/fear-anxiety/s525"
  toc="/fear-anxiety/s486"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=525
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
  
  avDuration=localStorage.getItem("avDuration525")
  totalTime=localStorage.getItem("totalTime525")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark525"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark525"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark525",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/fear-anxiety/s526'])
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
    this.router.navigate(['/fear-anxiety/s524'])
  }
  

}
