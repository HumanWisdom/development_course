import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';
@Component({
  selector: 'app-s100008-audio',
  templateUrl: './s100008.page.html',
  styleUrls: ['./s100008.page.scss'],
})

export class S100008Page implements OnInit,OnDestroy 
{
  bg_tn="bg_red_pink"
  bg_cft="bg_red_pink"
  bg="red_pink_w6"
  title=""
  mediaAudio:any;
  audioLink:any;
  transcriptPage="teenagers/awareness/s100008t"
  yellow="#FFC455"
 toc="teenagers/awareness/s100001"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration:any
  userId:any
  saveUsername:any;
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=100008
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
  progName="teenagers"
  
  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    var userName = localStorage.getItem("saveUsername");
    if(userName!=null && userName){
     this.saveUsername = JSON.parse(userName)
    }
    var mediaAudio = localStorage.getItem("mediaAudio")
    if(mediaAudio && mediaAudio!=null){
     this.mediaAudio= JSON.parse(mediaAudio);
     this.audioLink=this.mediaAudio+'/teenagers/modules/awareness/audios/1.3.mp3'
    }
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
    if(JSON.parse(sessionStorage.getItem("bookmark100008"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark100008"))==1)
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
    sessionStorage.setItem("bookmark100008",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/teenagers/awareness/s100009'])
  }

  prev()
  {
    this.router.navigate(['/teenagers/awareness/s100006'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime100008",this.totalTime)
    localStorage.setItem("avDuration100008",this.avDuration)
  }

}