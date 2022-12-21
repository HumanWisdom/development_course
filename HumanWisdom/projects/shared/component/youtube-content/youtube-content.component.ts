import { Component, OnInit, Input } from '@angular/core';
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
  @Input() bg: string;
  
  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) {
    this.linkcode = this.route.snapshot.paramMap.get('videolink')
    if(window.history.state.class)
    {
      this.bg=window.history.state.class;
      localStorage.setItem('program-guide-class',this.bg);
      localStorage.setItem('videolink',this.linkcode)
    }
    else if(this.linkcode==localStorage.getItem('videolink'))
    {
      this.bg=localStorage.getItem('program-guide-class');
    }
    else
    {
    localStorage.setItem('videolink',null)
    localStorage.setItem('program-guide-class',null)
    this.bg='dark_blue_w1';
    }
  }

  ngOnInit() {
    let code = `https://www.youtube.com/embed/${this.linkcode}`;
    this.videoLink = this.getSafeUrl(code);
  }

  getSafeUrl(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
