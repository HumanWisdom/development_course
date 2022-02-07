import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';


@Component({
  selector: 'app-s44125-audio',
  templateUrl: './s44125.page.html',
  styleUrls: ['./s44125.page.scss'],
})
export class S44125Page implements OnInit,OnDestroy {

  bg="dark_blue_w7"
  title="#13 Loneliness"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/stress/audios/stress+4.15.mp3'

  transcriptPage="stress/s44125t"
  toc="stress/s44001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=44125
  startTime:any
  endTime:any
  totalTime:any
  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();
 
    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark44125"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark44125"))==1)
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
    sessionStorage.setItem("bookmark44125",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e
 
  }
 
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/stress/s44126'])
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
    
   
   
 
  }
  prev(){
    this.router.navigate(['/stress/s44124'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime44125",this.totalTime)
    localStorage.setItem("avDuration44125",this.avDuration)
 
  }
}
