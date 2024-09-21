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
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
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
  showSwipeUp :boolean = true;
  currentIndex = 0;
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
      this.isSwiped =  true;
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
      setTimeout(() => {
        this.isSwiped = false;
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
      setTimeout(() => {
        this.isSwiped = false;
      }, 200);
    }
  }

  togglePlayPause(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
