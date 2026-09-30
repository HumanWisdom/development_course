import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

@Component({
  selector: 'HumanWisdom-youtube-content',
  templateUrl: './youtube-content.component.html',
  styleUrls: ['./youtube-content.component.scss'],
})
export class YoutubeContentComponent implements OnInit, OnDestroy {
  public videoLink: SafeResourceUrl;
  public linkcode: any;
  public title: string = '';
  public headerTitle: string = 'Events';
  public isAdults: boolean = true;
  public imgUrl: string = '';
  public isPlaying: boolean = false;
  public autoPlay: boolean = false;
  public isCcOn: boolean = false;
  public isFullscreen: boolean = false;
  public isPaused: boolean = false;
  public ytVideoTitle: string = '';
  public ytAuthorName: string = '';
  public showControls: boolean = false;
  private controlsTimeout: any = null;

  onPlayerAreaMouseMove() {
    this.showControls = true;
    if (this.controlsTimeout) {
      clearTimeout(this.controlsTimeout);
    }
    this.controlsTimeout = setTimeout(() => {
      if (!this.isPaused) {
        this.showControls = false;
        this.cdr.detectChanges();
      }
    }, 2500);
    this.cdr.detectChanges();
  }

  onPlayerAreaMouseLeave() {
    if (!this.isPaused) {
      this.showControls = false;
      this.cdr.detectChanges();
    }
  }
  public currentTime: number = 0;
  public duration: number = 0;
  public progressPercent: number = 0;

  private progressPollTimer: any = null;
  private ytPlayer: any = null;

  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('progressBarRef') progressBarRef: ElementRef;

  @Input() bg: string;

