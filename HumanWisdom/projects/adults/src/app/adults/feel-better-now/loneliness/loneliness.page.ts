import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loneliness',
  templateUrl: './loneliness.page.html',
  styleUrls: ['./loneliness.page.scss'],
})
export class LonelinessPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))

  mediaUrl: any;

  constructor(private router: Router, private location: Location)
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.29.mp3',
      youtubeUrl: 'xF3TdgBx6ts'
    }
  }

  ngOnInit() {}


  routeToYoutube(url) {
    this.router.navigate(['feel-better-now/feeling-upset/youtubelink/',url]);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    // this.location.back()
    this.router.navigate(['/adults/feel-better-now'])
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url, 'F', title])
    }else{
      let concat = encodeURIComponent(url.replaceAll('/','~'));
     this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
    }
 }
}
