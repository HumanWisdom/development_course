import { Component, OnInit ,ViewChild,  ElementRef, AfterViewInit,OnDestroy} from '@angular/core';
import {AdultsService} from "../../adults.service"
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import * as jQuery from 'jquery';

@Component({
  selector: 'app-s211',
  templateUrl: './s211.page.html',
  styleUrls: ['./s211.page.scss'],
})
export class S211Page implements OnInit,AfterViewInit {

  bg="anger_w11"  
  title="Meet anger without language"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/anger/audios/anger+3.5.mp3'
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=211
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))

  @ViewChild('playerContainer',{static:false})
  
  public playerContainer:ElementRef

  toc="/anger/s162p0"
  transcriptPage="/anger/s211t"
  bookmark=0
  path=this.router.url
  avDuration:any
  
  constructor(private router: Router,
    private service:AdultsService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
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
  }

 
  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e

  }

  submitProgress(){
   
    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/adults/anger/s212'])
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
        
      })
    
    // this.router.navigate(['/adults/anger/s212'])
   

  }
  previous(){
    this.router.navigate(['/adults/anger/s210'])


  }
  ngAfterViewInit(){

  }
 
}
