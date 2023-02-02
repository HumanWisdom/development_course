import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as jQuery from 'jquery';

@Component({
  selector: 'HumanWisdom-s77093',
  templateUrl: './s77093.page.html',
  styleUrls: ['./s77093.page.scss'],
})
export class S77093Page implements OnInit,OnDestroy {

  bg_tn="bg_light_blue"
  bg_cft="bg_light_blue"
  bg="light_blue_w6"
  title="#9 On big decisions, it is worthwhile consulting with others"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/making-better-decisions/audios/making-better-decisions+3.10.mp3'

  transcriptPage="making-better-decisions/s77093t"
  toc="making-better-decisions/s77001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=77093
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

      if(JSON.parse(sessionStorage.getItem("bookmark77093"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark77093"))==1)
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
    sessionStorage.setItem("bookmark77093",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/making-better-decisions/s77094'])
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
    this.router.navigate(['/adults/making-better-decisions/s77092'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime77093",this.totalTime)
    localStorage.setItem("avDuration77093",this.avDuration)
  }
}