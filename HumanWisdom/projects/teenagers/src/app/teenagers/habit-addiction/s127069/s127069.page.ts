import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s127069',
  templateUrl: './s127069.page.html',
  styleUrls: ['./s127069.page.scss'],
})
export class S127069Page implements OnInit 
{
  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w6"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/habit-addiction/audios/habit-addiction+2.5.mp3'
  title="Why do we constantly seek pleasure?  "
  toc="/habit-addiction/s127001"
  transcriptPage="habit-addiction/s127069t"
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=127069
  startTime:any
  endTime:any
  totalTime:any
  bookmark=0
  path=this.router.url
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName = "teenagers"

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
    if(JSON.parse(sessionStorage.getItem("bookmark127069"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark127069"))==1)
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
    sessionStorage.setItem("bookmark127069",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/habit-addiction/s127070'])
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
    this.router.navigate(['/habit-addiction/s127068'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime127069",this.totalTime)
    localStorage.setItem("avDuration127069",this.avDuration)
  }
  
}