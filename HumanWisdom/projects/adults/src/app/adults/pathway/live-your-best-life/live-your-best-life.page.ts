import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-live-your-best-life',
  templateUrl: './live-your-best-life.page.html',
  styleUrls: ['./live-your-best-life.page.scss'],
})
export class LiveYourBestLifePage implements OnInit {

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
