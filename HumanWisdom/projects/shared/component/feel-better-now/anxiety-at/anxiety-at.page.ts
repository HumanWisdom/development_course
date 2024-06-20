import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anxiety-at',
  templateUrl: './anxiety-at.page.html',
  styleUrls: ['./anxiety-at.page.scss'],
})
export class AnxietyAtPage implements OnInit {

  isAdults = false;
  isShowTranscript = false;
  isShowAudio = true;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  changeType() {
    if (this.isShowTranscript) {
      this.isShowTranscript = false;
      this.isShowAudio = true;
    } else {
      this.isShowTranscript = true;
      this.isShowAudio = false;
    }
  }

  goBack()
  {
     this.location.back()
  }

}
