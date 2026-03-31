import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-botnav',
  templateUrl: './botnav.component.html',
})
export class BotnavComponent {

  constructor(private readonly router: Router, private readonly location:Location) { }

  routeJournal(){
    localStorage.setItem('NaviagtedFrom', this.router.url);
    this.router.navigate(['/adults/journal'])
  }
  routeDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
