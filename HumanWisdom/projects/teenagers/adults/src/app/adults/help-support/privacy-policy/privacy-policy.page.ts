import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    if (this.router.url=="/adults/help-support/privacy-policy") {
      window.history.pushState('', '', '/privacy-policy');
    }
  }

}
