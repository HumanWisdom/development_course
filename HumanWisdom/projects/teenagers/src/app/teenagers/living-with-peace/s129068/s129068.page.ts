import { Component, OnInit } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s129068',
  templateUrl: './s129068.page.html',
  styleUrls: ['./s129068.page.scss'],
})
export class S129068Page implements OnInit {

 
  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w4"
  title="#6 What can my emotional  pain teach me about myself?"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/living-with-peace/audios/living-with-peace+2.8.mp3'

  transcriptPage="living-with-peace/s129068t"
  yellow="#FFC455"
  toc="living-with-peace/s129001"
  bookmark=0
  path = setTimeout(() => {
    return this.router.url;
  }, 1000);
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=129068
  startTime:any
  endTime:any
  totalTime:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"));
  progName= "teenagers";

  constructor(private router: Router,
    private service: TeenagersService,
    private location:Location) { }

  ngOnInit() {
    if(this.saveUsername==false)
    {this.userId=JSON.parse(sessionStorage.getItem("userId"))}
    else
    {this.userId=JSON.parse(localStorage.getItem("userId"))}
   this.startTime = Date.now();

    this.startTime = Date.now();
    this.createScreen()
    if(JSON.parse(sessionStorage.getItem("bookmark129068"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark129068"))==1)
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
    sessionStorage.setItem("bookmark129068",JSON.stringify(this.bookmark))
  }

  receiveAvDuration(e){
    console.log(e)
    this.avDuration=e

  }

  getTime(){

  }

  submitProgress(){

    this.endTime = Date.now();
    this.totalTime = this.endTime - this.startTime;
    this.router.navigate(['/living-with-peace/s129069'])
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
    this.router.navigate(['/living-with-peace/s129067'])


  }

  ngOnDestroy(){
    localStorage.setItem("totalTime129068",this.totalTime)
    localStorage.setItem("avDuration129068",this.avDuration)

  }

  gotoTranscript() {
    const url = this.router.url + "t";
    this.router.navigate([url]);
  }
}
