import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-how-can-i-a19',
  templateUrl: './how-can-i-a19.page.html',
  styleUrls: ['./how-can-i-a19.page.scss'],
})
export class HowCanIA19Page implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() 
  {
    this.location.back()
  }

}
