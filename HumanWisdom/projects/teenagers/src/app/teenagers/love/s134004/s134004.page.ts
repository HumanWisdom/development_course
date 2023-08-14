import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s134004',
  templateUrl: './s134004.page.html',
  styleUrls: ['./s134004.page.scss'],
})
export class S134004Page implements OnInit {

  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg="blue_pink_w2"
  title="Introduction"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/love/audios/love+1.1.mp3'
  colours=["btn_5circles_01 disabled"," btn_5circles_02 disabled"," btn_5circles_03 disabled"," btn_5circles_04 disabled"," btn_5circles_05 "]
  text=[
        "Nurture a quiet mind",
        "Art of enquiry",
        " How the mind works",
        "Understand emotions",
        "Love"
      ]

      transcriptPage="love/s134004t"
      toc="love/s134001"
      progName = "teenagers";
      userId:any
      saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
      screenType=localStorage.getItem("audio")
      moduleId=localStorage.getItem("moduleId")
      screenNumber=134004
      startTime:any
      endTime:any
      totalTime:any
      bookmark=0
      path=this.router.url
      
      avDuration:any
      
      bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
      
      constructor(private router: Router,
        private service:TeenagersService,
        private location:Location) { }
     
      ngOnInit() {
        if(this.saveUsername==false)
        {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
        else
        {this.userId=JSON.parse(localStorage.getItem("userId"))}
       this.startTime = Date.now();
     
        this.startTime = Date.now();
        this.createScreen()
        if(JSON.parse(sessionStorage.getItem("bookmark134004"))==0)
          this.bookmark=0
        else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark134004"))==1)
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
        sessionStorage.setItem("bookmark134004",JSON.stringify(this.bookmark))
      }
     
      receiveAvDuration(e){
        console.log(e)
        this.avDuration=e
     
      }
     
      submitProgress(){
       
        this.endTime = Date.now();
        this.totalTime = this.endTime - this.startTime;
     
        this.router.navigate(['/love/s134005'])
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
        this.router.navigate(['/love/s134003'])
     
     
      }
      ngOnDestroy(){
        localStorage.setItem("totalTime134004",this.totalTime)
        localStorage.setItem("avDuration134004",this.avDuration)
      }
    }
    
    
    