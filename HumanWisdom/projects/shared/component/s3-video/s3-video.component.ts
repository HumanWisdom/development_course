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
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SharedService } from '../../services/shared.service';
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
  public isSwipeAllow = false;
  public isAdults = true;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('swipeContainer') swipeContainer!: ElementRef;

  // ✅ Marked dependencies as readonly — they are never reassigned
  constructor(
    private readonly route: ActivatedRoute,
    private readonly _sanitizer: DomSanitizer,
    private readonly location: Location,
    private readonly router: Router,
    private readonly navigationService: NavigationService
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;

    const userid = localStorage.getItem('isloggedin');
    const sub = localStorage.getItem('Subscriber');
    this.isSubscriber = userid === 'T' && sub === '1';

    this.initializeData();
  }

  private initializeData(): void {
    const url = window.location.href;
    const routeParams = this.route.snapshot.paramMap;
    this.linkcode = routeParams.get('videolink');
    this.videoTitle =
      routeParams.get('title') ??
      localStorage.getItem('wisdomvideotitle') ??
      '';

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

    // ✅ Simplified using ternary operator
    this.isSubscriber = localStorage.getItem('Subscriber') === '1';
    this.isSwipeAllow = this.isSubscriber;

    if (this.isSubscriber) {
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
            };
          }
        );

        this.currentIndex = this.wisdomShortOrderList.findIndex((x) =>
          x.title.includes(this.videoTitle)
        );

        if (this.currentIndex > 2 && !this.isSubscriber) {
          this.router.navigate([
            `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
          ]);
        }
      }
    }
  }

  ngOnInit(): void {
    const code = this.wisdomshort
      ? `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`
      : `https://d1tenzemoxuh75.cloudfront.net/${this.linkcode}`;

    this.videoLink = this.getSafeUrl(code);

    if (this.isSubscriber) {
      localStorage.setItem('isSwipeAllow', 'true');
      this.isSwipeAllow = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.swipeContainer && this.isSwipeAllow) {
      const hammertime = new Hammer(this.swipeContainer.nativeElement);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

      hammertime.on('swipeup', () => this.onSwipeUp());
      hammertime.on('swipedown', () => this.onSwipeDown());
    }
  }

  getSafeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoOrientation(): void {
    const videoEl = this.videoPlayer?.nativeElement;
    if (videoEl) {
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
      if (this.currentIndex > 2 && !this.isSubscriber) {
        this.router.navigate([
          `${SharedService.getprogramName()}/subscription/start-your-free-trial`,
        ]);
        return;
      }
      this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
      this.checkVideoOrientation();
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
}
