import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s488t',
  templateUrl: './s488t.page.html',
  styleUrls: ['./s488t.page.scss'],
})
export class S488tPage implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w1" 
  
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  audioPage="/fear-anxiety/s488"
  toc="/fear-anxiety/s486"
  
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=488
  startTime:any
  endTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  
 
  
  avDuration=localStorage.getItem("avDuration488")
  totalTime=localStorage.getItem("totalTime488")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
 
    if(JSON.parse(sessionStorage.getItem("bookmark488"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark488"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark488",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/adults/fear-anxiety/s489'])
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
    this.router.navigate(['/adults/fear-anxiety/s487'])
  }
  

}
