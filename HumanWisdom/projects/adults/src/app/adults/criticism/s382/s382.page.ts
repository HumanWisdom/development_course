import { Component, OnInit } from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s382',
  templateUrl: './s382.page.html',
  styleUrls: ['./s382.page.scss'],
})
export class S382Page implements OnInit {

bg_tn="bg_green"
  bg_cft="bg_green"
  bg="criticism_w3" 
title="Step #5  What can I learn?"
mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
audioLink=this.mediaAudio+'/Criticism/audios/criticism+3.6.mp3'  

toc="/criticism/s324"
userId:any
saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
screenType=localStorage.getItem("audio")
moduleId=localStorage.getItem("moduleId")
screenNumber=382
startTime:any
endTime:any
totalTime:any
bookmark=0
path = setTimeout(() => {
    return this.router.url;
  }, 1000);
avDuration:any
transcriptPage="/criticism/s382t"


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
    
    if(JSON.parse(sessionStorage.getItem("bookmark382"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark382"))==1)
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
    sessionStorage.setItem("bookmark382",JSON.stringify(this.bookmark))
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
  this.router.navigate(['/adults/criticism/s383'])
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
  
 
 

}
prev(){
  this.router.navigate(['/adults/criticism/s381'])


}
ngOnDestroy(){
  localStorage.setItem("totalTime435",this.totalTime)
  localStorage.setItem("avDuration435",this.avDuration)

}


}
