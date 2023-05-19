import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';
@Component({
  selector: 'app-s112139',
  templateUrl: './s112139.page.html',
  styleUrls: ['./s112139.page.scss'],
})

export class S112139Page implements OnInit, AfterViewInit
{
  @ViewChild('audio') audio;

  yellow="#FFC455"
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg="purple_red_w4"
  title="Put your fears into one of 3 buckets  1.	Really rare  2.	Inevitable  3.	Possible  "
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/fear-anxiety/audios/1.18.mp3'
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=112139
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  transcriptPage="/fear-anxiety/s112139t"
  toc="fear-anxiety/s112001"  
  bookmark=0
  path=this.router.url
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"));
  reachedLimit = false;
  enableAlert = false;
  pauseTime:any
  mediaPercent=JSON.parse(localStorage.getItem("mediaPercent"))
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  localFreeScreens =localStorage.getItem("freeScreens");
  freeScreens= this.localFreeScreens != "undefined"? JSON.parse(localStorage.getItem("freeScreens")):"";
  scrId:any
  interval:any
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
    this.createScreen();
    var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     this.scrId=str
     console.log("str",str,"id",this.scrId)
    if(JSON.parse(sessionStorage.getItem("bookmark112139"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark112139"))==1)
      this.bookmark=1

      if ((this.loginResponse.Subscriber != 1)) {
        if (!this.freeScreens.includes(parseInt(this.scrId))) {
          this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
        }
      }
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
    sessionStorage.setItem("bookmark112139",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/fear-anxiety/s112140'])
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
    this.router.navigate(['/fear-anxiety/s112138'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime112139",this.totalTime)
    localStorage.setItem("avDuration112139",this.avDuration)
  }

  ngAfterViewInit() {
    this.audio.nativeElement.onplaying = (event) => {
      if (this.reachedLimit) {
        this.audio.nativeElement.pause();
        this.enableAlert = true;
      }
    };
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
  }

  checkPauseTime(){
    let aud: any = document.getElementById("aud1");
      this.pauseTime = ((this.mediaPercent / 100) * aud.duration)
      if (aud.currentTime > this.pauseTime) {
        this.reachedLimit = true;
        aud.pause();
        this.enableAlert = true;
        // window.alert('You have reached free limit')
      }
  }

}
