import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as jQuery from 'jquery';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s156157',
  templateUrl: './s156157.page.html',
  styleUrls: ['./s156157.page.scss'],
})
export class S156157Page implements OnInit,OnDestroy {

  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="dark_blue_w1"
  title="Introduction"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/dealing-with-depression/audios/5.1.mp3'

  transcriptPage="dealing-with-depression/s156157t"
  toc="dealing-with-depression/s156001"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=156157
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName="teenagers"
  
  constructor(private router: Router,
    private service:TeenagersService,
    private location:Location) { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
      
      this.startTime = Date.now();
      this.startTime = Date.now();
      this.createScreen()

      if(JSON.parse(sessionStorage.getItem("bookmark156157"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark156157"))==1)
        this.bookmark=1
  }
 
  createScreen()
  {
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
    sessionStorage.setItem("bookmark156157",JSON.stringify(this.bookmark))
  }
 
  receiveAvDuration(e)
  {
    console.log(e)
    this.avDuration=e
  }
 
  submitProgress()
  {
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/dealing-with-depression/s156158'])
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

  prev()
  {
    this.router.navigate(['/dealing-with-depression/s156156'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime156157",this.totalTime)
    localStorage.setItem("avDuration156157",this.avDuration)
  }
}