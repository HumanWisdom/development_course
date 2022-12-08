import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-have-calm-mind-transcript',
  templateUrl: './have-calm-mind-transcript.page.html',
  styleUrls: ['./have-calm-mind-transcript.page.scss'],
})
export class HaveCalmMindTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
