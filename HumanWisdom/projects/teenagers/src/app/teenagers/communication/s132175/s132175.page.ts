import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132175',
  templateUrl: './s132175.page.html',
  styleUrls: ['./s132175.page.scss'],
})
export class S132175Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w8"
  
  title="#3 How does fear impact communication?"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/communication/audios/communication+5.4.mp3'

  transcriptPage="communication/s132175t"
  toc="communication/s132001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=132175
  startTime:any
  endTime:any
  totalTime:any
  
  bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
  progName = "teenagers";
      
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
        if(JSON.parse(sessionStorage.getItem("bookmark132175"))==0)
          this.bookmark=0
        else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark132175"))==1)
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
        sessionStorage.setItem("bookmark132175",JSON.stringify(this.bookmark))
      }
     
      receiveAvDuration(e){
        console.log(e)
        this.avDuration=e
     
      }
     
      submitProgress(){
       
        this.endTime = Date.now();
        this.totalTime = this.endTime - this.startTime;
     
        this.router.navigate(['/relationships/s132176'])
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
        this.router.navigate(['/relationships/s132174'])
     
     
      }
      ngOnDestroy(){
        localStorage.setItem("totalTime132175",this.totalTime)
        localStorage.setItem("avDuration132175",this.avDuration)
      }
    }
    
    
    