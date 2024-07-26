import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'HumanWisdom-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
})
export class TermsConditionsPage implements OnInit {
  isAdults: boolean = true; 
  constructor(private router:Router, private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
    if (!(this.router.url=='/terms-and-conditions')){
     //  window.history.pushState('', '', '/terms-and-conditions');
    }
  
  }

  goBack() {
    this.location.back()
  }

}
