import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s125047',
  templateUrl: './s125047.page.html',
  styleUrls: ['./s125047.page.scss'],
})

export class S125047Page implements OnInit,AfterViewInit 
{

  title="stress comes from stress"
  yellow="#FFC455"
  bg_tn="bg_dark_blue"
  bg_cft="bg_dark_blue"
  bg="stress_overlay3"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/stress/audios/stress+2.2.mp3'
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=125047
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  @ViewChild('playerContainer',{static:false})
  public playerContainer:ElementRef
  toc="/stress/s125001"
  transcriptPage="/stress/s125047t"
  bookmark=0
  path=this.router.url
  avDuration:any
  
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
    this.router.navigate(['/stress/s125048'])
    this.service.submitProgressAv({
      "ScrNumber":this.screenNumber,
      "UserId":this.userId,
      "BookMark":this.bookmark,
      "ModuleId":this.moduleId,
      "screenType":this.screenType,
      "timeSpent":this.totalTime,
      "avDuration":this.avDuration
    }).subscribe(res=>{})
  }

  previous()
  {
    this.router.navigate(['/stress/s125046'])
  }

  ngAfterViewInit()
  {}

}