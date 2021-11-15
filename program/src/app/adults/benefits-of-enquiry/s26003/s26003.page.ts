import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';


@Component({
  selector: 'app-s26003-audio',
  templateUrl: './s26003.page.html',
  styleUrls: ['./s26003.page.scss'],
})
export class S26003Page implements OnInit,OnDestroy {

  bg="green_yellow_w2"
  title="Welcome to the art of enquiry"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/art_of_enquiry/audios/enquiry+1.1.mp3'
  colours=["btn_5circles_01 disabled"," btn_5circles_02"," btn_5circles_03 disabled"," btn_5circles_04 disabled"," btn_5circles_05 disabled"]
  text=[
        "Nurture a quiet mind",
        "Art of enquiry",
        "How the mind works",
        "Understand emotions",
        "Living with wisdom"
      ]

  transcriptPage="benefits-of-enquiry/s26003t"
  toc="benefits-of-enquiry/s26001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=26003
  startTime:any
  endTime:any
  totalTime:any
  
  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }
 
  ngOnInit() {
    console.log("bm5",JSON.parse(sessionStorage.getItem("bookmark26003")))

    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();
 
    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark26003"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark26003"))==1)
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
    sessionStorage.setItem("bookmark26003",JSON.stringify(this.bookmark))
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
    
    this.router.navigate(['/benefits-of-enquiry/s26005'])
   
 
  }
  prev(){
    this.router.navigate(['/benefits-of-enquiry/s26002'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime26003",this.totalTime)
    localStorage.setItem("avDuration26003",this.avDuration)
 
  }
}
