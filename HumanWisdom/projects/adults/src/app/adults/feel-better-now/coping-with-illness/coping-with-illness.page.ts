import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coping-with-illness',
  templateUrl: './coping-with-illness.page.html',
  styleUrls: ['./coping-with-illness.page.scss'],
})
export class CopingWithIllnessPage implements OnInit {
  audioData:any;
  constructor(private router: Router, private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.30.mp3'
    }
  }
  audioevent(url) {
      this.router.navigate(['feel-better-now/coping-with-illness/audiopage/', url ,"Dealing with an illness",Math.random() ])
  }
}
