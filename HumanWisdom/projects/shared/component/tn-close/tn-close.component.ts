import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tn-close',
  templateUrl: './tn-close.component.html',
  styleUrls: ['./tn-close.component.scss'],
})
export class TnCloseComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back()
  }

}
