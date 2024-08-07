import { Component, OnInit,Input,ViewChild,  ElementRef,AfterViewInit,Output,EventEmitter, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

@Component({
  selector: 'app-pyramid-content',
  templateUrl: './pyramid-content.component.html',
  styleUrls: ['./pyramid-content.component.scss'],
})
export class PyramidContentComponent implements OnInit,OnDestroy,AfterViewInit{
  yellow="#FFC455"
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
  localFreeScreens =localStorage.getItem("freeScreens");
  freeScreens= this.localFreeScreens != "undefined"? JSON.parse(localStorage.getItem("freeScreens")):"";
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

  var str=this.router.url
    var lastSlash = str.lastIndexOf("/");
     str=str.substring(lastSlash+2);
     this.scrId=str

     if ((this.loginResponse.Subscriber != 1)) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
}

getTime(){


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


transcript(){
  this.router.navigate([this.router.url+"t"]);
}

}
