import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-how-can-i-a14',
  templateUrl: './how-can-i-a14.page.html',
  styleUrls: ['./how-can-i-a14.page.scss'],
})
export class HowCanIA14Page implements OnInit {

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
