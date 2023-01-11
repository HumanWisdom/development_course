import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if (!(this.router.url=='/terms-conditions')){
      window.history.pushState('', '', '/terms-conditions');
    }
  
  }

}
