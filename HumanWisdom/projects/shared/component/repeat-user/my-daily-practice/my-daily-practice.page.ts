import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'app-my-daily-practice',
  templateUrl: './my-daily-practice.page.html',
  styleUrls: ['./my-daily-practice.page.scss'],
})
export class MyDailyPracticePage implements OnInit {
  isAdults = false;


  constructor() { }

  ngOnInit() {
  if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

  }

}
