import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-ft-advert',
  templateUrl: './ft-advert.component.html',
  styleUrls: ['./ft-advert.component.scss'],
})
export class FtAdvertComponent implements OnInit {

  constructor(public router: Router,public service:OnboardingService) { }

  ngOnInit( ) {}
  RedeemCode(){
    this.service.isActivationFlow=true;
    this.service.isAdvert_hwp=true;
    this.router.navigate(['/onboarding/add-to-cart']);
  }
}
