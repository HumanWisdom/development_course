import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-develop-a-calm-mind',
  templateUrl: './develop-a-calm-mind.page.html',
  styleUrls: ['./develop-a-calm-mind.page.scss'],
})
export class DevelopACalmMindPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

}
