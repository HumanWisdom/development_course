import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor() { }

  ngOnInit() {
    window.history.pushState('', '', '/privacy-policy');
  }

}
