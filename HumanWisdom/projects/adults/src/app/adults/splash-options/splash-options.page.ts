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
    this.router.navigate(['/adults/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
  }
}
