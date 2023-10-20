import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-intro-happierme',
  templateUrl: './intro-happierme.page.html',
  styleUrls: ['./intro-happierme.page.scss'],
})
export class IntroHappiermePage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() 
  {
    this.location.back();
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

}
