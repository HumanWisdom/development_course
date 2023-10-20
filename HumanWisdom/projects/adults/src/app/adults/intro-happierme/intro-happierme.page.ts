import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-intro-happierme',
  templateUrl: './intro-happierme.page.html',
  styleUrls: ['./intro-happierme.page.scss'],
})
export class IntroHappiermePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() 
  {
    this.location.back();
  }

}
