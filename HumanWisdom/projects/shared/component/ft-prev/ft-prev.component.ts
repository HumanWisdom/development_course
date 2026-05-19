import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ft-prev',
  templateUrl: './ft-prev.component.html',
  styleUrls: ['./ft-prev.component.scss'],
})
export class FtPrevComponent {

  constructor(
    private readonly location: Location,
    private readonly navigationService: NavigationService,
    private readonly router: Router
  ) { }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigateByUrl(url);
    }
  }

}