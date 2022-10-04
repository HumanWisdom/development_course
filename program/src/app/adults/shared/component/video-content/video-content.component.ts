import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { AdultsService } from 'src/app/adults/adults.service';
@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
})
export class VideoContentComponent implements OnInit {
  @Input() videoLink: any;
  @Input() bg: string;
  @Input() title: string;
  @Input() poster: any;
  @Input() videoclass = '';

  @Output() sendAvDuration = new EventEmitter<string>();
  url: SafeResourceUrl;
  currentTime: any
  @ViewChild('video') video;
  //mediaPercent=JSON.parse(localStorage.getItem("mediaPercent"))
  mediaPercent: any
  pauseTime: any
  t: any
  scrId: any
  loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  freeScreens = JSON.parse(localStorage.getItem("freeScreens"))

  @ViewChild('screen', { static: true }) screen: any;

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

    //var str=this.router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    var str = this.router.url
    var lastSlash = str.lastIndexOf("/");
    str = str.substring(lastSlash + 2);
    //str = str.replace(/\D/g,'');
    this.scrId = str

    //call api to geta percent
    this.service.mediaPercent(this.scrId).subscribe(res => {

      this.mediaPercent = res[0].MediaPrcnt
    })

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
      else {
      }

    }

  }
}
