import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {
  @ViewChild('video') video;
  @ViewChild('screen', { static: true }) screen: any;

  @Input() videoLink: any;
  @Input() bg: string;
  @Input() title: string;
  @Input() poster: any;
  @Input() videoclass = '';
  @Input() wisdomshortsv = false;
  @Output() sendAvDuration = new EventEmitter<string>();

  url: SafeResourceUrl;
  currentTime: any
  mediaPercent: any
  pauseTime: any
  t: any
  scrId: any
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  freeScreens = JSON.parse(localStorage.getItem("freeScreens"))
  pageaction = localStorage.getItem("pageaction");
  public enablevideo = false;

  constructor(
    private captureService: NgxCaptureService,
    public sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: AdultsService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.t = params['t'];
    })
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    var str = this.router.url
    var lastSlash = str.lastIndexOf("/");
    this.scrId = str.substring(lastSlash + 1);

    //call api to geta percent
    this.service.mediaPercent(this.scrId).subscribe(res => {
      this.mediaPercent = res[0].MediaPrcnt
    })

    if (this.pageaction === 'next') {
      setTimeout(() => {
        this.enablevideo = true;
      }, 1000)
    } else {
      this.enablevideo = true;
    }

  }
  getCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    this.sendAvDuration.emit(JSON.parse(data.target.currentTime))
    if (this.loginResponse.Subscriber != 1) {
      if (!this.freeScreens.includes(parseInt(this.scrId))) {
        this.pauseTime = ((this.mediaPercent / 100) * data.target.duration)
        if (this.currentTime > this.pauseTime) {
          this.video.nativeElement.pause()
          window.alert('You Have Reached Free Limit')
        }
      }
    }
  }
}
