import { Component, OnInit} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-s63069',
  templateUrl: './s63069.page.html',
  styleUrls: ['./s63069.page.scss'],
})
export class S63069Page implements OnInit {

    bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w4"
    title="#7 Make peace with your inner emptiness"
    mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
    audioLink=this.mediaAudio+'/living-with-peace/audios/living-with-peace+2.9.mp3'
  
    transcriptPage="living-with-peace/s63069t"
    toc="living-with-peace/s63001"
    bookmark=0
    path = setTimeout(() => {
    return this.router.url;
  }, 1000);
    avDuration:any
    userId:any
    saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
    screenType=localStorage.getItem("audio")
    moduleId=localStorage.getItem("moduleId")
    screenNumber=63069
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
      if(JSON.parse(sessionStorage.getItem("bookmark63069"))==0)
        this.bookmark=0
      else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark63069"))==1)
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
          
        })
      
   
    }
   
    receiveBookmark(e)
    {
      console.log(e)
     if(e==true)
      this.bookmark=1
      else
        this.bookmark=0
      sessionStorage.setItem("bookmark63069",JSON.stringify(this.bookmark))
    }
   
    receiveAvDuration(e){
      console.log(e)
      this.avDuration=e
   
    }
   
    submitProgress(){
     
      this.endTime = Date.now();
      this.totalTime = this.endTime - this.startTime;
      this.router.navigate(['/adults/living-with-peace/s63070'])
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
    prev(){
      this.router.navigate(['/adults/living-with-peace/s63068'])
   
   
    }
    ngOnDestroy(){
      localStorage.setItem("totalTime63069",this.totalTime)
      localStorage.setItem("avDuration63069",this.avDuration)
   
    }
  }
  
  