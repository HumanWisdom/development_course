import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s173',
  templateUrl: './s173.page.html',
  styleUrls: ['./s173.page.scss'],
})
export class S173Page implements OnInit {

  bg="anger_overlay_w11"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/anger/videos/1.1.mp4'
  poster="https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/video_posters/anger/anger_01.jpg"
  title="What is the root cause of anger?"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  path=this.router.url

 screenType=localStorage.getItem("video")
avDuration:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=173
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
 
  toc="/anger/s162p0"
  

  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
  ngOnInit() {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
    this.createScreen()
  }

  createScreen(){
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>
      {
        
      })
    

  }
   receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark3",JSON.stringify(this.bookmark))
  }
receiveAvDuration(e){
    console.log(e)
    this.avDuration=e

  }
  
  submitProgress(){
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/anger/s174'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":0,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
       "avDuration":this.avDuration

    }).subscribe(res=>
      {
        
      },
      error=>console.log(error),
      ()=>{
        // this.router.navigate(['/adults/anger/s174'])
      })
    

  }
  previous(){
    this.router.navigate(['/adults/anger/s172'])
  }


}
