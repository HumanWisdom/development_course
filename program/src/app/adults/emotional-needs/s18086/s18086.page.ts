import { Component, OnInit} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-s18086',
  templateUrl: './s18086.page.html',
  styleUrls: ['./s18086.page.scss'],
})
export class S18086Page implements OnInit {

    bg="blue_pink_w9"
    title="How can we be more lovable?"
    mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    audioLink=this.mediaAudio+'/emotional-needs/audios/emotional-needs+3.5.mp3'
  
    transcriptPage="emotional-needs/s18086t"
    toc="emotional-needs/s18001"
    bookmark=0
    path=this.router.url
    avDuration:any
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("audio")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=18086
    startTime:any
    endTime:any
    totalTime:any
    
    bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
    
    constructor(private router: Router,
      private service:AdultsService,
      ) { }
   
    ngOnInit() {
      if(this.saveUsername==false)
      {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
      else
      {this.userId=JSON.parse(localStorage.getItem("userId"))}
     this.startTime = Date.now();
   
      this.startTime = Date.now();
      this.createScreen()
      if(JSON.parse(sessionStorage.getItem("bookmark18086"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark18086"))==1)
        this.bookmark=1
   
    }
   
    createScreen(){
      this.service.createScreen({
        "ScrId":0,
        "ModuleId":this.moduleId,
        "GSetID":this.screenType,
        "ScreenNo":this.screenNumber
      }).subscribe(res=>
        {
          console.log(res)
        })
      
   
    }
   
    receiveBookmark(e)
    {
      console.log(e)
     if(e==true)
      this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark18086",JSON.stringify(this.bookmark))
    }
   
    receiveAvDuration(e){
      console.log(e)
      this.avDuration=e
   
    }
   
    submitProgress(){
     
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
          console.log(res)
          this.bookmarkList=res.GetBkMrkScr.map(a=>parseInt(a.ScrNo))
          localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))
        })
      
      this.router.navigate(['/emotional-needs/s18087'])
     
   
    }
    prev(){
      this.router.navigate(['/emotional-needs/s18085'])
   
   
    }
    ngOnDestroy(){
      localStorage.setItem("totalTime18086",this.totalTime)
      localStorage.setItem("avDuration18086",this.avDuration)
   
    }
  }
  
  