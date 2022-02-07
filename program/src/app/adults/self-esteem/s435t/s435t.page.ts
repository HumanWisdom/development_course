import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s435t',
  templateUrl: './s435t.page.html',
  styleUrls: ['./s435t.page.scss'],
})
export class S435tPage implements OnInit {

  bg="teal_w1" 

  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=435
  
  
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  bookmark=0
  path=this.router.url
  audioPage="/self-esteem/s435"
  toc="/self-esteem/s433"
  avDuration=localStorage.getItem("avDuration435")
  totalTime=localStorage.getItem("totalTime435")
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }


  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}

    if(JSON.parse(sessionStorage.getItem("bookmark435"))==0)
    this.bookmark=0
  else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark435"))==1)
    this.bookmark=1
  
   
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark435",JSON.stringify(this.bookmark))
  }
  submitProgress(){
    this.router.navigate(['/self-esteem/s436'])
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
  previous(){
    this.router.navigate(['/self-esteem/s434'])
  }

}
