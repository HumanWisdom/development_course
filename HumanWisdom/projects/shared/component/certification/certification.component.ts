import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
})

export class CertificationComponent implements OnInit {
  @Input() moduleName: string;
  module:any
  @Input() isModuleCompleted:boolean;
  isAdults = true;
  public userName=localStorage.getItem('name');

  
  constructor(private router: Router
  ) {
 
   }

  ngOnInit() {
     if (SharedService.ProgramId == ProgramType.Adults) {
      debugger
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }
  capitalizeFirstLetter(inputString: string): string {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  getTodayDate(): string {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear();

    // Function to get the day suffix (st, nd, rd, th)
    const getDaySuffix = (day: number): string => {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const suffix = getDaySuffix(day);

    return `${day}${suffix} ${month} ${year}`;
  }
}
