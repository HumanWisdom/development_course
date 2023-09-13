import { Component, OnInit } from '@angular/core';
import { SubscriptionType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  SelectedSubscription : string;
  
  constructor() { }

  ngOnInit() {
  }

   InitializeDefaultValues(){
    this.SelectedSubscription = (Object.keys(SubscriptionType).find((key) => SubscriptionType[key] === SubscriptionType.Annual))?.toString();
    SharedService.setDataInLocalStorage("HwpSubscriptionPlan", this.SelectedSubscription );
   }

   SelectSubscriptionType(subscriptionType:string){
    SharedService.setDataInLocalStorage("HwpSubscriptionPlan",subscriptionType);
    this.SelectedSubscription = subscriptionType;
   }


}
