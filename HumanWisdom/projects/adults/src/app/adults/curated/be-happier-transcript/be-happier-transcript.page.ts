import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-be-happier-transcript',
  templateUrl: './be-happier-transcript.page.html',
  styleUrls: ['./be-happier-transcript.page.scss'],
})
export class BeHappierTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
