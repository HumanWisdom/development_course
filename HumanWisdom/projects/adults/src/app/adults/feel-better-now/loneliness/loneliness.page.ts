import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loneliness',
  templateUrl: './loneliness.page.html',
  styleUrls: ['./loneliness.page.scss'],
})
export class LonelinessPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  mediaUrl: any;

  constructor(private router: Router) 
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.29.mp3',
      youtubeUrl: 'xF3TdgBx6ts'
    }
  }

  ngOnInit() {}
  
  audioevent(url) {
      this.router.navigate(['feel-better-now/loneliness/audiopage/', url ,"Dealing with loneliness",Math.random() ])
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
