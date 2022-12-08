import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-youtube-content',
  templateUrl: './youtube-content.component.html',
  styleUrls: ['./youtube-content.component.scss'],
})
export class YoutubeContentComponent implements OnInit {
  public videoLink: any;
  public linkcode: any;
  
  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) {
    this.linkcode = this.route.snapshot.paramMap.get('videolink')
   }

  ngOnInit() {
    let code = `https://www.youtube.com/embed/${this.linkcode}`;
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
