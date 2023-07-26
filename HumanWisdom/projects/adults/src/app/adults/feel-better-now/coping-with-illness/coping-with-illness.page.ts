import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coping-with-illness',
  templateUrl: './coping-with-illness.page.html',
  styleUrls: ['./coping-with-illness.page.scss'],
})
export class CopingWithIllnessPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  mediaUrl:any;
  
  constructor(private router: Router, private location: Location) 
  {
    this.mediaUrl = {
      url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.30.mp3',
      youtubeUrl: 'tsl5QK9aqTI'
    }
  }

  ngOnInit() {}

  audioevent(url) {
      this.router.navigate(['feel-better-now/coping-with-illness/audiopage/', url ,"Dealing with an illness",Math.random() ])
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
