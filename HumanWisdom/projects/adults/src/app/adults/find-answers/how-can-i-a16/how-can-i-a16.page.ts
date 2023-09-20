import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-how-can-i-a16',
  templateUrl: './how-can-i-a16.page.html',
  styleUrls: ['./how-can-i-a16.page.scss'],
})
export class HowCanIA16Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() 
  {
    this.location.back()
  }

}
