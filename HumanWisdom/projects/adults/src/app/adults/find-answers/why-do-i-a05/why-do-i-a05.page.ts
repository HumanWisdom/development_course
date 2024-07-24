import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-why-do-i-a05',
  templateUrl: './why-do-i-a05.page.html',
  styleUrls: ['./why-do-i-a05.page.scss'],
})
export class WhyDoIA05Page implements OnInit {

  isAdults = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router:Router) { }

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
    // this.location.back()
    this.router.navigate(["/adults/find-answers/why-do-i"])
  }

}
