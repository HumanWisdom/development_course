import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s112122',
  templateUrl: './s112122.page.html',
  styleUrls: ['./s112122.page.scss'],
})
export class S112122Page implements OnInit {

  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w11"
  title="Fear exists till you make a difficult decision,then it fades away"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/fear_anxiety/audios/fear+5.1.mp3'
  transcriptPage="/fear-anxiety/s112122t"
  toc="teenagers/fear-anxiety/s112001"  

  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=112122
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);  
  avDuration:any  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName="teenagers" 

  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();
 
    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark112122"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark112122"))==1)
      this.bookmark=1
 
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
    sessionStorage.setItem("bookmark112122",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e
 
  }
 
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
 
    this.router.navigate(['/teenagers/fear-anxiety/s112123'])
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
    this.router.navigate(['/teenagers/fear-anxiety/s112121'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime112122",this.totalTime)
    localStorage.setItem("avDuration112122",this.avDuration)
  }
}
