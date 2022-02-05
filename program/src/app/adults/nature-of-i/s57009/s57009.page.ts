import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';

@Component({
  selector: 'app-s57009',
  templateUrl: './s57009.page.html',
  styleUrls: ['./s57009.page.scss'],
})
export class S57009Page implements OnInit,OnDestroy {

  bg="green_w7"
  title="Why is it important to explore the I?"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/nature-of-i/audios/nature-of-i+1.4.mp3'

  transcriptPage="nature-of-i/s57009t"
  yellow="#FFC455"
  toc="nature-of-i/s57001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=57009
  startTime:any
  endTime:any
  totalTime:any
  list=["It helps us to understand ourselves and others ",
        "Being aware of it allows us to respond with intelligence",
        "When the ‘I’ is stressed, it impacts our physical health",
        "It is the root cause of all our suffering and conflict in the world", 
        "Exploring it can help us live in peace",
        "We are destroying our own habitat, and we can’t seem to stop ourselves"]
  
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
    if(JSON.parse(sessionStorage.getItem("bookmark57009"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark57009"))==1)
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
    sessionStorage.setItem("bookmark57009",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e
 
  }
  
  getTime(){
      
  }
 
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/nature-of-i/s57010'])
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
    this.router.navigate(['/nature-of-i/s57008'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime57009",this.totalTime)
    localStorage.setItem("avDuration57009",this.avDuration)
 
  }
}
