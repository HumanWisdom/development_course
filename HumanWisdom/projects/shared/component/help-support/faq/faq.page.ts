import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'HumanWisdom-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  isAdults: boolean = true; 
  constructor(public router: Router, private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
    if (!this.router.url.includes('/faqs')) {
     // window.history.pushState('', '', '/faqs');
    }
  }

  goBack() {
    this.location.back()
  }

}
