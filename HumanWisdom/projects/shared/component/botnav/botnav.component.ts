import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-botnav',
  templateUrl: './botnav.component.html',
  styleUrls: ['./botnav.component.scss'],
})
export class BotnavComponent implements OnInit {

  constructor(private router: Router, private location:Location) { }

  ngOnInit() {}

  routeJournal(){
    this.router.navigate(['/adults/journal'])
  }
  routeDash(){
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
