import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'HumanWisdom-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(public router:Router,private location: Location) { }

  ngOnInit() {
    if (this.router.url=="/adults/help-support/privacy-policy") {
     // window.history.pushState('', '', '/privacy-policy');
    }
  }

  goBack() {
    this.location.back()
  }

}
