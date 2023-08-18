import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-s3-video',
  templateUrl: './s3-video.component.html',
  styleUrls: ['./s3-video.component.scss'],
})
export class S3VideoComponent implements OnInit {
  public videoLink: any;
  public videoTitle: any;
  public linkcode: any;
  public wisdomshort: boolean = true;

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) {
    let url: any = window.location.href;
    if(url.includes('videopage')) {
      this.wisdomshort = false;
      this.linkcode = this.route.snapshot.paramMap.get('videolink');
      this.linkcode = this.linkcode.replaceAll('-', '/');
      this.videoTitle = this.route.snapshot.paramMap.get('title');
    }else {
      this.linkcode = this.route.snapshot.paramMap.get('videolink')
    }
   }

  ngOnInit() {
    let code = '';
    if(this.wisdomshort) {
      code = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/wisdom_shorts/videos/${this.linkcode}`;
    }else {
      code = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/${this.linkcode}`;
    }
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
