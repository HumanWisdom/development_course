import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as jQuery from 'jquery';

@Component({
  selector: 'HumanWisdom-s77049',
  templateUrl: './s77049.page.html',
  styleUrls: ['./s77049.page.scss'],
})
export class S77049Page implements OnInit,OnDestroy {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w5"
  title="#2 Our current conditioning influences"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/making-better-decisions/audios/making-better-decisions+2.3.mp3'

  transcriptPage="making-better-decisions/s77049t"
  toc="making-better-decisions/s77001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=77049
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor(private router: Router,
    private service:AdultsService,
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

      if(JSON.parse(sessionStorage.getItem("bookmark77049"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark77049"))==1)
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
    sessionStorage.setItem("bookmark77049",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/making-better-decisions/s77050'])
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
    this.router.navigate(['/adults/making-better-decisions/s77048'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime77049",this.totalTime)
    localStorage.setItem("avDuration77049",this.avDuration)
  }
}