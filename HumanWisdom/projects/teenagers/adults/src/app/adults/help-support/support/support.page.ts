import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public router: Router, private location: Location) { }

  ngOnInit() {
    if (!this.router.url.includes('/contact-us')) {
      window.history.pushState('', '', '/contact-us');
    }
  }

  goBack() {
    this.location.back()
  }


}
