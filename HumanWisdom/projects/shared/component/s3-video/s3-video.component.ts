import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  styleUrls: ['./s3-video.component.scss'],
})
export class S3VideoComponent implements OnInit {
  public tocColor: string = 'white';
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort: boolean = true;
  @ViewChild('enablemodal') enablemodal: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private location: Location,
    private router: Router,
    private navigationService: NavigationService
  ) {
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
  }

  ngOnInit() {
    let code = '';
    if (this.wisdomshort) {
      code = `https://d1tenzemoxuh75.cloudfront.net/wisdom_shorts/videos/${this.linkcode}`;
    } else {
      code = `https://d1tenzemoxuh75.cloudfront.net/${this.linkcode}`;
    }
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSwipeUp() {
    console.log('Swiped Up!');
    alert("Hiii in swipe up")
    this.enablemodal.nativeElement.click();
    // Implement logic for swipe up gesture
    // Example: Navigate to the next video
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

}
