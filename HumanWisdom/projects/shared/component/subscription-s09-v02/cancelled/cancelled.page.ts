import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "../../../services/shared.service";
import { Constant } from '../../../services/constant';
import { ProgramType } from '../../../models/program-model';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.page.html',
  styleUrls: ['./cancelled.page.scss'],
})
export class CancelledPage implements OnInit {
  trialData:any;
  isAdults: boolean = true;

  constructor(private router:Router) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
   }

  ngOnInit() {
   let data =  SharedService.getDataFromLocalStorage(Constant.ManageSubscriptionData);
   if(data && data!=null){
    this.trialData = JSON.parse(data);
   }

  }

  NewSubscription() {
    SharedService.setDataInLocalStorage(Constant.isFromCancelled,'T');
    this.router.navigate(["/"+ SharedService.getprogramName() + '/subscription/try-free-and-subscribe']);
  }

  dashboard(){
    if (this.isAdults) {
      this.router.navigate(['/' + SharedService.getprogramName() + '/adult-dashboard'])
    } else {
      this.router.navigate(['/teenagers/teenager-dashboard'])
    }
    this.router.navigate(['/adults/adult-dashboard']);
  }

}
