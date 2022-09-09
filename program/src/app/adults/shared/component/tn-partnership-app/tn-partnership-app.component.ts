import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tn-partnership-app',
  templateUrl: './tn-partnership-app.component.html',
  styleUrls: ['./tn-partnership-app.component.scss'],
})
export class TnPartnershipAppComponent implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {}

  goBack()
  {
    this.location.back();
  }
}
