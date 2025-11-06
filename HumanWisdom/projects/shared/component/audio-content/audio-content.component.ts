import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-audio-content',
  templateUrl: './audio-content.component.html',
  styleUrls: ['./audio-content.component.scss'],
})
export class AudioContentComponent implements OnInit, OnDestroy, AfterViewInit {
  yellow = "#FFC455";

  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;
  @Input() transcriptPage: string;

  @Output() sendAvDuration = new EventEmitter<string>();

  myAudio: any;
  pauseTime: any;
  mediaPercent = JSON.parse(localStorage.getItem("mediaPercent"));
  interval: any;
  t: any;
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
  localStorageFreeScreens = localStorage.getItem("freeScreens");
  freeScreens = this.localStorageFreeScreens !== "undefined"
    ? JSON.parse(this.localStorageFreeScreens)
    : "";
  scrId: any;

  @ViewChild('audio') audio;
  @ViewChild('screen', { static: true }) screen: any;

  pageaction = localStorage.getItem("pageaction");
  reachedLimit = false;
  enableAlert = false;
  isAdults = true;

  constructor(
    private readonly service: AdultsService,
    private readonly router: Router,
    private readonly url: ActivatedRoute
  ) {
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    });

    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
  }

  ngOnInit() {
    let str = this.router.url;
    const lastSlash = str.lastIndexOf("/");
    str = str.substring(lastSlash + 2);
    this.scrId = str;

    // Call API to get media percentage
    this.service.mediaPercent(this.scrId).subscribe(res => {
      this.mediaPercent = res[0].MediaPrcnt;
    });

    if (this.loginResponse.Subscriber !== 1) {
      if (!this.freeScreens.includes(Number.parseInt(this.scrId))) {
        this.interval = setInterval(() => this.reachedLimit ? null : this.checkPauseTime(), 1000);
      }
    }
  }

  ngAfterViewInit(): void {
    this.audio.nativeElement.onplaying = () => {
      if (this.reachedLimit) {
        this.audio.nativeElement.pause();
        this.enableAlert = true;
      }
    };
    this.setAudioControlsBackground();
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? 'rgb(18, 15, 64)' : '#0C2B5F';

    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
    document.head.appendChild(style);
  }

  getTime() {
    const aud: any = document.getElementById("aud1");
    this.sendAvDuration.emit(JSON.parse(aud.currentTime));
  }

  checkPauseTime() {
    const aud: any = document.getElementById("aud1");
    this.pauseTime = (this.mediaPercent / 100) * aud.duration;
    if (aud.currentTime > this.pauseTime) {
      this.reachedLimit = true;
      aud.pause();
      this.enableAlert = true;
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

  onChange(value: string) {
    const aud: any = document.getElementById("aud1");
    aud.playbackRate = Number(value);
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
  }
}
