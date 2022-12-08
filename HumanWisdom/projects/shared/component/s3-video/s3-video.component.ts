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
  public linkcode: any;
  
  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) {
    this.linkcode = this.route.snapshot.paramMap.get('videolink')
   }

  ngOnInit() {
    let code = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/wisdom_shorts/videos/${this.linkcode}`;
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
