import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-audio-circles',
  templateUrl: './audio-circles.component.html',
  styleUrls: ['./audio-circles.component.scss'],
})
export class AudioCirclesComponent implements OnInit, AfterViewInit {
  yellow = "#FFC455"
  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;
  @Output() sendAvDuration = new EventEmitter<string>();

  myAudio: any
  pauseTime: any
  mediaPercent = JSON.parse(localStorage.getItem("mediaPercent"))
  interval: any
  t: any
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  localStorageFreeScreens = localStorage.getItem("freeScreens");
  freeScreens = this.localStorageFreeScreens!= "undefined" ? JSON.parse(this.localStorageFreeScreens) : "";
  scrId: any
  reachedLimit = false;
  enableAlert = false;
  isAdults: boolean = true; 

  @ViewChild('audio') audio;
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");

  constructor(
    private captureService: NgxCaptureService,
    private service: AdultsService,
    private router: Router,
    private url: ActivatedRoute
  ) {
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    
    var str = this.router.url
    var lastSlash = str.lastIndexOf("/");
    str = str.substring(lastSlash + 2);
    this.scrId = str
    console.log("str", str, "id", this.scrId)

    if ((this.loginResponse.Subscriber != 1)) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
  }

  getTime() {
    
    
    this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))
  }

  checkPauseTime() {
    let aud: any = document.getElementById("aud1");
    this.pauseTime = ((this.mediaPercent / 100) * aud.duration)
    if (aud.currentTime > this.pauseTime) {
      this.reachedLimit = true;
      aud.pause();
      this.enableAlert = true;
      // window.alert('You have reached free limit')
    }
  }

  gotoTranscript(){
    const url = this.router.url+"t";
    this.router.navigate([url]);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngAfterViewInit() {
    this.audio.nativeElement.onplaying = (event) => {
      if (this.reachedLimit) {
        this.audio.nativeElement.pause();
        this.enableAlert = true;
        // window.alert('You have reached free limit')
      }

    };
    this.setAudioControlsBackground();
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? 'rgb(18, 15, 64)' : '#0C2B5F';

    // Create a new <style> element
    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;

    // Append the <style> element to the document head
    document.head.appendChild(style);
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
  }
}
