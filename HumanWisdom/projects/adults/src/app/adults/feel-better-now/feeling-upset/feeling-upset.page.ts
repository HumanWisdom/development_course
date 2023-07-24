import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feeling-upset',
  templateUrl: './feeling-upset.page.html',
  styleUrls: ['./feeling-upset.page.scss'],
})
export class FeelingUpsetPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  mediaUrl: any;

  constructor(private router: Router, private location: Location) 
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3',
      youtubeUrl: 'b5PZ6fFCL3g'
    }
  }

  ngOnInit() {
  }

  audioevent(url) {
    this.router.navigate(['feel-better-now/feeling-upset/audiopage/', url, "Manage expectations", Math.random()])
  }

  routeToYoutube(url) {
    this.router.navigate(['feel-better-now/feeling-upset/youtubelink/',url]);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }
}
