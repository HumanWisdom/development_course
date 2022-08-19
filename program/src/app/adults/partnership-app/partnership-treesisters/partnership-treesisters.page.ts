import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-partnership-treesisters',
  templateUrl: './partnership-treesisters.page.html',
  styleUrls: ['./partnership-treesisters.page.scss'],
})
export class PartnershipTreesistersPage implements OnInit {
  paymentBank:any;
  constructor(public service:AdultsService,public router:Router) { }

  ngOnInit() {
    this.initializePaymentBankModel();
  }

  initializePaymentBankModel(){
    this.paymentBank={
      Plant_Trees:1,
      Receive_Income:0,
      CountryId:0,
      BankName:"",
      Acc_Number:"",
      IBAN_SWIFT_RoutingNo:"",
      ByPaypal:"0",
      PayPalID: ""
    }
  }

    Submit(){
        this.service.UpdatePartner(this.paymentBank).subscribe(res=>{
          if(res!=''){
          localStorage.setItem('referralCode',res);
          this.router.navigate(['adults/partnership-app/payment-plant-trees']);
          }
        })
     }

     Cancel(){
      this.router.navigate(['adults/partnership-app/partnership-subscribed']);
     }
}
