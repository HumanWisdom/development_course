import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  constructor(
    private location: Location,
  ) 
  { }

  ngOnInit() {
  }

  goBack() 
  {
    this.location.back();
  }

}
