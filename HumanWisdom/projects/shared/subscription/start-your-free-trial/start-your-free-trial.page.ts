import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
@Component({
  selector: 'app-start-your-free-trial',
  templateUrl: './start-your-free-trial.page.html',
  styleUrls: ['./start-your-free-trial.page.scss'],
})
export class StartYourFreeTrialPage implements OnInit {

  constructor(private router: Router,    private location: Location) { }

  ngOnInit() {
  }

  tryFreeSubscribe(){
      if (this.CheckIfUserIsLoggedIn()) {
        this.router.navigate(['/subscription/try-free-and-subscribe']);
      } else {
        SharedService.UrlToRedirect='/subscription/try-free-and-subscribe';
        this.router.navigateByUrl('/login');
      }
  }

  back(){
    this.location.back();
  }


  CheckIfUserIsLoggedIn() {
    if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
      return true;
    }
    return false;
  }

  routeToDashboard(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }
}
