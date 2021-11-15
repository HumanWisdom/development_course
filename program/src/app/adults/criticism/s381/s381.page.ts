import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s381',
  templateUrl: './s381.page.html',
  styleUrls: ['./s381.page.scss'],
})
export class S381Page implements OnInit {

bg="criticism_w2" 
title="Step #4  If appropriate, say sorry"
mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
audioLink=this.mediaAudio+'/Criticism/audios/criticism+3.5.mp3'  

 toc="/criticism/s324"
 userId:any
 saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 screenType=localStorage.getItem("audio")
 moduleId=localStorage.getItem("moduleId")
 screenNumber=381
 startTime:any
 endTime:any
 totalTime:any
 bookmark=0
 path=this.router.url
 avDuration:any
 transcriptPage="/criticism/s381t"

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
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark381")))
    if(JSON.parse(sessionStorage.getItem("bookmark381"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark381"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveAvDuration(e){
    this.avDuration=e
    
  }

  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark381",JSON.stringify(this.bookmark))
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
       this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
        localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
     })
   
   this.router.navigate(['/criticism/s382'])
  

 }
 prev(){
   this.router.navigate(['/criticism/s380'])


 }
 ngOnDestroy(){
  localStorage.setItem("totalTime435",this.totalTime)
  localStorage.setItem("avDuration435",this.avDuration)

}


}
