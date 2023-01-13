import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    if (!this.router.url.includes('/faqs')) {
      window.history.pushState('', '', '/faqs');
    }
  }

}
