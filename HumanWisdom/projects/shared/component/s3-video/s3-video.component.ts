import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public isPortrait = false;
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
    
  }

  private initializeData(): void {
    const url = window.location.href;
    // Support both route params and query params for videolink/title
    const routeParams = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParamMap;
    const videolinkParam = routeParams.get('videolink') || queryParams.get('videolink') || localStorage.getItem('wisdomvideolink');
    const titleParam = routeParams.get('title') || queryParams.get('title') || localStorage.getItem('wisdomvideotitle');

    this.linkcode = videolinkParam ?? '';
    this.videoTitle = titleParam ?? localStorage.getItem('wisdomvideotitle') ?? '';

    if (url.includes('videopage')) {
      this.wisdomshort = false;
      let name = this.linkcode?.split('-videos')[0];
      let link = this.linkcode?.split('-videos')[1];
      this.linkcode = `${name}/videos${link?.replaceAll('-', '/')}`;
      if (this.linkcode?.includes('teenagers')) {
        this.linkcode = this.linkcode.replaceAll('-', '/');
      }
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
        this.wisdomShortOrderList = wisdomShortList.map(
          (element: any, index: number) => {
            const linklist = element.VideoUrl.split('/');
            const linkcode = linklist[linklist.length - 1];
            const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${linkcode}`;
            return {
              url: this.getSafeUrl(code),
              order: index,
              title: element.Title,
              code: linkcode, // store link code for exact matching
            };
          }
        );

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
          };
          this.wisdomShortOrderList.unshift(injectedItem);
          this.currentIndex = 0;
        }

        if (this.currentIndex > 2 && !this.isSubscriber) {
          this.router.navigate([
            `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
          ]);
        }
      }
    }
  }

  ngOnInit(): void {
    this.path = this.router.url;
    const url = window.location.href;
    this.wisdomshort = !url.includes('videopage');

    const routeParams = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParamMap;
    const videolinkParam = routeParams.get('videolink') || queryParams.get('videolink') || localStorage.getItem('wisdomvideolink');
    const titleParam = routeParams.get('title') || queryParams.get('title') || localStorage.getItem('wisdomvideotitle');
    this.linkcode = videolinkParam ?? '';
    this.videoTitle = titleParam ?? localStorage.getItem('wisdomvideotitle') ?? '';

    const fromIndex = localStorage.getItem('fromIndex') === 'true';
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
              localStorage.setItem('isSwipeAllow', fromIndex ? 'true' : 'false');
              this.isSwipeAllow = fromIndex ? true : false;
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
    const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
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

    // Track once on first play automatically (covers autoplay and manual play)
    const video = this.videoPlayer?.nativeElement as HTMLVideoElement | undefined;
    if (video) {
      const trackOnce = () => this.trackShortClickIfApplicable();
      video.addEventListener('play', trackOnce, { once: true });
    }
  }

  private ensureAutoPlay(): void {
    if (this.videoPlayer?.nativeElement) {
      const video = this.videoPlayer.nativeElement as HTMLVideoElement;
      
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try muted play
          video.muted = true;
          video.play().catch((err) => {
            console.warn('Auto-play failed:', err);
          });
        });
      }
      
      // Ensure orientation is determined when metadata is available
      video.addEventListener('loadedmetadata', () => {
        this.checkVideoOrientation();
        video.play().catch((err) => {
          console.warn('Auto-play after metadata loaded failed:', err);
        });
      });
    }
  }

  getSafeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoOrientation(): void {
    const videoEl = this.videoPlayer?.nativeElement as HTMLVideoElement | undefined;
    if (videoEl) {
      // Determine orientation based on intrinsic media dimensions
      const vw = videoEl.videoWidth;
      const vh = videoEl.videoHeight;
      if (vw && vh) {
        this.isPortrait = vh > vw;
      }

      // Keep control tweaks
      videoEl.setAttribute('controlsList', 'nodownload nofullscreen');
      setTimeout(() => {
        videoEl.setAttribute('controlsList', 'nodownload nofullscreen');
      }, 500);
    }
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
    const url = this.navigationService.navigateToBackLink();
    url ? this.router.navigate([url]) : this.location.back();
  }

  onSwipeUp(): void {
    if (!this.isSwipeAllow || !this.wisdomShortOrderList.length) return;

    if (this.currentIndex < this.wisdomShortOrderList.length - 1) {
      this.direction = 'up';
      this.currentIndex++;
      this.hasTrackedThisVideo = false;
      if (this.currentIndex > 2 && !this.isSubscriber) {
        this.router.navigate([
          `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
        ]);
        return;
      }
      this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
      this.checkVideoOrientation();
      
      // Ensure auto-play for next video in swipe mode
      setTimeout(() => {
        this.ensureAutoPlay();
      }, 100);
    }
  }

  onSwipeDown(): void {
    if (!this.isSwipeAllow || !this.wisdomShortOrderList.length) return;

    this.currentIndex =
      this.currentIndex === 0
        ? this.wisdomShortOrderList.length - 1
        : this.currentIndex - 1;

    this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
    this.checkVideoOrientation();
    this.hasTrackedThisVideo = false;
    
    // Ensure auto-play for previous video in swipe mode
    setTimeout(() => {
      this.ensureAutoPlay();
    }, 100);
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

  ngOnDestroy(): void {
    localStorage.setItem('isSwipeAllow', 'false');
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
    this.trackShortClickIfApplicable();
  }

  onVideoPlay(): void {
    this.trackShortClickIfApplicable();
  }

  // Tracking helpers (short videos only)
  private trackShortClickIfApplicable(): void {
    if (this.hasTrackedThisVideo) return;
    if (!this.wisdomshort) return; // only track wisdom shorts

    const code = this.getCurrentShortCode();
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

    const parts = filename.split('.').reverse();
    for (const part of parts) {
      const n = Number(part);
      if (!Number.isNaN(n) && Number.isFinite(n)) {
        return n;
      }
    }
    return null;
  }
}
