import { Component, OnInit,OnDestroy,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as jQuery from 'jquery';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';
@Component({
  selector: 'app-audio-content',
  templateUrl: './audio-content.component.html',
  styleUrls: ['./audio-content.component.scss'],
})
export class AudioContentComponent implements OnInit,OnDestroy,AfterViewInit{
// yellow="#FFC455"
@Input() bg: string;
@Input() title: string;
@Input() audioLink: string;
@Output() sendAvDuration = new EventEmitter<string>();
myAudio:any
pauseTime:any
mediaPercent=JSON.parse(localStorage.getItem("mediaPercent"))
interval:any
t:any
loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
scrId:any
// @ViewChild('audio',{static:false})
// public audio:ElementRef



// @ViewChild('playerContainer') playerContainer:ElementRef ;
@ViewChild('audio') audio;
@ViewChild('screen', { static: true }) screen: any;

constructor(
  private captureService:NgxCaptureService,
  private service: AdultsService,
  private router: Router,private url: ActivatedRoute,
) {  
  this.url.queryParams.subscribe(params => {
    this.t = params['t'];
  })
}

ngOnInit() {
  var str=this.router.url
  var lastSlash = str.lastIndexOf("/");
   str=str.substring(lastSlash+2);
   //str = str.replace(/\D/g,'');
   this.scrId=str
   console.log("str",str,"id",this.scrId)

   //call api to geta percent
   this.service.mediaPercent(this.scrId).subscribe(res=>{
     
     this.mediaPercent=res[0].MediaPrcnt
     console.log("media duration",this.mediaPercent)
   })
  console.log(this.audioLink,this.mediaPercent,this.loginResponse)
  var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     this.scrId=str
     console.log("str",str,"id",this.scrId)


  if( (this.loginResponse.Subscriber!=1))
  {
    if(!this.freeScreens.includes(parseInt(this.scrId)))
      {
        
          this.interval=setInterval(()=>this.checkPauseTime(), 1000);

        
           
      }
  }
}

getTime(){
  console.log(this.audio)
  console.log(this.audio.audio.nativeElement.currentTime)
  this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))    
}

checkPauseTime(){

  console.log(this.loginResponse.Subscriber,"subs")
      console.log("checking to pause")
      this.pauseTime=((this.mediaPercent/100)*this.audio.audio.nativeElement.duration)
      console.log(this.pauseTime,"p")
      if(this.audio.audio.nativeElement.currentTime>this.pauseTime)
      {
        this.audio.audio.nativeElement.pause()
        window.alert('You Have Reached Free Limit')
      }
    

  

}

ngOnDestroy(){
  if (this.interval) {
    clearInterval(this.interval);
 }

}

ngAfterViewInit(){
 

}

}
