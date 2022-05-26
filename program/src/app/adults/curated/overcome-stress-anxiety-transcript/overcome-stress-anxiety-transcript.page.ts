import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-overcome-stress-anxiety-transcript',
  templateUrl: './overcome-stress-anxiety-transcript.page.html',
  styleUrls: ['./overcome-stress-anxiety-transcript.page.scss'],
})
export class OvercomeStressAnxietyTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
