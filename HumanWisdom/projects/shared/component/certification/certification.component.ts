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
      this.isAdults = true;
        } else {
         this.isAdults = false;
        }
  }
}
