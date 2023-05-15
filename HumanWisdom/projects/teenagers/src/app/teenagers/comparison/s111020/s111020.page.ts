import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s111020',
  templateUrl: './s111020.page.html',
  styleUrls: ['./s111020.page.scss'],
})
export class S111020Page implements OnInit,OnDestroy 
{
  bg_tn="bg_green_yellow"
  bg_cft="bg_green_yellow"
  bg="green_yellow_w2"
  title="The comparison trap"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/comparison/audios/2.1.mp3'
  transcriptPage="comparison/s111020t"
  toc="comparison/s111001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=111020
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName= "teenagers";
  
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
    if(JSON.parse(sessionStorage.getItem("bookmark111020"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark111020"))==1)
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
    sessionStorage.setItem("bookmark111020",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/comparison/s111021'])
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
    this.router.navigate(['/comparison/s111019'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime111020",this.totalTime)
    localStorage.setItem("avDuration111020",this.avDuration)
  }

}