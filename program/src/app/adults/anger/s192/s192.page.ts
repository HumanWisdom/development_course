import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'



@Component({
  selector: 'app-s192',
  templateUrl: './s192.page.html',
  styleUrls: ['./s192.page.scss'],
})
export class S192Page implements OnInit,OnDestroy {

  bg="anger_overlay_w12"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/anger/videos/2.2.mp4'
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/anger/anger_02.jpg"
  title="How do we respond when we are angry?"

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

 screenType=localStorage.getItem("video")
avDuration:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=192
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  
  toc="/anger/s162p0"
  path=this.router.url


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
        console.log(res)
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
        console.log(res)
      },
      error=>console.log(error),
      ()=>{
        this.router.navigate(['/anger/s193'])
      })
    

  }
  previous(){
    this.router.navigate(['/anger/s191'])
  }
  ngOnDestroy(){
    
  }

}
