import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { state } from '@angular/animations';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-audio-content',
  templateUrl: './audio-content.component.html',
  styleUrls: ['./audio-content.component.scss'],
})
export class AudioContentComponent implements OnInit, OnDestroy, AfterViewInit {

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
          return 'orange';
    },
    getSelectionBarColor: (value: number): string => {
      if (value >= 1) {
          return 'orange';
      }
      return '#2AE02A';
    }
  };
  yellow = "#FFC455"
  @Input() bg: string;
  @Input() title: string;
  @Input() audioLink: string;
  audioElement: HTMLAudioElement | null = null;
  currentTime: number = 0;
  duration: number = 0;
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
  @ViewChild('audio') audio;
  @ViewChild('screen', { static: true }) screen: any;
  pageaction = localStorage.getItem("pageaction");
  reachedLimit = false;
  enableAlert = false;
  constructor(
    private service: AdultsService,
    private router: Router, private url: ActivatedRoute,
  ) {
    this.url.queryParams.subscribe(params => {
      this.t = params['t'];
    })
  }
  handleTimeUpdate = () => {
    this.currentTime = this.audioElement.currentTime;
    this.getProgressPercentage();
  }

  handleMetadataLoaded = () => {
    this.duration = this.audioElement.duration;
  }

  getProgressPercentage() {
    this.value= ((this.currentTime / this.duration) * 100);
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }


  ngOnInit() {
    this.audioElement = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioElement.addEventListener('timeupdate', this.handleTimeUpdate);
    this.audioElement.addEventListener('loadedmetadata', this.handleMetadataLoaded);
    const audio = document.querySelector('audio');
    const durationContainer = document.getElementById('duration');
    const seekSlider = document.getElementById('seek-slider');
    const currentTimeContainer = document.getElementById('current-time');
    const playIconContainer = document.getElementById('play-icon');
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const volumeSlider = document.getElementById('volume-slider');
    const outputContainer = document.getElementById('volume-output');
    const volume=document.getElementById('volume-control');
    const divVolume=document.getElementById('divVolume');
    divVolume.style.display="none";

    volume.addEventListener("click", () => divVolume.style.display ="block");
    volume.addEventListener("blur", () => divVolume.style.display="none");

      audio.addEventListener('loadedmetadata', () => {
        displayDuration
      });
     

      const setSliderMax = () => {
        seekSlider["max"] = Math.floor(audio.duration).toString();
      }

      seekSlider.addEventListener('input', () => {
         currentTimeContainer.textContent = calculateTime(seekSlider["value"]);
      });

      const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
      }

      const displayDuration = () => {
        durationContainer.textContent = calculateTime(audio.duration);
      }
      
      if (audio.readyState > 0) {
        displayDuration();
        setSliderMax();
      } else {
        audio.addEventListener('loadedmetadata', () => {
          displayDuration();
          setSliderMax();
        });
      }
    let playState  = 'play';
    playIconContainer.addEventListener('click', () => {
      if(playState  === 'play') {
        audio.play();
        //playAnimation.playSegments([14, 27], true);
        playState  = 'pause';
      } else {
        audio.pause();
      // playAnimation.playSegments([0, 14], true);
      playState  = 'play';
      }
      console.log(seekSlider["max"])
    });

    audio.addEventListener('timeupdate', () => {
      seekSlider["value"] = Math.floor(audio.currentTime);
      currentTimeContainer.textContent = calculateTime(seekSlider["value"]);
    });

    seekSlider.addEventListener('input', () => {
      currentTimeContainer.textContent = calculateTime(seekSlider["value"]);
      if(!audio.paused) {
        // cancelAnimationFrame(raf);
      }
    });
    
    seekSlider.addEventListener('change', () => {
      audio.currentTime = seekSlider["value"];
      if(!audio.paused) {
        // requestAnimationFrame(whilePlaying);
      }
    });

    // let raf=null;
    const whilePlaying = () => {
      seekSlider["value"] = Math.floor(audio.currentTime);
      currentTimeContainer.textContent = calculateTime(seekSlider["value"]);
      audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider["value"] / seekSlider["max"] * 100}%`);
      // raf = requestAnimationFrame(whilePlaying);
      if (this.reachedLimit) {
        audio.pause();
        this.enableAlert = true;

      }
    }



    volumeSlider.addEventListener('input', (e) => {
      const value = e.target["value"];

      outputContainer.textContent = value;
      audio.volume = value / 100;
    });


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
    /*this.audio.nativeElement.onplaying = (event) => {
      if (this.reachedLimit) {
        this.audio.nativeElement.pause();
        this.enableAlert = true;
        // window.alert('You have reached free limit')
      }
    }; */
  }


  

  checkPauseTime() {
    let aud: any =document.querySelector('audio');
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

  onChange(value) {
   // let aud: any = document.getElementById("aud1");
     let aud: any =document.querySelector('audio');
    aud.playbackRate = Number(value);
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
  }
}
