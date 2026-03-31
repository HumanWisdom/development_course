import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-sessionover-s2',
  templateUrl: './sessionover-s2.component.html',
  styleUrls: ['./sessionover-s2.component.scss'],
})
export class SessionoverS2Component {
  @Input() bg: string;

  constructor(private router: Router) { 
    SharedService.isModuleEnd = true;
  }


  routeJournal(){
    localStorage.setItem('NaviagtedFrom', this.router.url);
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      this.router.navigate(['/teenagers/journal'])
    } else {
      this.router.navigate(['/adults/journal'])
    }
  }

}
