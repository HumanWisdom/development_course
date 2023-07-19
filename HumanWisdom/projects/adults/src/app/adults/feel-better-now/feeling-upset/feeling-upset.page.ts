import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feeling-upset',
  templateUrl: './feeling-upset.page.html',
  styleUrls: ['./feeling-upset.page.scss'],
})
export class FeelingUpsetPage implements OnInit {

  audioData:any;

  constructor(private router: Router, private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3'
    }
  }

  audioevent(url) 
  {
      this.router.navigate(['feel-better-now/feeling-upset/audiopage/', url ,"Manage expectations",Math.random() ])
  }
}
