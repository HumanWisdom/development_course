import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anger',
  templateUrl: './anger.page.html',
  styleUrls: ['./anger.page.scss'],
})
export class AngerPage implements OnInit {

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
