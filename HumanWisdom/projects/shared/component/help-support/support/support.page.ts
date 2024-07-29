import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  isAdults: boolean = true; 
  constructor(public router: Router, private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
    if (!this.router.url.includes('/contact-us')) {
     // window.history.pushState('', '', '/contact-us');
    }
  }

  goBack() {
    this.location.back()
  }


}
