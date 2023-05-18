import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s116004',
  templateUrl: './s116004.page.html',
  styleUrls: ['./s116004.page.scss'],
})
export class S116004Page implements OnInit,OnDestroy {

  bg_tn="bg_purple"
  bg_cft="bg_purple"
  bg="purple_w2"
  title=" "
  
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/sorrow-loss/audios/sorrow-loss+1.1.mp3'
  colours=["btn_5circles_01 disabled"," btn_5circles_02 disabled"," btn_5circles_03 disabled"," btn_5circles_04"," btn_5circles_05 disabled"]
  text=[
        "Nurture a quiet mind",
        "Art of enquiry",
        "How the mind works",
        "Sorrow and loss",
        "Transform your life"
      ]

  transcriptPage="sorrow/s116004t"
  toc="sorrow/s116001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=116004
  startTime:any
  endTime:any
  totalTime:any  
  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList")) 
  progName="teenagers";

  constructor
  (
    private router: Router,
    private service:TeenagersService,
    private location:Location
  ) 
  { }
 
  ngOnInit() 
  {
    console.log("bm116004",JSON.parse(sessionStorage.getItem("bookmark116004")))
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
    if(JSON.parse(sessionStorage.getItem("bookmark116004"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark116004"))==1)
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
    sessionStorage.setItem("bookmark116004",JSON.stringify(this.bookmark))
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
    this.router.navigate(['/sorrow/s116005'])
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
    this.router.navigate(['/sorrow/s116003'])
  }

  ngOnDestroy()
  {
    localStorage.setItem("totalTime116004",this.totalTime)
    localStorage.setItem("avDuration116004",this.avDuration)
  }

}