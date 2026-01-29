import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ft-prev',
  templateUrl: './ft-prev.component.html',
  styleUrls: ['./ft-prev.component.scss'],
})
export class FtPrevComponent {

  constructor(
    private readonly location: Location
  ) { }



  goBack()
  {
    this.location.back()
  }

}