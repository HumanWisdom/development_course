import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../shared/services/shared.service';
import { LogEventService } from '../../../../../shared/services/log-event.service';

@Component({
  selector: 'app-splash-options',
  templateUrl: './splash-options.page.html',
  styleUrls: ['./splash-options.page.scss'],
})
export class SplashOptionsPage implements OnInit {

  constructor(public router: Router, private logeventservice: LogEventService) { }

  ngOnInit() {
    this.logeventservice.logEvent('view_welcome_screen');
  }

  enableProgram(val) {
    if (val === 11) {
      this.logeventservice.logEvent('click_teenagers_section');
    } else if (val === 9) {
      this.logeventservice.logEvent('click_adults_section');
    }

    SharedService.setProgramId(val);

    const isLoggedIn = SharedService.isLoggedIn();

    if (isLoggedIn) {
      // Logged-in user: go straight to the subscription/free-trial page
      this.router.navigate([`/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`]);
    } else {
      // Guest user: set redirect so that after login the user lands on the payment screen
      SharedService.UrlToRedirect = `/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`;
      this.router.navigate(['/adults/onboarding/login'], { replaceUrl: true, skipLocationChange: true });
    }
  }
}
