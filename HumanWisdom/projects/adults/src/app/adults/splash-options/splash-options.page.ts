import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../shared/services/shared.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-splash-options',
  templateUrl: './splash-options.page.html',
  styleUrls: ['./splash-options.page.scss'],
})
export class SplashOptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  enableProgram(val) {
   SharedService.setProgramId(val);
   window.location.href = environment.clientUrl+"/onboarding/login";
  }
}
