import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";

@Component({
  selector: 'app-micro-learning-end',
  templateUrl: './micro-learning-end.page.html',
  styleUrls: ['./micro-learning-end.page.scss'],
})
export class MicroLearningEndPage implements OnInit {
  isAdults = true;
  journalText = "";

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  ngOnInit() {
    localStorage.setItem("progressbarvalue", "100");
  }

  goBack() {
    this.location.back();
  }

  addJournal() {
    // Logic to add to journal
    console.log("Journal added:", this.journalText);
    // You might call a service here
  }

  navigateToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning`]);
  }
}
