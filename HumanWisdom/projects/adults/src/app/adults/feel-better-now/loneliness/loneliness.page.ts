import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loneliness',
  templateUrl: './loneliness.page.html',
  styleUrls: ['./loneliness.page.scss'],
})
export class LonelinessPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  audioData:any;

  constructor(private router: Router, private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.29.mp3'
    }
  }
  
  audioevent(url) {
      this.router.navigate(['feel-better-now/loneliness/audiopage/', url ,"Dealing with loneliness",Math.random() ])
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
}
