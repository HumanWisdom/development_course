import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  styleUrls: ['./s3-video.component.scss'],
})
export class S3VideoComponent implements OnInit {
  public tocColor : string='white';
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort: boolean = true;

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer, private location: Location) {
    let url: any = window.location.href;
    if(url.includes('videopage')) {
      this.wisdomshort = false;
      this.linkcode = this.route.snapshot.paramMap.get('videolink');
      let name = this.linkcode.split('-videos')[0]
      let link = this.linkcode.split('-videos')[1]
      this.linkcode = name + '/videos' + link.replaceAll('-', '/');
      this.videoTitle = this.route.snapshot.paramMap.get('title') ? this.route.snapshot.paramMap.get('title') : localStorage.getItem('wisdomvideotitle');
    }else {
      this.linkcode = this.route.snapshot.paramMap.get('videolink');
      this.videoTitle = localStorage.getItem('wisdomvideotitle') ? localStorage.getItem('wisdomvideotitle') : '';
    }
   }

  ngOnInit() {
    let code = '';
    if(this.wisdomshort) {
      code = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/wisdom_shorts/videos/${this.linkcode}`;
    }else {
      code = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/${this.linkcode}`;
      // code = `https://d1tenzemoxuh75.cloudfront.net/${this.linkcode}`;
    }
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}

  goBack()
  {
    this.location.back()
  }
}
