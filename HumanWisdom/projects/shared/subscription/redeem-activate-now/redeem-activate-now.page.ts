import { Component, OnInit } from '@angular/core';
import { Constant } from '../../services/constant';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-redeem-activate-now',
  templateUrl: './redeem-activate-now.page.html',
  styleUrls: ['./redeem-activate-now.page.scss'],
})
export class RedeemActivateNowPage implements OnInit {

  userDetails :any;
  constructor(private service: OnboardingService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userDetails = {
      userName: SharedService.getDataFromLocalStorage(Constant.Name),
      userEmail: SharedService.getDataFromLocalStorage(Constant.email),
      reedemCode: '',
      isCodeVerified :  false
    }
  }
  
  activateSubscription() {

  }

  verifyCode() {
    this.service.verifyCode({
      "Email": this.userDetails?.userEmail,
      "VCode": this.userDetails?.reedemCode
    })
      .subscribe(res => {
        if (res > 0) {
          
        }
      })

  }

}
