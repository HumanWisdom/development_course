import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-how-can-i-a05',
  templateUrl: './how-can-i-a05.page.html',
  styleUrls: ['./how-can-i-a05.page.scss'],
})
export class HowCanIA05Page implements OnInit {

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
