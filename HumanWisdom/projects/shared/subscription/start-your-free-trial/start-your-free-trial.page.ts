import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-start-your-free-trial',
  templateUrl: './start-your-free-trial.page.html',
  styleUrls: ['./start-your-free-trial.page.scss'],
})
export class StartYourFreeTrialPage implements OnInit {

  constructor(private router: Router,private location: Location, private servive: AdultsService,
    private navigateService:NavigationService) { }

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
    let curr = this.servive.previousUrl;
    let loggedin = localStorage.getItem("isloggedin")
    if((!loggedin || loggedin || loggedin === 'F' || loggedin === 'T') && curr && (curr.includes('view-stories?sId') || curr.includes('wisdom-shorts/'))){
      window.history.go(-2)
    }else {
    var url = this.navigateService.navigateToBackLink();
    if(url==null){
      this.location.back();
    }   
    }
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
