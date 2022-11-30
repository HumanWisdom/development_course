import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-deal-with-sorrow-loss-transcript',
  templateUrl: './deal-with-sorrow-loss-transcript.page.html',
  styleUrls: ['./deal-with-sorrow-loss-transcript.page.scss'],
})
export class DealWithSorrowLossTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
