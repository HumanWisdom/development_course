import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  constructor(private router:Router, private location: Location) { }

  ngOnInit() {
    if (!(this.router.url=='/terms-and-conditions')){
      window.history.pushState('', '', '/terms-and-conditions');
    }
  
  }

  goBack() {
    this.location.back()
  }

}
