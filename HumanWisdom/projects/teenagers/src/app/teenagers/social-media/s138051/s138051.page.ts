import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as jQuery from 'jquery';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s138051-audio',
  templateUrl: './s138051.page.html',
  styleUrls: ['./s138051.page.scss'],
})

export class S138051Page implements OnInit,OnDestroy 
{
  bg_tn=""
  bg_cft=""
  bg=""
  title="Our mind compares all the time"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/teenagers/modules/social-media/audios/1.7.mp3'
  transcriptPage="social-media/s138051t"
  toc="social-media/s138001"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=138051
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName ="teenagers"
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    if(this.saveUsername==false)
    {
      this.userId=JSON.parse(sessionStorage.getItem("userId"))
    }
    else
    {
      this.userId=JSON.parse(localStorage.getItem("userId"))
    }
    this.startTime = Date.now();
    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark138051"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark138051"))==1)
      this.bookmark=1
  }
 
  createScreen()
  {
    this.service.createScreen({
      "ScrId":0,
      "ModuleId":this.moduleId,
      "GSetID":this.screenType,
      "ScreenNo":this.screenNumber
    }).subscribe(res=>{})
  }
 
  receiveBookmark(e)
  {
    console.log(e)
    if(e==true)
      this.bookmark=1
    else
      this.bookmark=0
    sessionStorage.setItem("bookmark138051",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/social-media/s138052'])
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
    this.router.navigate(['/social-media/s138050'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime138051",this.totalTime)
    localStorage.setItem("avDuration138051",this.avDuration)
  }

}