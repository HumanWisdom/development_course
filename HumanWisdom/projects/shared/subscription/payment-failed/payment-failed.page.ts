import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.page.html',
  styleUrls: ['./payment-failed.page.scss'],
})
export class PaymentFailedPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    SharedService.setDataInLocalStorage(Constant.ProgramModel, null);
    SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, null);
    SharedService.setDataInLocalStorage(Constant.SelectedPlanModel,null);
    SharedService.setDataInSessionStorage(Constant.ClientSecret, null);
  }
  routeToIndex(){
    this.router.navigateByUrl('/adults/subscription/index');
  }

  routeToDashboard(){
    this.router.navigateByUrl('/adults/adult-dashboard');
  }
}
