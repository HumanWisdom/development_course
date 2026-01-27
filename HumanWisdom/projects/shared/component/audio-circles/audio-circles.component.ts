import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-audio-circles',
  templateUrl: './audio-circles.component.html',
  styleUrls: ['./audio-circles.component.scss'],
})
export class AudioCirclesComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;
  @Output() sendAvDuration = new EventEmitter<string>();

  pauseTime: any
  mediaPercent = JSON.parse(localStorage.getItem("mediaPercent"))
  interval: any
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  localStorageFreeScreens = localStorage.getItem("freeScreens");
  freeScreens = this.localStorageFreeScreens!= "undefined" ? JSON.parse(this.localStorageFreeScreens) : "";
  scrId: any
  reachedLimit = false;
  enableAlert = false;
  isAdults: boolean = true; 

  @ViewChild('audio') audio;
  pageaction = localStorage.getItem("pageaction");

  constructor(
    private router: Router
  ) {
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

    if ((this.loginResponse.Subscriber != 1)) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
  }

  getTime() {
    this.sendAvDuration.emit(this.audio.audio.nativeElement.currentTime.toString())
  }

  checkPauseTime() {
    let aud: any = this.audio.audio.nativeElement;
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
    this.audio.audio.nativeElement.onplaying = (event) => {
      if (this.reachedLimit) {
        this.audio.audio.nativeElement.pause();
        this.enableAlert = true;
        // window.alert('You have reached free limit')
      }

    };
  }



  getAlertcloseEvent(event) {
    this.enableAlert = false;
  }
}
