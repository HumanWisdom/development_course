import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';
@Component({
  selector: 'app-s39007-audio',
  templateUrl: './s39007.page.html',
  styleUrls: ['./s39007.page.scss'],
})

export class S39007Page implements OnInit,OnDestroy 
{
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w6"
  title=""
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/art_of_enquiry/audios/enquiry+5.4.mp3'
  transcriptPage="awareness/s39007t"
  yellow="#FFC455"
  toc="awareness/s39000"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=39007
  startTime:any
  endTime:any
  totalTime:any
  list=[
    "Conditioning",
    " Comparison",
    "Our emotional needs",
    "Our self-interest",
    "Our need for power", 
    "Our fears and insecurities",
    "Our images of ourselves","Our inner boredom"
  ]
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
  constructor
  (
    private router: Router,
    private service:AdultsService,
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
    if(JSON.parse(sessionStorage.getItem("bookmark39007"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark39007"))==1)
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
    sessionStorage.setItem("bookmark39007",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/adults/awareness/s39008'])
  }

  prev()
  {
    this.router.navigate(['/adults/awareness/s39006'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime39007",this.totalTime)
    localStorage.setItem("avDuration39007",this.avDuration)
  }

}