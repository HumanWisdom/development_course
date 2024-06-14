import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.page.html',
  styleUrls: ['./cancelled.page.scss'],
})
export class CancelledPage implements OnInit {
  trialData:any;
  isAdults = true;

  constructor(private router:Router) { }

  ngOnInit() {
   let data =  SharedService.getDataFromLocalStorage(Constant.ManageSubscriptionData);
   if(data && data!=null){
    this.trialData = JSON.parse(data);
   }

  }

  NewSubscription() {
    SharedService.setDataInLocalStorage(Constant.isFromCancelled,'T');
    this.router.navigate(['/subscription/try-free-and-subscribe']);
  }

  dashboard(){
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    if (this.isAdults) {
      this.router.navigate(['/adults/adult-dashboard'])
    } else {
      this.router.navigate(['/teenagers/teenager-dashboard'])
    }
  }

}
