import { Component, OnInit,OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'



@Component({
  selector: 'app-s100011',
  templateUrl: './s100011.page.html',
  styleUrls: ['./s100011.page.scss'],
})
export class S100011Page implements OnInit,OnDestroy {

  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w9"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/awareness/videos/1.1.mp4'  
  title="Exploring awareness"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/art_of_enquiry/art_of_enquiry_01.jpg"
  
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

 screenType=localStorage.getItem("video")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=100011
  startTime:any
  endTime:any
  totalTime:any  
 
  
  toc="awareness/s100000"
  bookmark=0
  path=this.router.url
  avDuration:any

  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  
 
  constructor(
    private router: Router,
    private service:TeenagersService,
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
    
    if(JSON.parse(sessionStorage.getItem("bookmark100011"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark100011"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark100011",JSON.stringify(this.bookmark))
  }
  receiveAvDuration(e){
    this.avDuration=e
    
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
 

  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;

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
        
        this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
      })
    
    this.router.navigate(['/awareness/s100012'])
   

  }
  prev(){
    this.router.navigate(['/awareness/s100010'])


  }
  ngOnDestroy(){

  }


}
