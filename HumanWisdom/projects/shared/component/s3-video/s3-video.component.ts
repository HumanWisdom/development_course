import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
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
  query,
  group,
} from '@angular/animations';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import * as Hammer from 'hammerjs';
@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  providers: [provideAnimations()],
  styleUrls: ['./s3-video.component.scss'],
  animations:  [
    trigger('slideAnimation', [
      state(
        'previous',
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        })
      ),
      state(
        'next',
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('previous => active', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition('next => active', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition('active => previous', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
      transition('active => next', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class S3VideoComponent implements OnInit, OnDestroy, AfterViewInit {
  public tocColor: string = 'white';
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort: boolean = true;
  public wisdomShortOrderList = [];
  public allWisdomShort = [];
  public isLoading = false;
  isSwiped: boolean = false;
  direction: 'up' | 'down' = 'up';
  swiped = 'up';
  showSwipeUp: boolean = true;
  currentIndex = 0;
  currentTime = 0;
  isSubscriber =  false;
  isSwipeAllow = false;
  isAdults = true;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('swipeContainer') swipeContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private location: Location,
    private router: Router,
    private navigationService: NavigationService
  ) {

    
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    this.initializeData();
  }

initializeData() {
  let url: any = window.location.href;
  if (url.includes('videopage')) {
    this.wisdomshort = false;
    this.linkcode = this.route.snapshot.paramMap.get('videolink');
    let name = this.linkcode.split('-videos')[0];
    let link = this.linkcode.split('-videos')[1];
    this.linkcode = name + '/videos' + link.replaceAll('-', '/');
    if (this.linkcode.includes('teenagers')) {
      this.linkcode = this.linkcode.replaceAll('-', '/');
    }
    this.linkcode = this.linkcode.replaceAll('~', '-');
    this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
  } else {
    this.linkcode = this.route.snapshot.paramMap.get('videolink');
    this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
  }

  // check subscriber
  if (localStorage.getItem("Subscriber") && localStorage.getItem("Subscriber") === '1') {
    this.isSubscriber = true;
  } else {
    this.isSubscriber = false;
  }

  // allow swipe only if subscriber
  if (this.isSubscriber) {
    // Force enable swipe for subscribers
    localStorage.setItem('isSwipeAllow', 'true');
    this.isSwipeAllow = true;
    const shortList = localStorage.getItem('wisdomShortData');
    console.log('Subscriber detected, checking wisdom short data:', shortList);
    if (shortList) {
      const wisdomShortList = JSON.parse(shortList);
      this.wisdomShortOrderList = wisdomShortList.map((element, index) => {
        let linklist = element.VideoUrl.split("/");
        let linkcode = linklist[linklist.length - 1];
        const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${linkcode}`;
        let videoLink = this.getSafeUrl(code);
        return {
          url: videoLink,
          order: index,
          title: element.Title
        }
      });
      this.currentIndex = this.wisdomShortOrderList.findIndex(x => x.title.includes(this.videoTitle));
      console.log('Wisdom short order list created:', this.wisdomShortOrderList.length, 'items');
      console.log('Current index found:', this.currentIndex);

      if (this.currentIndex > 2 && !this.isSubscriber) {
        this.router.navigate([SharedService.getprogramName() + '/subscription/start-your-free-trial']);
      }
    } else {
      console.log('No wisdom short data found in localStorage, creating sample data');
      // Create sample data if no data exists
      const sampleData = [
        {
          Title: "Sample Video 1",
          VideoUrl: "sample/video1.mp4"
        },
        {
          Title: "Sample Video 2",
          VideoUrl: "sample/video2.mp4"
        },
        {
          Title: "Sample Video 3",
          VideoUrl: "sample/video3.mp4"
        }
      ];
      localStorage.setItem('wisdomShortData', JSON.stringify(sampleData));
      
      // Process the sample data
      this.wisdomShortOrderList = sampleData.map((element, index) => {
        const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/sample${index+1}.mp4`;
        let videoLink = this.getSafeUrl(code);
        return {
          url: videoLink,
          order: index,
          title: element.Title
        }
      });
      
      this.currentIndex = 0;
      this.videoTitle = this.wisdomShortOrderList[0].title;
      console.log('Created sample wisdom short data with', this.wisdomShortOrderList.length, 'items');
    }
  } else {
    this.isSwipeAllow = false; // hide swipe feature for non-subscribers
    console.log('Swipe not allowed - isSubscriber:', this.isSubscriber, 'isSwipeAllow localStorage:', localStorage.getItem('isSwipeAllow'));
  }
}

  // Called when the video's metadata is loaded
  checkVideoOrientation() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.setAttribute('controlsList', 'nodownload nofullscreen');
      setTimeout(() => {
        const videoElement = this.videoPlayer.nativeElement;
        const videoWidth = videoElement.videoWidth;
        const videoHeight = videoElement.videoHeight;
        if (videoHeight > videoWidth) {
          this.videoPlayer.nativeElement.setAttribute('controlsList', 'nodownload nofullscreen');
        } else {
          this.videoPlayer.nativeElement.setAttribute('controlsList', 'nodownload nofullscreen');
        }
      }, 500);
    }
  }

  ngOnInit() {
    let code = '';
    if (this.wisdomshort) {
      code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
    } else {
      code = `https://d1tenzemoxuh75.cloudfront.net/${this.linkcode}`;
    }
    this.videoLink = this.getSafeUrl(code);
    
    // If user is a subscriber, ensure swipe is enabled
    if (this.isSubscriber) {
      localStorage.setItem('isSwipeAllow', 'true');
      this.isSwipeAllow = true;
      console.log('Swipe enabled for subscriber');
    }
    
    // Debug logging
    console.log('S3 Video Component initialized:');
    console.log('isSwipeAllow:', this.isSwipeAllow);
    console.log('wisdomShortOrderList length:', this.wisdomShortOrderList.length);
    console.log('currentIndex:', this.currentIndex);
    console.log('isSubscriber:', this.isSubscriber);
  }
  
  ngAfterViewInit() {
    // Initialize HammerJS for swipe gestures
    if (this.swipeContainer && this.isSwipeAllow) {
      const hammertime = new Hammer(this.swipeContainer.nativeElement);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
      
      hammertime.on('swipeup', (ev) => {
        console.log('Hammer detected swipe up');
        this.onSwipeUp();
      });
      
      hammertime.on('swipedown', (ev) => {
        console.log('Hammer detected swipe down');
        this.onSwipeDown();
      });
      
      console.log('HammerJS initialized for swipe container');
    }
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  showLoader() {
    this.isLoading = false;
  }

  hideLoader() {
    this.isLoading = false;
  }

  onVideoEnded() {
    this.onSwipeUp();
    this.isLoading = false;
  }

  // onSwipeUp() {
  //   if (this.wisdomshort) {
  //     this.isSwiped = true;
  //     this.currentTime = 0;
  //     this.showLoader();
  //     let data: any;
  //     if (this.currentIndex == this.wisdomShortOrderList.length - 1) {
  //       this.currentIndex = 0;
  //       data = this.wisdomShortOrderList[this.currentIndex];
  //     } else {
  //       data = this.wisdomShortOrderList[++this.currentIndex]
  //     }
  //     if(this.currentIndex > 2 && !this.isSubscriber){
  //       this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
  //     }
  //     this.videoTitle = data.shortsData.Title;
  //     let linklist = data.shortsData.VideoUrl.split("/");
  //     this.linkcode = linklist[linklist.length - 1];
  //     const code = https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode};
  //     this.videoLink = this.getSafeUrl(code);
  //     this.isSwiped = true;
  //     this.swiped = 'up';
  //     setTimeout(() => {
  //       this.isSwiped = false;
  //       this.swiped = '';
  //     }, 200);
  //     // Implement logic for swipe up gesture
  //     // Example: Navigate to the next video
  //   }
  // }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

  // onSwipeDown() {
  //   if (this.wisdomshort) {
  //     let data: any;
  //     this.currentTime = 0;
  //     this.showLoader();
  //     if (this.currentIndex == 0) {
  //       this.currentIndex = this.wisdomShortOrderList.length - 1;
  //       data = this.wisdomShortOrderList[this.currentIndex];
  //     } else {
  //       data = this.wisdomShortOrderList[--this.currentIndex]
  //     }
  //     this.videoTitle = data.shortsData.Title;
  //     let linklist = data.shortsData.VideoUrl.split("/");
  //     this.linkcode = linklist[linklist.length - 1];
  //     const code = https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode};
  //     this.videoLink = this.getSafeUrl(code);
  //     this.isSwiped = true;
  //     this.swiped = 'down';
  //     setTimeout(() => {
  //       this.isSwiped = false;
  //     }, 200);
  //   }
  // }

  onSwipeUp() {
    if (this.isSwipeAllow && this.wisdomShortOrderList.length > 0) {
      console.log('Executing swipe up action');
      if (this.currentIndex < this.wisdomShortOrderList.length - 1) {
        this.direction = 'up';
        this.currentIndex++;
        if(this.currentIndex > 2 && !this.isSubscriber){
          this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
          return;
        }
        this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
        this.checkVideoOrientation();
        console.log('Swiped up to video index:', this.currentIndex, 'with title:', this.videoTitle);
      }
    } else {
      console.log('Swipe up not allowed or no videos available');
    }
  }

  onSwipeDown() {
    if (this.isSwipeAllow && this.wisdomShortOrderList.length > 0) {
      console.log('Executing swipe down action');
      if(this.currentIndex == this.wisdomShortOrderList.length-1){
        this.currentIndex = 0;
      } else {
        if (this.currentIndex > 0) {
          this.direction = 'down';
          this.currentIndex--;
        }
      }
      this.videoTitle = this.wisdomShortOrderList[this.currentIndex].title;
      this.checkVideoOrientation();
      console.log('Swiped down to video index:', this.currentIndex, 'with title:', this.videoTitle);
    } else {
      console.log('Swipe down not allowed or no videos available');
    }
  }


  updateProgress(video: HTMLVideoElement) {
    this.currentTime = (video.currentTime / video.duration) * 100;
  }

  seek(video: HTMLVideoElement, event: any) {
    const seekTime = (event.target.value / 100) * video.duration;
    video.currentTime = seekTime;
  }

  togglePlayPause(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
   
  ngOnDestroy(): void {
    localStorage.setItem('isSwipeAllow','false');
  }

}