  private onFullscreenChange = () => {
    this.isFullscreen = !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement
    );
    this.cdr.detectChanges();
  };

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private router: Router,
    private location: Location,
    private navigationService: NavigationService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    this.linkcode = this.route.snapshot.paramMap.get('videolink');
    if (this.linkcode) {
      try { this.linkcode = decodeURIComponent(this.linkcode); } catch (e) {}
    }

    let accesscode = 'rdtfghjhfdg';
    if (this.linkcode && this.linkcode.includes('=')) {
      accesscode = this.linkcode.split('=')[1];
      this.linkcode = this.linkcode.split('=')[0];
    } else if (this.linkcode && this.linkcode.includes('%3D')) {
      accesscode = this.linkcode.split('%3D')[1];
      this.linkcode = this.linkcode.split('%3D')[0];
    }
    if (this.linkcode && this.linkcode.includes('?')) this.linkcode = this.linkcode.split('?')[0];
    if (this.linkcode && this.linkcode.includes('&')) this.linkcode = this.linkcode.split('&')[0];

    let access = 'free';
    if (accesscode === 'rdtfghjhfdg') access = 'free';
    if (accesscode === 'vncbxdfchgvxd') access = 'paid';

    let sub = localStorage.getItem('Subscriber');
    if (sub === '0' && access === 'paid') {
      this.router.navigate(['/subscription/start-your-free-trial']);
    }

    if (window.history.state?.class) {
      this.bg = window.history.state.class;
      localStorage.setItem('program-guide-class', this.bg);
      localStorage.setItem('videolink', this.linkcode);
    } else if (this.linkcode === localStorage.getItem('videolink')) {
      this.bg = localStorage.getItem('program-guide-class');
    } else {
      localStorage.setItem('videolink', null);
      localStorage.setItem('program-guide-class', null);
      this.bg = 'dark_blue_w1';
    }

    if (window.history.state) {
      if (window.history.state.title) this.title = window.history.state.title;
      if (window.history.state.headerTitle) {
        this.headerTitle = window.history.state.headerTitle;
        localStorage.setItem('youtubelinkHeaderTitle', this.headerTitle);
      }
      if (window.history.state.imgUrl) {
        this.imgUrl = window.history.state.imgUrl;
        localStorage.setItem('youtubelinkImgUrl', this.imgUrl);
      }
      if (window.history.state.autoPlay) this.autoPlay = true;
    }

    if (!this.imgUrl) {
      const savedImg = localStorage.getItem('youtubelinkImgUrl');
      if (savedImg && savedImg !== 'null' && savedImg !== 'undefined') this.imgUrl = savedImg;
    }

    if (!window.history.state?.headerTitle) {
      const fromIndex = localStorage.getItem('fromIndex') === 'true';
      if (fromIndex) {
        const savedHeader = localStorage.getItem('youtubelinkHeaderTitle');
        if (savedHeader && savedHeader !== 'null') this.headerTitle = savedHeader;
      } else {
        this.headerTitle = 'Events';
      }
    }

    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  // ── YouTube IFrame API postMessage handler ────────────────────────────
  private onMessage = (event: MessageEvent) => {
    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      if (!data) return;

      // State change: 1=playing, 2=paused, 0=ended
      if (data.event === 'onStateChange') {
        this.ngZone.run(() => {
          if (data.info === 1) {
            this.isPaused = false;
            this.startProgressPolling();
          } else if (data.info === 2) {
            this.isPaused = true;
            this.stopProgressPolling();
          } else if (data.info === 0) {
            this.isPaused = true;
            this.progressPercent = 100;
            this.stopProgressPolling();
          }
          this.cdr.detectChanges();
        });
      }

      if (data.event === 'onReady') {
        this.ngZone.run(() => {
          this.sendYtCommand('getDuration', []);
          this.sendYtCommand('getCurrentTime', []);
          this.cdr.detectChanges();
        });
      }

      if (data.event === 'infoDelivery' && data.info) {
        this.ngZone.run(() => {
          if (typeof data.info.currentTime === 'number') {
            this.currentTime = Math.floor(data.info.currentTime);
          }
          if (typeof data.info.duration === 'number' && data.info.duration > 0) {
            this.duration = Math.floor(data.info.duration);
          }
          if (this.duration > 0) {
            this.progressPercent = Math.min(100, (this.currentTime / this.duration) * 100);
          }
          this.cdr.detectChanges();
        });
      }
    } catch (e) {}
  };

  ngOnInit() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.addEventListener('MSFullscreenChange', this.onFullscreenChange);
    window.addEventListener('message', this.onMessage);

    if (this.autoPlay || window.history.state?.title) {
      this.playVideo();
    } else {
      this.isPlaying = false;
    }

    this.fetchYouTubeDetails();
  }

  fetchYouTubeDetails() {
    if (!this.linkcode) return;
    const cleanId = this.linkcode.includes('=')
      ? this.linkcode.split('=')[0]
      : (this.linkcode.includes('%3D') ? this.linkcode.split('%3D')[0] : this.linkcode);

    const oEmbedUrl = `https://noembed.com/embed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + cleanId)}`;
    fetch(oEmbedUrl)
      .then(res => res.json())
      .then(data => {
        if (data && data.title) {
          this.ngZone.run(() => {
            this.ytVideoTitle = data.title;
            if (data.author_name) this.ytAuthorName = data.author_name;
            this.cdr.detectChanges();
          });
        }
      })
      .catch(() => {});
  }

  // ── Load YouTube IFrame Player SDK ────────────────────────────────────
  private loadYtSdk() {
    if ((window as any).YT && (window as any).YT.Player) {
      this.initYtPlayer();
      return;
    }
    const existing = document.getElementById('ytIframeApiScript');
    if (!existing) {
      const tag = document.createElement('script');
      tag.id = 'ytIframeApiScript';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }
    (window as any).onYouTubeIframeAPIReady = () => {
      this.ngZone.run(() => this.initYtPlayer());
    };
  }

  private initYtPlayer() {
    if (!document.getElementById('ytPlayerIframe')) return;
    try {
      this.ytPlayer = new (window as any).YT.Player('ytPlayerIframe', {
        events: {
          onReady: (event: any) => {
            this.ngZone.run(() => {
              // Apply CC state on ready
              if (this.isCcOn) {
                try {
                  event.target.loadModule('captions');
                  event.target.setOption('captions', 'track', { languageCode: 'en' });
                } catch (e) {}
              } else {
                try {
                  event.target.setOption('captions', 'track', {});
                  event.target.unloadModule('captions');
                } catch (e) {}
              }
              this.cdr.detectChanges();
            });
          },
          onStateChange: (event: any) => {
            this.ngZone.run(() => {
              if (event.data === 1) {
                this.isPaused = false;
                this.startProgressPolling();
              } else if (event.data === 2) {
                this.isPaused = true;
                this.stopProgressPolling();
              } else if (event.data === 0) {
                this.isPaused = true;
                this.progressPercent = 100;
                this.stopProgressPolling();
              }
              this.cdr.detectChanges();
            });
          }
        }
      });
    } catch (e) {}
  }

  ngOnDestroy() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.onFullscreenChange);
    document.removeEventListener('MSFullscreenChange', this.onFullscreenChange);
    window.removeEventListener('message', this.onMessage);
    this.stopProgressPolling();
  }

  // ── Progress polling (every 400ms) ───────────────────────────────────
  private startProgressPolling() {
    this.stopProgressPolling();
    this.progressPollTimer = setInterval(() => {
      let resolved = false;
      if (this.ytPlayer && typeof this.ytPlayer.getCurrentTime === 'function') {
        try {
          const cur = this.ytPlayer.getCurrentTime();
          const dur = this.ytPlayer.getDuration();
          if (typeof cur === 'number' && !isNaN(cur)) {
            this.currentTime = Math.floor(cur);
            resolved = true;
          }
          if (typeof dur === 'number' && !isNaN(dur) && dur > 0) {
            this.duration = Math.floor(dur);
          }
          if (this.duration > 0) {
            this.progressPercent = Math.min(100, (this.currentTime / this.duration) * 100);
          }
          this.cdr.detectChanges();
        } catch (e) {}
      }
      if (!resolved) {
        const iframe = document.getElementById('ytPlayerIframe') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'getCurrentTime', args: [] }), 'https://www.youtube.com');
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'getDuration', args: [] }), 'https://www.youtube.com');
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), 'https://www.youtube.com');
        }
      }
    }, 400);
  }

  private stopProgressPolling() {
    if (this.progressPollTimer) {
      clearInterval(this.progressPollTimer);
      this.progressPollTimer = null;
    }
  }

  getThumbnailUrl(): string {
    if (this.imgUrl && this.imgUrl.trim() !== '') return this.imgUrl;
    if (this.linkcode) return `https://img.youtube.com/vi/${this.linkcode}/sddefault.jpg`;
    return '';
  }

  onThumbnailError(event: any) {
    if (this.linkcode && event?.target && !event.target.src.includes('img.youtube.com/vi/')) {
      event.target.src = `https://img.youtube.com/vi/${this.linkcode}/hqdefault.jpg`;
    }
  }

  playVideo() {
    this.isPlaying = true;
    this.isPaused = false;
    this.currentTime = 0;
    this.duration = 0;
    this.progressPercent = 0;

    const origin = window.location.origin; // raw origin — NOT encoded, YouTube uses this to validate postMessage
    // cc_load_policy=0 by default — CC off until user presses CC button
    const code = `https://www.youtube.com/embed/${this.linkcode}?autoplay=1&controls=0&cc_load_policy=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&enablejsapi=1&fs=0&playsinline=1&widget_referrer=${encodeURIComponent(origin)}&origin=${encodeURIComponent(origin)}`;
    this.videoLink = this.getSafeUrl(code);

    setTimeout(() => this.loadYtSdk(), 500);
  }

  private sendYtCommand(func: string, args: any[] = []) {
    const iframe = document.getElementById('ytPlayerIframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func, args }),
        'https://www.youtube.com'
      );
    }
  }

  // ── Play / Pause ──────────────────────────────────────────────────────
  togglePlayPause() {
    this.isPaused = !this.isPaused;
    if (this.ytPlayer && typeof this.ytPlayer.pauseVideo === 'function') {
      try {
        this.isPaused ? this.ytPlayer.pauseVideo() : this.ytPlayer.playVideo();
        return;
      } catch (e) {}
    }
    this.sendYtCommand(this.isPaused ? 'pauseVideo' : 'playVideo');
  }

  // ── CC toggle — uses YouTube's native caption module ─────────────────
  toggleCc() {
    this.isCcOn = !this.isCcOn;

    if (this.isCcOn) {
      // Turn ON — load captions module and set English track
      if (this.ytPlayer && typeof this.ytPlayer.loadModule === 'function') {
        try {
          this.ytPlayer.loadModule('captions');
          this.ytPlayer.setOption('captions', 'track', { languageCode: 'en' });
        } catch (e) {}
      }
      this.sendYtCommand('loadModule', ['captions']);
      this.sendYtCommand('setOption', ['captions', 'track', { languageCode: 'en' }]);
    } else {
      // Turn OFF — unload captions module
      if (this.ytPlayer && typeof this.ytPlayer.setOption === 'function') {
        try {
          this.ytPlayer.setOption('captions', 'track', {});
          this.ytPlayer.unloadModule('captions');
        } catch (e) {}
      }
      this.sendYtCommand('setOption', ['captions', 'track', {}]);
      this.sendYtCommand('unloadModule', ['captions']);
    }

    this.cdr.detectChanges();
  }

  // ── Seek via progress bar click ───────────────────────────────────────
  onProgressBarClick(event: MouseEvent) {
    const bar = event.currentTarget as HTMLElement;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    this.progressPercent = ratio * 100;
    this.sendYtCommand('seekTo', [ratio * this.duration, true]);
  }

  // ── Fullscreen ────────────────────────────────────────────────────────
  toggleFullscreen() {
    const container = document.getElementById('youtubeVideoWrapper');
    if (!container) return;
    if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
      (container.requestFullscreen || (container as any).webkitRequestFullscreen || (container as any).msRequestFullscreen).call(container);
      this.isFullscreen = true;
    } else {
      (document.exitFullscreen || (document as any).webkitExitFullscreen || (document as any).msExitFullscreen).call(document);
      this.isFullscreen = false;
    }
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  getSafeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url != null && url !== this.router.url && !url.includes('home') && !url.includes('dashboard')) {
      this.router.navigateByUrl(url);
      return;
    }

    let navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
    if (navFrom && navFrom != null && navFrom != 'null' && navFrom !== this.router.url) {
      this.router.navigateByUrl(navFrom);
      return;
    }

    const relationshipsEventSource = localStorage.getItem('relationshipsEventSource');
    if (relationshipsEventSource === 'true') {
      localStorage.removeItem('relationshipsEventSource');
      const prefix = this.isAdults ? '/adults' : '/teenagers';
      this.router.navigate([prefix + '/relationships/s47000']);
      return;
    }

    if (this.router.url.includes('/curated/youtubelink/')) {
      const prefix = this.isAdults ? '/adults' : '/teenagers';
      this.router.navigate([prefix + '/relationships/s47000']);
      return;
    }

    try {
      this.location.back();
    } catch (error) {
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
}
