import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-wisdom-for-workplace-transcript',
  templateUrl: './wisdom-for-workplace-transcript.page.html',
  styleUrls: ['./wisdom-for-workplace-transcript.page.scss'],
})
export class WisdomForWorkplaceTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
