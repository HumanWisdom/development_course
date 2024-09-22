import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  providers: [provideAnimations()],
  styleUrls: ['./s3-video.component.scss'],
  animations: [
    trigger('slideUp', [
      state('down', style({
        transform: 'translateY(0)'
      })),
      state('up', style({
        transform: 'translateY(-100%)'
      })),
      transition('down => up', [
        animate('0.5s ease-in')
      ]),
      transition('up => down', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class S3VideoComponent implements OnInit {
  public tocColor: string = 'white';
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort: boolean = true;
  public wisdomShortOrderList = [];
  public allWisdomShort = [];
  public isLoading = true;
  isSwiped: boolean = false;
  swiped = 'up';
  showSwipeUp: boolean = true;
  currentIndex = 0;
  currentTime = 0;
  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private location: Location,
    private router: Router,
    private navigationService: NavigationService
  ) {
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
      this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
    } else {
      this.linkcode = this.route.snapshot.paramMap.get('videolink');
      this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
    }
    const shortList = localStorage.getItem('wisdomShortData');
    if (shortList) {
      const wisdomShortList = JSON.parse(shortList);
      this.wisdomShortOrderList = wisdomShortList.map((element, index) => {
        return {
          shortsData: element,
          order: index
        }
      });
    }
    this.currentIndex = this.wisdomShortOrderList.findIndex(x => x.shortsData.Title.includes(this.videoTitle));
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
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }

  onVideoEnded() {
    this.onSwipeUp();
    this.isLoading = true;
  }

  onSwipeUp() {
    if (this.wisdomshort) {
      this.isSwiped = true;
      this.currentTime = 0;
      this.showLoader();
      let data: any;
      if (this.currentIndex == this.wisdomShortOrderList.length - 1) {
        this.currentIndex = 0;
        data = this.wisdomShortOrderList[this.currentIndex];
      } else {
        data = this.wisdomShortOrderList[++this.currentIndex]
      }
      this.videoTitle = data.shortsData.Title;
      let linklist = data.shortsData.VideoUrl.split("/");
      this.linkcode = linklist[linklist.length - 1];
      const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
      this.videoLink = this.getSafeUrl(code);
      this.isSwiped = true;
      this.swiped = 'up';
      setTimeout(() => {
        this.isSwiped = false;
        this.swiped = '';
      }, 200);
      // Implement logic for swipe up gesture
      // Example: Navigate to the next video
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }


  onSwipeDown() {
    if (this.wisdomshort) {
      let data: any;
      this.currentTime = 0;
      this.showLoader();
      if (this.currentIndex == 0) {
        this.currentIndex = this.wisdomShortOrderList.length - 1;
        data = this.wisdomShortOrderList[this.currentIndex];
      } else {
        data = this.wisdomShortOrderList[--this.currentIndex]
      }
      this.videoTitle = data.shortsData.Title;
      let linklist = data.shortsData.VideoUrl.split("/");
      this.linkcode = linklist[linklist.length - 1];
      const code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
      this.videoLink = this.getSafeUrl(code);
      this.isSwiped = true;
      this.swiped = 'down';
      setTimeout(() => {
        this.isSwiped = false;
      }, 200);
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
}
