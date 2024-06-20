import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boredom-at',
  templateUrl: './boredom-at.page.html',
  styleUrls: ['./boredom-at.page.scss'],
})
export class BoredomAtPage implements OnInit {

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
