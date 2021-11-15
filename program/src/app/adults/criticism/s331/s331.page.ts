import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s331',
  templateUrl: './s331.page.html',
  styleUrls: ['./s331.page.scss'],
})
export class S331Page implements OnInit {

bg="criticism_w6" 
title= "Impact of criticism"
mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
audioLink=this.mediaAudio+'/Criticism/audios/criticism+1.2.mp3'  

toc="/criticism/s324"
userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("audio")
moduleId=localStorage.getItem("moduleId")
screenNumber=331
startTime:any
endTime:any
totalTime:any
bookmark=0
path=this.router.url
avDuration:any
transcriptPage="/criticism/s331t"


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
    console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark331")))
    if(JSON.parse(sessionStorage.getItem("bookmark331"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark331"))==1)
      this.bookmark=1
   
   
 
 
    
  }
  receiveBookmark(e)
  {
    console.log(e)
   if(e==true)
    this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark331",JSON.stringify(this.bookmark))
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
  receiveAvDuration(e){
    this.avDuration=e
    
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
    })
  
  this.router.navigate(['/criticism/s332'])
 

}
prev(){
  this.router.navigate(['/criticism/s330'])


}
ngOnDestroy(){
  localStorage.setItem("totalTime331",this.totalTime)
  localStorage.setItem("avDuration331",this.avDuration)

}



}
