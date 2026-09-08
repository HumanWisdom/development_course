import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgNavigatorShareService } from 'ng-navigator-share';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { Subscription } from 'rxjs';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  providers: [provideAnimations()],
  styleUrls: ['./s3-video.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state(
        'previous',
        style({ transform: 'translateY(-100%)', opacity: 0 })
      ),
      state(
        'next',
        style({ transform: 'translateY(100%)', opacity: 0 })
      ),
      state('active', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('previous => active', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition('next => active', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition('active => previous', [
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(-100%)', opacity: 0 })
        ),
      ]),
      transition('active => next', [
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class S3VideoComponent implements OnInit, OnDestroy, AfterViewInit {
  public tocColor = 'white';
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort = true;
  public wisdomShortOrderList: any[] = [];
  public allWisdomShort: any[] = [];
  public isLoading = false;
  public isSwiped = false;
  public direction: 'up' | 'down' = 'up';
  public swiped = 'up';
  public showSwipeUp = true;
  public currentIndex = 0;
  public currentTime = 0;
  public isSubscriber = false;
  public isSwipeAllow = true;
  public isAdults = true;
  public isIOS = false;
  private isSwiping = false;
  private activeVideoElement: HTMLVideoElement | null = null;
  private trackedVideos: Set<HTMLVideoElement> = new Set();
  private pendingTimers: any[] = [];
  private currentPlaybackId = 0;
  private routerSub!: Subscription;
  public isPortrait = false;
  public fromIndex = false;
  public headerTitle: string = 'Short Videos';
  baseUrl:string;
  path:any;
  private hasTrackedThisVideo = false;
  private isFreeShort = false;
  public canRender = false;


  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('swipeContainer') swipeContainer!: ElementRef;

  // Marked dependencies as readonly — they are never reassigned
  constructor(private ngNavigatorShareService: NgNavigatorShareService,
    private readonly route: ActivatedRoute,
    private readonly _sanitizer: DomSanitizer,
    private readonly location: Location,
    private readonly router: Router,
    private readonly navigationService: NavigationService,
    private readonly service: CommonService
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
    this.isIOS = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1));

    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.stopAllVideos(false);
      }
    });
  }

  private initializeData(): void {
    const url = window.location.href;
    // Support both route params and query params for videolink/title
    const routeParams = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParamMap;
    const videolinkParam = routeParams.get('videolink') || queryParams.get('videolink') || localStorage.getItem('wisdomvideolink');
    const titleParam = routeParams.get('title') || queryParams.get('title') || localStorage.getItem('wisdomvideotitle');

    this.linkcode = videolinkParam ?? '';
    this.videoTitle = titleParam ? decodeURIComponent(titleParam) : (localStorage.getItem('wisdomvideotitle') ?? '');

    if (url.includes('videopage')) {
      this.wisdomshort = false;
      let name = this.linkcode?.split('-videos')[0];
      let link = this.linkcode?.split('-videos')[1];
      // this.linkcode = `${name}/videos${link?.replaceAll('-', '/')}`;
      // if (this.linkcode?.includes('teenagers')) {
      //   this.linkcode = this.linkcode.replaceAll('-', '/');
      // }
      this.linkcode = this.linkcode.replaceAll('-', '/');
      this.linkcode = this.linkcode.replaceAll('~', '-');
    }
    this.isSubscriber = localStorage.getItem('Subscriber') === '1';
    const fromIndex = localStorage.getItem('fromIndex') === 'true';
    this.isSwipeAllow = this.wisdomshort && this.isSubscriber && fromIndex ? true : false;

    if (this.isSwipeAllow) {
      localStorage.setItem('isSwipeAllow', 'true');
      const shortList = localStorage.getItem('wisdomShortData');
      if (shortList) {
        const wisdomShortList = JSON.parse(shortList);
        this.wisdomShortOrderList = wisdomShortList
          .filter((element: any) => element && (element.VideoUrl || element.YoutubeLink || element.YoutubeUrl || element.Url))
          .map((element: any, index: number) => {
            const vUrl = (element.VideoUrl || element.YoutubeLink || element.YoutubeUrl || element.Url || '').toString();
            const linklist = vUrl.split('/');
            const linkcode = linklist[linklist.length - 1];
            const code = linkcode.startsWith('http')
              ? linkcode
              : `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${linkcode}`;
            return {
              url: this.getSafeUrl(code),
              order: index,
              title: element.Title || '',
              code: linkcode,
              type: element.Type || element.TypeLabel || '',
            };
          });

        // Prefer exact match by link code over title includes
        const normalizedLinkcode = (this.linkcode || '').trim();
        this.currentIndex = this.wisdomShortOrderList.findIndex(
          (x: any) => x.code === normalizedLinkcode
        );

        // Fallback: if not found by code, try title match
        if (this.currentIndex === -1 && this.videoTitle) {
          this.currentIndex = this.wisdomShortOrderList.findIndex((x: any) =>
            (x.title || '').toLowerCase().includes((this.videoTitle || '').toLowerCase())
          );
        }

        // If still not found, inject the clicked video as the first item
        if (this.currentIndex === -1 && normalizedLinkcode) {
          const injectedCode = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${normalizedLinkcode}`;
          const injectedItem: any = {
            url: this.getSafeUrl(injectedCode),
            order: -1,
            title: this.videoTitle || 'Selected Video',
            code: normalizedLinkcode,
            type: '',
          };
          this.wisdomShortOrderList.unshift(injectedItem);
          this.currentIndex = 0;
        }

        this.updateHeaderTitle();

        if (this.currentIndex > 2 && !this.isSubscriber) {
          this.router.navigate([
            `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
          ]);
        }
      }
    }
  }

  ngOnInit(): void {
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
    this.path = this.router.url;
    const url = window.location.href;
    this.wisdomshort = !url.includes('videopage');

    const routeParams = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParamMap;
    const videolinkParam = routeParams.get('videolink') || queryParams.get('videolink') || localStorage.getItem('wisdomvideolink');
    const titleParam = routeParams.get('title') || queryParams.get('title') || localStorage.getItem('wisdomvideotitle');
    this.linkcode = videolinkParam ?? '';
    this.videoTitle = titleParam ? decodeURIComponent(titleParam) : (localStorage.getItem('wisdomvideotitle') ?? '');

    const fromIndex = localStorage.getItem('fromIndex') === 'true';
    this.fromIndex = fromIndex;

    this.updateHeaderTitle();

    const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
    const isSubscriber = localStorage.getItem('Subscriber') === '1';

    if (this.wisdomshort) {
      const shortId = this.extractShortIdFromCode((this.linkcode || '').toString());
      if (shortId !== null) {
        this.service.CheckShortsIsFree(shortId).subscribe({
          next: (isFree: any) => {
            if (isFree === true) {
              this.isFreeShort = true;
              this.initializeData();
              const allowSwipe = isLoggedIn && isSubscriber && fromIndex;
              localStorage.setItem('isSwipeAllow', allowSwipe ? 'true' : 'false');
              this.isSwipeAllow = allowSwipe;
              const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
              this.videoLink = this.getSafeUrl(code);
              this.canRender = true;
              setTimeout(() => this.ensureAutoPlay(), 0);
            } else {
              if (isLoggedIn && isSubscriber) {
                this.initializeData();
                const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
                this.videoLink = this.getSafeUrl(code);
                if (fromIndex) {
                  localStorage.setItem('isSwipeAllow', 'true');
                  this.isSwipeAllow = true;
                } else {
                  localStorage.setItem('isSwipeAllow', 'false');
                  this.isSwipeAllow = false;
                }
                this.canRender = true;
                setTimeout(() => this.ensureAutoPlay(), 0);
              } else {
                localStorage.setItem('isSwipeAllow', 'false');
                this.isSwipeAllow = false;
                this.canRender = false;
                this.router.navigate([
                  `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
                ]);
                return;
              }
            }
          },
          error: () => {
            if (isLoggedIn && isSubscriber) {
              this.initializeData();
              const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
              this.videoLink = this.getSafeUrl(code);
              if (fromIndex) {
                localStorage.setItem('isSwipeAllow', 'true');
                this.isSwipeAllow = true;
              } else {
                localStorage.setItem('isSwipeAllow', 'false');
                this.isSwipeAllow = false;
              }
              this.canRender = true;
              setTimeout(() => this.ensureAutoPlay(), 0);
            } else {
              localStorage.setItem('isSwipeAllow', 'false');
              this.isSwipeAllow = false;
              this.canRender = false;
              this.router.navigate([
                `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
              ]);
              return;
            }
          }
        });
      } else {
        if (isLoggedIn && isSubscriber) {
          this.initializeData();
          const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
          this.videoLink = this.getSafeUrl(code);
          if (fromIndex) {
            localStorage.setItem('isSwipeAllow', 'true');
            this.isSwipeAllow = true;
          } else {
            localStorage.setItem('isSwipeAllow', 'false');
            this.isSwipeAllow = false;
          }
          this.canRender = true;
          setTimeout(() => this.ensureAutoPlay(), 0);
        } else {
          localStorage.setItem('isSwipeAllow', 'false');
          this.isSwipeAllow = false;
          this.canRender = false;
          this.router.navigate([
            `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
          ]);
          return;
        }
      }
    } else {
      this.initializeData();
      const code = `https://d1tenzemoxuh75.cloudfront.net/${this.linkcode}`;
      this.videoLink = this.getSafeUrl(code);
      localStorage.setItem('isSwipeAllow', 'false');
      this.isSwipeAllow = false;
      this.canRender = true;
      setTimeout(() => this.ensureAutoPlay(), 0);
    }
  }

  ngAfterViewInit(): void {
    if (!this.canRender || (this.wisdomshort && !this.videoLink)) {
      return;
    }
    if (this.swipeContainer && this.isSwipeAllow) {
      const hammertime = new Hammer(this.swipeContainer.nativeElement);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

      hammertime.on('swipeup', () => this.onSwipeUp());
      hammertime.on('swipedown', () => this.onSwipeDown());
    }
    
    this.ensureAutoPlay();
  }

  private clearTimers(): void {
    this.pendingTimers.forEach(t => clearTimeout(t));
    this.pendingTimers = [];
  }

  private safeTimeout(fn: () => void, delay: number): any {
    const timer = setTimeout(() => {
      this.pendingTimers = this.pendingTimers.filter(t => t !== timer);
      fn();
    }, delay);
    this.pendingTimers.push(timer);
    return timer;
  }

  public stopAndResetVideo(video: HTMLVideoElement | null | undefined): void {
    if (!video) return;
    try {
      video.pause();
      video.muted = true;
      video.currentTime = 0;
      video.removeAttribute('src');
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      
      video.load();
       this.checkVideoOrientation(video);
     
    } catch (_) { /* ignore */ }
  }

  /**
   * Stop ALL video elements — ensures zero ghost audio from previous slides or detached elements.
   */
  public stopAllVideos(muteOnly = false): void {
    this.clearTimers();
    this.currentPlaybackId++;

    if (this.activeVideoElement) {
      if (muteOnly) {
        try {
          this.activeVideoElement.pause();
          this.activeVideoElement.muted = true;
        } catch (_) {}
      } else {
        this.stopAndResetVideo(this.activeVideoElement);
      }
      this.activeVideoElement = null;
    }

    this.trackedVideos.forEach(v => {
      if (muteOnly) {
        try {
          v.pause();
          v.muted = true;
        } catch (_) {}
      } else {
        this.stopAndResetVideo(v);
      }
    });
    this.trackedVideos.clear();

    try {
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach((v: HTMLVideoElement) => {
        if (muteOnly) {
          try {
            v.pause();
            v.muted = true;
          } catch (_) {}
        } else {
          this.stopAndResetVideo(v);
        }
      });
    } catch (_) { /* ignore */ }
  }

  public ensureAutoPlay(): void {
    const playbackId = ++this.currentPlaybackId;
    this.clearTimers();
    this.safeTimeout(() => {
      this.playActiveVideo(playbackId);
    }, 50);
  }

  private playActiveVideo(playbackId: number): void {
    // If a newer swipe or navigation started, ignore stale attempt
    if (playbackId !== this.currentPlaybackId) {
      return;
    }

    // Locate the video element for the current slide
    const video = (this.videoPlayer?.nativeElement as HTMLVideoElement | undefined)
      || (document.querySelector('.video-wrapper video') as HTMLVideoElement | null)
      || (document.querySelector('video') as HTMLVideoElement | null);

    if (!video) {
      // Retry once if Angular hasn't completed DOM insertion yet
      this.safeTimeout(() => {
        if (playbackId === this.currentPlaybackId) {
          this.playActiveVideo(playbackId);
        }
      }, 50);
      return;
    }

    // Ensure all other videos are dead
    this.trackedVideos.forEach(v => {
      if (v !== video) {
        this.stopAndResetVideo(v);
        this.trackedVideos.delete(v);
      }
    });
    try {
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach((v: HTMLVideoElement) => {
        if (v !== video) {
          this.stopAndResetVideo(v);
        }
      });
    } catch (_) {}

    this.activeVideoElement = video;
    this.trackedVideos.add(video);

    video.muted = false;
    this.checkVideoOrientation(video);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn('Initial autoplay attempt blocked, retrying unmuted:', err);
        if (playbackId === this.currentPlaybackId && video) {
          setTimeout(() => {
            if (playbackId === this.currentPlaybackId && video) {
              video.muted = false;
              video.play().catch(secondErr => {
                console.warn('Second play attempt failed, fallback to muted autoplay:', secondErr);
                video.muted = true;
                video.play().catch(_ => {});
              });
            }
          }, 50);
        }
      });
    }
  }

  getSafeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoOrientation(videoEl?: HTMLVideoElement | EventTarget | null): void {
    const el = (videoEl as HTMLVideoElement) || (this.videoPlayer?.nativeElement as HTMLVideoElement | undefined) || (document.querySelector('video') as HTMLVideoElement | null);
    if (el) {
      const vw = el.videoWidth;
      const vh = el.videoHeight;
      if (vw && vh) {
        this.isPortrait = vh > vw;
      } else {
        setTimeout(() => {
          if (el && el.videoWidth && el.videoHeight) {
            this.isPortrait = el.videoHeight > el.videoWidth;
          }
        }, 200);
      }
      el.setAttribute('controlsList', 'nodownload nofullscreen');
    }
  }

  public updateHeaderTitle(): void {
    // 1. Check if current video in list has a Type
    if (this.isSwipeAllow && this.wisdomShortOrderList && this.wisdomShortOrderList.length && this.wisdomShortOrderList[this.currentIndex]) {
      const currentItem = this.wisdomShortOrderList[this.currentIndex];
      const rawType = (currentItem.type || currentItem.Type || currentItem.TypeLabel || '').toString().toLowerCase();
      if (rawType.includes('expert') || rawType.includes('voice')) {
        this.headerTitle = 'Expert tips';
        return;
      } else if (rawType.includes('in-depth') || rawType.includes('indepth') || rawType.includes('event')) {
        this.headerTitle = 'In-depth conversation';
        return;
      } else if (rawType.includes('real') || rawType.includes('teentalk') || rawType.includes('conversation')) {
        this.headerTitle = 'Real stories';
        return;
      } else if (rawType.includes('short')) {
        this.headerTitle = 'Short videos';
        return;
      }
    }

    // 2. Check saved wisdomVideoHeaderTitle or youtubelinkHeaderTitle
    const savedHeader = localStorage.getItem('wisdomVideoHeaderTitle') || localStorage.getItem('youtubelinkHeaderTitle');
    if (savedHeader && savedHeader !== 'null' && savedHeader !== 'undefined') {
      this.headerTitle = savedHeader;
      return;
    }

    // 3. Check selectedType from video library
    const selectedType = localStorage.getItem('wisdomShortsSelectedType');
    if (selectedType === 'expert_tips') {
      this.headerTitle = 'Expert tips';
      return;
    } else if (selectedType === 'in_depth') {
      this.headerTitle = 'In-depth conversation';
      return;
    } else if (selectedType === 'real_life') {
      this.headerTitle = 'Real stories';
      return;
    } else if (selectedType === 'short_videos') {
      this.headerTitle = 'Short videos';
      return;
    }

    // 4. Fallback check on title
    const titleLower = (this.videoTitle || '').toLowerCase();
    if (titleLower.includes('expert') || titleLower.includes('coach')) {
      this.headerTitle = 'Expert tips';
      return;
    }

    this.headerTitle = 'Short videos';
  }

  showLoader(): void {
    this.isLoading = true;
  }

  hideLoader(): void {
    this.isLoading = false;
  }

  onVideoEnded(): void {
    this.onSwipeUp();
    this.isLoading = false;
  }

  goBack(): void {
    // Stop and kill all videos immediately — absolute silence on back
    this.clearTimers();
    this.currentPlaybackId++;
    this.stopAllVideos(false);

    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
    const url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }

  onSwipeUp(): void {
    if (!this.isSwipeAllow || !this.wisdomShortOrderList.length) return;
    if (this.isSwiping) return;

    if (this.currentIndex < this.wisdomShortOrderList.length - 1) {
      this.isSwiping = true;
      const playbackId = ++this.currentPlaybackId;
      this.clearTimers();

      // Immediately silence and stop all previous videos
      this.stopAllVideos(false);

      this.direction = 'up';
      this.currentIndex++;
      this.hasTrackedThisVideo = false;

      if (this.currentIndex > 2 && !this.isSubscriber) {
        this.isSwiping = false;
        this.router.navigate([
          `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
        ]);
        return;
      }

      this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
      this.checkVideoOrientation();
      this.updateHeaderTitle();

      // Allow Angular view to render, then play new active video
      this.safeTimeout(() => {
        this.playActiveVideo(playbackId);
        this.isSwiping = false;
      }, 150);
    }
  }

  onSwipeDown(): void {
    if (!this.isSwipeAllow || !this.wisdomShortOrderList.length) return;
    if (this.isSwiping) return;

    this.isSwiping = true;
    const playbackId = ++this.currentPlaybackId;
    this.clearTimers();

    // Immediately silence and stop all previous videos
    this.stopAllVideos(false);

    this.direction = 'down';
    this.currentIndex =
      this.currentIndex === 0
        ? this.wisdomShortOrderList.length - 1
        : this.currentIndex - 1;

    this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
    this.checkVideoOrientation();
    this.hasTrackedThisVideo = false;
    this.updateHeaderTitle();

    // Allow Angular view to render, then play new active video
    this.safeTimeout(() => {
      this.playActiveVideo(playbackId);
      this.isSwiping = false;
    }, 150);
  }

  updateProgress(video: HTMLVideoElement): void {
    this.currentTime = (video.currentTime / video.duration) * 100;
  }

  seek(video: HTMLVideoElement, event: any): void {
    const seekTime = (event.target.value / 100) * video.duration;
    video.currentTime = seekTime;
  }

  togglePlayPause(video: HTMLVideoElement): void {
    video.paused ? video.play() : video.pause();
  }

  @HostListener('window:popstate')
  onPopState(): void {
    this.stopAllVideos(false);
  }

  @HostListener('window:beforeunload')
  @HostListener('window:pagehide')
  onUnload(): void {
    this.stopAllVideos(false);
  }

  ngOnDestroy(): void {
    // Kill every video in the DOM and memory — no ghost audio after leaving the page
    this.clearTimers();
    this.currentPlaybackId++;
    this.stopAllVideos(false);

    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }

    localStorage.setItem('isSwipeAllow', 'false');
    localStorage.removeItem('fromIndex');
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
  }

    share(){
      this.shareUrl(SharedService.ProgramId);
      
      
      
      this.ngNavigatorShareService.share({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program',
        url: this.baseUrl+this.path      
      }).then( (response) => {
        
      })
      .catch( (error) => {
        console.log(error);
      });
    }

  shareUrl (programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl=SharedService.AdultsBaseUrl;
      break;
      case ProgramType.Teenagers:
        this.baseUrl=SharedService.TeenagerBaseUrl;
       break;
      default:
      this.baseUrl=SharedService.TeenagerBaseUrl;
    }
  }

  // UI events from template
  onVideoClick(): void {
    this.trackVideoClickIfApplicable();
  }

  onVideoPlay(event?: any): void {
    const targetVideo = event?.target as HTMLVideoElement | undefined;
    if (targetVideo) {
      this.trackedVideos.add(targetVideo);
      this.activeVideoElement = targetVideo;

      // Immediately silence and stop any other video
      this.trackedVideos.forEach(v => {
        if (v !== targetVideo) {
          this.stopAndResetVideo(v);
          this.trackedVideos.delete(v);
        }
      });
      try {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach((v: HTMLVideoElement) => {
          if (v !== targetVideo) {
            this.stopAndResetVideo(v);
          }
        });
      } catch (_) {}
    }
    this.trackVideoClickIfApplicable();
  }

  // Tracking helpers (short videos and teen talk)
  private trackVideoClickIfApplicable(): void {
    if (this.hasTrackedThisVideo) return;
    
    const code = this.getCurrentShortCode();
    const isTeenTalk = (code && (code.includes('teen_talk') || code.includes('teen-talk'))) || (this.path && (this.path.includes('teen_talk') || this.path.includes('teen-talk')));
    
    if (isTeenTalk) {
      const id = this.extractShortIdFromCode(code);
      if (id !== null) {
        this.service.clickTeenTalk(id).subscribe({
          next: () => {
            this.hasTrackedThisVideo = true;
            console.log('teen talk click recorded');
          },
          error: (e) => console.error('teen talk click failed', e)
        });
      }
      return;
    }

    if (!this.wisdomshort) return; // only track wisdom shorts if not teen talk

    const id = this.extractShortIdFromCode(code);
    if (id !== null) {
      this.service.clickShorts(id).subscribe({
        next: () => {
          this.hasTrackedThisVideo = true;
          console.log('short click recorded');
        },
        error: (e) => console.error('short click failed', e)
      });
    }
  }

  private getCurrentShortCode(): string {
    if (this.isSwipeAllow && this.wisdomShortOrderList.length) {
      const item = this.wisdomShortOrderList[this.currentIndex];
      return (item?.code || '').toString();
    }
    return (this.linkcode || '').toString();
  }

  private extractShortIdFromCode(code: string): number | null {
    if (!code) return null;
    const withoutQuery = code.split('?')[0];
    const filename = (withoutQuery.split('/').pop() || withoutQuery).toString();

    const extMatch = filename.match(/\.(\d+)\.(mp4|webm|mov)$/i);
    if (extMatch && extMatch[1]) {
      const n = Number(extMatch[1]);
      return Number.isFinite(n) ? n : null;
    }

    const parts = filename.split(/[\.\-_]/).reverse();
    for (const part of parts) {
      const n = Number(part);
      if (!Number.isNaN(n) && Number.isFinite(n)) {
        return n;
      }
    }
    return null;
  }
}
