import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s104021-audio',
  templateUrl: './s104021.page.html',
  styleUrls: ['./s104021.page.scss'],
})
export class S104021Page implements OnInit,OnDestroy {

  bg_tn="bg_teal"
  bg_cft="bg_teal"
  bg="teal_w7"
  title="#5 Taking ownership of our thoughts & feelings"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/art_of_enquiry/audios/enquiry+9.7.mp3'
  transcriptPage="obstacles-enquiry/s104021t"
  toc="obstacles-enquiry/s104001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=104021
  startTime:any
  endTime:any
  totalTime:any
  progName="teenagers"  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
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
    if(JSON.parse(sessionStorage.getItem("bookmar104021"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark104021"))==1)
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
    sessionStorage.setItem("bookmark104021",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e
 
  }
 
  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/obstacles-enquiry/s104022'])
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
    this.router.navigate(['/obstacles-enquiry/s104020'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime104021",this.totalTime)
    localStorage.setItem("avDuration104021",this.avDuration)
 
  }
}

