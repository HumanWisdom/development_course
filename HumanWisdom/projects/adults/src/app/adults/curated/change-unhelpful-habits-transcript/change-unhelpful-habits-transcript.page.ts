import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-change-unhelpful-habits-transcript',
  templateUrl: './change-unhelpful-habits-transcript.page.html',
  styleUrls: ['./change-unhelpful-habits-transcript.page.scss'],
})
export class ChangeUnhelpfulHabitsTranscriptPage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
