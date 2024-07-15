import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-can-i-a10',
  templateUrl: './how-can-i-a10.page.html',
  styleUrls: ['./how-can-i-a10.page.scss'],
})
export class HowCanIA10Page implements OnInit {

  isAdults = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router: Router) { }

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
    this.router.navigate(["/adults/find-answers/how-can-i"])

  }

}
