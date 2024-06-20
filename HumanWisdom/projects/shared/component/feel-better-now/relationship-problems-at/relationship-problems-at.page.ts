import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relationship-problems-at',
  templateUrl: './relationship-problems-at.page.html',
  styleUrls: ['./relationship-problems-at.page.scss'],
})
export class RelationshipProblemsAtPage implements OnInit {

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
