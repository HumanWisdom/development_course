import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from 'src/app/log-event.service';

@Component({
  selector: 'app-tn-advert',
  templateUrl: './tn-advert.component.html',
  styleUrls: ['./tn-advert.component.scss'],
})
export class TnAdvertComponent implements OnInit {
  login = 'Login';

  constructor(
    private router: Router,
    public platform: Platform,
    public logeventservice: LogEventService
  ) { }

  ngOnInit() {
    let userid = localStorage.getItem("isloggedin");
    if (userid === "T") {
      this.login = 'Logout'
    }
  }

  routedashboard() {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  Logevent() {
    if (this.login === 'Logout') {
      if (confirm("Are you sure you want to logout ?") === true) {
        this.logeventservice.logEvent('click_logout_Hamburger')
        if (this.platform.isBrowser) {
          localStorage.setItem("isloggedin", "F");
          localStorage.setItem("guest", "T");
          localStorage.setItem("navigateToUpgradeToPremium", "false");
          localStorage.setItem("btnClickBecomePartner", "false");
          this.router.navigate(["/onboarding/login"]);
        }
      }
    } else {
      this.router.navigate(["/onboarding/login"]);
    }
  }

}
