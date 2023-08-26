import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sorrow-and-loss',
  templateUrl: './sorrow-and-loss.page.html',
  styleUrls: ['./sorrow-and-loss.page.scss'],
})
export class SorrowAndLossPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))

  audioData:any;

  constructor(private router: Router, private location: Location){}

  ngOnInit() {
    this.audioData={
      url:'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.27.mp3'
    }
  }


  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url, 'F', title])
    }else{
      let concat = url.replaceAll('/','+');
     this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
    }
 }
}
