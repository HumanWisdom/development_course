import { Component, OnInit,OnDestroy } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'



@Component({
  selector: 'app-s116',
  templateUrl: './s116.page.html',
  styleUrls: ['./s116.page.scss'],
})
export class S116Page implements OnInit,OnDestroy {

  bg="comparison_envy_overlay_w8"  
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/comparison/videos/6.3.mp4'
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/comparison/comparison_02.jpg"

  title="How we can be free of envy"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

 screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=116
  startTime:any
  endTime:any
  totalTime:any
  toc="comparison/s0"
  bookmark=0
  path=this.router.url
  avDuration:any

  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  
 
  constructor(
    private router: Router,
    private service:AdultsService,
    private location:Location
  ) { }
ngOnInit() {
    //localStorage.removeItem("bookmarkList")
    this.createScreen()
    
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
  else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
    this.startTime = Date.now();
  
    this.startTime = Date.now();
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark116")))
    if(JSON.parse(sessionStorage.getItem("bookmark116"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark116"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark116",JSON.stringify(this.bookmark))
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
 

  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/comparison/s117'])
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
    this.router.navigate(['/adults/comparison/s115'])


  }
  ngOnDestroy(){

  }

}
