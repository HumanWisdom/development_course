import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-why-do-i-a02',
  templateUrl: './why-do-i-a02.page.html',
  styleUrls: ['./why-do-i-a02.page.scss'],
})
export class WhyDoIA02Page implements OnInit {

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
