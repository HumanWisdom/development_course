import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-manage-your-emotions-transcript',
  templateUrl: './manage-your-emotions-transcript.page.html',
  styleUrls: ['./manage-your-emotions-transcript.page.scss'],
})
export class ManageYourEmotionsTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
