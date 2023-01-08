import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HumanWisdom-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
    window.history.pushState('', '', '/faqs');
  }

}
