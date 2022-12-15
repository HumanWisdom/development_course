import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
@Component({
  selector: 'app-s355',
  templateUrl: './s355.page.html',
  styleUrls: ['./s355.page.scss'],
})
export class S355Page implements OnInit {


  bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_overlay_w8"
  mediaVideo=JSON.parse(localStorage.getItem("mediaVideo"))
  videoLink=this.mediaVideo+'/Criticism/videos/2.3.mp4'
  title="Sometimes, offering criticism needs courage"
  poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/criticism/criticism_03.jpg"



 toc="/criticism/s324"
 userId:any
 saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 


 path=this.router.url

screenType=localStorage.getItem("video")
 moduleId=localStorage.getItem("moduleId")
 screenNumber=355
 startTime:any
 endTime:any
 totalTime:any
 bookmark=0
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
    
    if(JSON.parse(sessionStorage.getItem("bookmark355"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark355"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark355",JSON.stringify(this.bookmark))
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
  receiveAvDuration(e){
    this.avDuration=e
    
  }

 
 

 submitProgress(){
   this.endTime = Date.now();
   this.totalTime = this.endTime - this.startTime;
   this.router.navigate(['/adults/criticism/s356'])
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
     },
     error=>console.log(error),
     ()=>{
      
     })
   

 }
 prev(){
   this.router.navigate(['/adults/criticism/s354'])
 }


}
