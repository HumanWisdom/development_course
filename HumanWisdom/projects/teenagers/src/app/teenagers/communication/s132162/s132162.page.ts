import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s132162',
  templateUrl: './s132162.page.html',
  styleUrls: ['./s132162.page.scss'],
})
export class S132162Page implements OnInit {

  bg_tn="bg_blue"
  bg_cft="bg_blue"
  bg="blue_w9"
  
  title="Understanding ourselves leads to wisdom"
  mediaAudio='https://humanwisdoms3.s3.eu-west-2.amazonaws.com'
  audioLink=this.mediaAudio+'/communication/audios/communication+4.4.mp3'

  transcriptPage="communication/s132162t"
  toc="communication/s132001"
  bookmark=0
  path=this.router.url
  avDuration:any
  userId:any
  saveUsername=JSON.parse(localStorage.getItem("saveUsername"))
  screenType=localStorage.getItem("audio")
  moduleId=localStorage.getItem("moduleId")
  screenNumber=132162
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
        if(JSON.parse(sessionStorage.getItem("bookmark132162"))==0)
          this.bookmark=0
        else if(this.bookmarkList.includes(this.screenNumber)||JSON.parse(sessionStorage.getItem("bookmark132162"))==1)
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
        sessionStorage.setItem("bookmark132162",JSON.stringify(this.bookmark))
      }
     
      receiveAvDuration(e){
        console.log(e)
        this.avDuration=e
     
      }
     
      submitProgress(){
       
        this.endTime = Date.now();
        this.totalTime = this.endTime - this.startTime;
     
        this.router.navigate(['/relationships/s132163'])
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
        this.router.navigate(['/relationships/s132161'])
     
     
      }
      ngOnDestroy(){
        localStorage.setItem("totalTime132162",this.totalTime)
        localStorage.setItem("avDuration132162",this.avDuration)
      }
    }
    
    
    