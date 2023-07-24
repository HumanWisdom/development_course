import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-understand-how-your-mind-works',
  templateUrl: './understand-how-your-mind-works.page.html',
  styleUrls: ['./understand-how-your-mind-works.page.scss'],
})
export class UnderstandHowYourMindWorksPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }

}
