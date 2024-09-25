import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
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
export class S3VideoComponent implements OnInit,OnDestroy {
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
  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private location: Location,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.initializeData();
    
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
      this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
    } else {
      this.linkcode = this.route.snapshot.paramMap.get('videolink');
      this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
    }
    const shortList = localStorage.getItem('wisdomShortData');
    if(localStorage.getItem('isSwipeAllow')=='true'){
      this.isSwipeAllow = true;
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
            title:element.Title
          }
        });
        this.currentIndex = this.wisdomShortOrderList.findIndex(x => x.title.includes(this.videoTitle));
        if(this.currentIndex > 1 && !this.isSubscriber){
          this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
        }
      }
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
    // setInterval(() => {
    //   this.onSwipeUp();
    // }, 3000);
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
  //     const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
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
  //     const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
  //     this.videoLink = this.getSafeUrl(code);
  //     this.isSwiped = true;
  //     this.swiped = 'down';
  //     setTimeout(() => {
  //       this.isSwiped = false;
  //     }, 200);
  //   }
  // }

  onSwipeUp() {
    if (this.currentIndex < this.wisdomShortOrderList.length - 1) {
      this.direction = 'up';
      this.currentIndex++;
      if(this.currentIndex > 2 && !this.isSubscriber){
        this.router.navigate([SharedService.getprogramName()+ '/subscription/start-your-free-trial']);
      }
    }
  }

  onSwipeDown() {
    if(this.currentIndex ==  this.wisdomShortOrderList.length-1){
      this.currentIndex = 0;
    }else{
      if (this.currentIndex > 0) {
        this.direction = 'down';
        this.currentIndex--;
      }
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
