import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feeling-upset',
  templateUrl: './feeling-upset.page.html',
  styleUrls: ['./feeling-upset.page.scss'],
})
export class FeelingUpsetPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  
  audioData:any;

  constructor(private router: Router) { 
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3'
    }
  }

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3'
    }
  }

  audioevent(url) 
  {
      this.router.navigate(['feel-better-now/feeling-upset/audiopage/', url ,"Manage expectations",Math.random() ])
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }
}
