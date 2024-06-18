import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  isAdults: boolean = true; 
  constructor(private location: Location) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
