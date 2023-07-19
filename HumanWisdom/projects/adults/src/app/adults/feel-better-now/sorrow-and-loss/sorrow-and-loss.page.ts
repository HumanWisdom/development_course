import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorrow-and-loss',
  templateUrl: './sorrow-and-loss.page.html',
  styleUrls: ['./sorrow-and-loss.page.scss'],
})
export class SorrowAndLossPage implements OnInit {
  audioData:any;
  constructor(private router: Router){}

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.27.mp3'
    }
  }
  audioevent(url) {
      this.router.navigate(['feel-better-now/sorrow-and-loss/audiopage/', url ,"SorrowAndLoss",Math.random() ])
  }
}
