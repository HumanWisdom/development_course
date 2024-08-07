import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s340',
  templateUrl: './s340.page.html',
  styleUrls: ['./s340.page.scss'],
})
export class S340Page implements OnInit {

bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_w2" 
title="Can criticism have a positive impact?"
mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
audioLink=this.mediaAudio+'/Criticism/audios/criticism+1.3.mp3'  

toc="/criticism/s324"
userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("audio")
moduleId=localStorage.getItem("moduleId")
screenNumber=340
startTime:any
endTime:any
totalTime:any
bookmark=0
path = setTimeout(() => {
    return this.router.url;
  }, 1000);
avDuration:any
transcriptPage="/criticism/s340t"

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
    
    if(JSON.parse(sessionStorage.getItem("bookmark340"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark340"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark340",JSON.stringify(this.bookmark))
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
  this.router.navigate(['/adults/criticism/s341'])
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
  this.router.navigate(['/adults/criticism/s339'])


}
ngOnDestroy(){
  localStorage.setItem("totalTime435",this.totalTime)
  localStorage.setItem("avDuration435",this.avDuration)

}



}
