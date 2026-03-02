import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-sessionover-s2',
  templateUrl: './sessionover-s2.component.html',
  styleUrls: ['./sessionover-s2.component.scss'],
})
export class SessionoverS2Component {
  @Input() bg: string;

  constructor(private router: Router) { }


  routeJournal(){
    this.router.navigate(['/adults/journal'])

  }

}
