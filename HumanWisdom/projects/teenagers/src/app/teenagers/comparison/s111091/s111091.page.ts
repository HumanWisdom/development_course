import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s111091',
  templateUrl: './s111091.page.html',
  styleUrls: ['./s111091.page.scss'],
})
export class S111091Page implements OnInit 
{
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_w9"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/comparison/audios/6.4.mp3'
  title="The 4 levels of awareness"
  toc="/comparison/s111001"
  transcriptPage="comparison/s111091t"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=111091
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
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
    if(JSON.parse(sessionStorage.getItem("bookmark111091"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark111091"))==1)
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
    sessionStorage.setItem("bookmark111091",JSON.stringify(this.bookmark))
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
    localStorage.setItem("pageaction", 'next')
    this.router.navigate(['/comparison/s111092'])
    if (this.userId === 563) return;
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
    localStorage.setItem("pageaction", 'prev')
    this.router.navigate(['/comparison/s111090'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime111091",this.totalTime)
    localStorage.setItem("avDuration111091",this.avDuration)
  }
  
}