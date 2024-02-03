import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-why-do-i-a13',
  templateUrl: './why-do-i-a13.page.html',
  styleUrls: ['./why-do-i-a13.page.scss'],
})
export class WhyDoIA13Page implements OnInit {

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
