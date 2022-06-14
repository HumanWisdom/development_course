import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ft-prev',
  templateUrl: './ft-prev.component.html',
  styleUrls: ['./ft-prev.component.scss'],
})
export class FtPrevComponent implements OnInit {

  constructor(
    private location:Location
  ) { }

  ngOnInit() {}

  goBack()
  {
    this.location.back()
  }

}