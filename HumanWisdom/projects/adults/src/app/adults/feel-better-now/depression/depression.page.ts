import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-depression',
  templateUrl: './depression.page.html',
  styleUrls: ['./depression.page.scss'],
})
export class DepressionPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  mediaUrl:any;

  constructor(private router: Router) 
  { 
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.31.mp3',
      youtubeUrl: 'Liq_aj6jYd4'
    }
  }

  ngOnInit() {}
  
  audioevent(url) {
      this.router.navigate(['feel-better-now/depression/audiopage/', url ,"Deal with depression",Math.random() ])
  }

  routeToYoutube(url) {
    this.router.navigate(['feel-better-now/feeling-upset/youtubelink/',url]);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
}
