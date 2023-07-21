import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-your-emotions',
  templateUrl: './manage-your-emotions.page.html',
  styleUrls: ['./manage-your-emotions.page.scss'],
})
export class ManageYourEmotionsPage implements OnInit {

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
