import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'HumanWisdom-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  isAdults: boolean = true; 
  constructor(public router:Router,private location: Location) { 
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }

  ngOnInit() {
    if (this.router.url=="/adults/help-support/privacy-policy") {
     // window.history.pushState('', '', '/privacy-policy');
    }
  }

  goBack() {
    this.location.back()
  }

}
