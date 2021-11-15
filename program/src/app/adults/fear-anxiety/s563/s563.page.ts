import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Location } from '@angular/common'
import {AdultsService} from '../../adults.service'

@Component({
  selector: 'app-s563',
  templateUrl: './s563.page.html',
  styleUrls: ['./s563.page.scss'],
})
export class S563Page implements OnInit {

  bg="purple_red_w7" 
  title="Imaginary fears"
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  audioLink=this.mediaAudio+'/fear_anxiety/audios/fear+3.3.mp3'
 
  screenType=localStorage.getItem("audio")
  userId:any
  moduleId=localStorage.getItem("moduleId")
  screenNumber=563
  startTime:any
  endTime:any
  totalTime:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
 
  toc="/fear-anxiety/s486"
  transcriptPage="/fear-anxiety/s563t"
  bookmark=0
  path=this.router.url
  avDuration:any
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  
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
    if(JSON.parse(sessionStorage.getItem("bookmark563"))==0)
      this.bookmark=0
    else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark563"))==1)
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
    sessionStorage.setItem("bookmark563",JSON.stringify(this.bookmark))
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
    
    this.router.navigate(['/fear-anxiety/s564'])
   
 
  }
  prev(){
    this.router.navigate(['/fear-anxiety/s562'])
 
 
  }
  ngOnDestroy(){
    localStorage.setItem("totalTime563",this.totalTime)
    localStorage.setItem("avDuration563",this.avDuration)
 
  }

}
