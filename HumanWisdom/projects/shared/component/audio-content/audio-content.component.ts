import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-audio-content',
  templateUrl: './audio-content.component.html',
  styleUrls: ['./audio-content.component.scss'],
  // styleUrls: [ ProgramType.Adults == SharedService.ProgramId ?  './audio-content.component.scss' : './audio-content-teenager.component.scss']
})
export class AudioContentComponent implements OnInit, OnDestroy, AfterViewInit {
  yellow = "#FFC455"
  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;
  @Input() transcriptPage: string;
  
  @Output() sendAvDuration = new EventEmitter<string>();
  myAudio: any
  pauseTime: any
  mediaPercent = JSON.parse(localStorage.getItem("mediaPercent"))
  interval: any
  t: any
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  localStorageFreeScreens = localStorage.getItem("freeScreens");
  freeScreens = this.localStorageFreeScreens != "undefined" ? JSON.parse(this.localStorageFreeScreens) : "";
  scrId: any
  @ViewChild('audio') audio;
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
  reachedLimit = false;
  enableAlert = false;
  isAdults: boolean = true; 

  constructor(
    private service: AdultsService,
    private router: Router, private url: ActivatedRoute,
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
    //str = str.replace(/\D/g,'');
    this.scrId = str

    //call api to geta percent
    this.service.mediaPercent(this.scrId).subscribe(res => {
      this.mediaPercent = res[0].MediaPrcnt
    })
    var str = this.router.url
    var lastSlash = str.lastIndexOf("/");
    str = str.substring(lastSlash + 2);
    this.scrId = str

    if ((this.loginResponse.Subscriber != 1)) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
  }

  ngAfterViewInit(): void {
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

  getTime() {
    let aud: any = document.getElementById("aud1");
    this.sendAvDuration.emit(JSON.parse(aud.currentTime))
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

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }

  }

  gotoTranscript() {
    const url = this.router.url + "t";
    this.router.navigate([url]);
  }

  onChange(value) {
    let aud: any = document.getElementById("aud1");
    aud.playbackRate = Number(value);
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
  }
}
