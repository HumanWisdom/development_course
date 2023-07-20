import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stress',
  templateUrl: './stress.page.html',
  styleUrls: ['./stress.page.scss'],
})
export class StressPage implements OnInit {

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
