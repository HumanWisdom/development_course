import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../models/program-model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss'],
})
export class AccessibilityComponent implements OnInit {
  isAdults: boolean = true;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
  }

  ngOnInit(): void {
     if (!this.router.url.includes('/accessibility-policy')) {
      //  window.history.pushState('', '', '/cookies-policy');
    }
    console.log('ProgramId:', SharedService.ProgramId);
console.log('isAdults:', this.isAdults);
  }

  goBack(): void {
    this.location.back();
  }
}
