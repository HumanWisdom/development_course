import { Component, OnInit,OnDestroy,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";

@Component({
  selector: 'app-audio-bullet',
  templateUrl: './audio-bullet.component.html',
  styleUrls: ['./audio-bullet.component.scss'],
})
export class AudioBulletComponent implements OnInit,OnDestroy,AfterViewInit{
yellow="#FFC455"
@Input() list: any;
@Input() bg: any;
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
reachedLimit = false;
enableAlert = false;

@ViewChild('audio') audio;
@ViewChild('screen', { static: true }) screen: any;

constructor(
  private captureService:NgxCaptureService,
  private service: AdultsService,
  private router: Router,
  private url: ActivatedRoute
) {
  this.url.queryParams.subscribe(params => {
    this.t = params['t'];
  })
}

ngOnInit() {
  console.log(this.audioLink,this.mediaPercent,this.loginResponse,this.list)
  var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     this.scrId=str
     console.log("str",str,"id",this.scrId)


     if ((this.loginResponse.Subscriber != 1)) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
}



getTime(){
  console.log(this.audio)
  console.log(this.audio.audio.nativeElement.currentTime)
  this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))
}
checkPauseTime(){
  let aud: any = document.getElementById("aud1");
    this.pauseTime = ((this.mediaPercent / 100) * aud.duration)
    if (aud.currentTime > this.pauseTime) {
      this.reachedLimit = true;
      aud.pause();
      this.enableAlert = true;
      // window.alert('You have reached free limit')
    }
}
ngOnDestroy(){
  if (this.interval) {
    clearInterval(this.interval);
 }
}

ngAfterViewInit(){
  this.audio.nativeElement.onplaying = (event) => {
    if (this.reachedLimit) {
      this.audio.nativeElement.pause();
      this.enableAlert = true;
      // window.alert('You have reached free limit')
    }
  };
}

getAlertcloseEvent(event) {
  this.enableAlert = false;
}
}
