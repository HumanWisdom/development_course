import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-have-fulfilling-relationships-transcript',
  templateUrl: './have-fulfilling-relationships-transcript.page.html',
  styleUrls: ['./have-fulfilling-relationships-transcript.page.scss'],
})
export class HaveFulfillingRelationshipsTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
