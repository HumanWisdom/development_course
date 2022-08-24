import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';
import { AdultsService } from '../../adults.service';

@Component({
  selector: "app-payment-bank",
  templateUrl: "./payment-bank.page.html",
  styleUrls: ["./payment-bank.page.scss"],
})
export class PaymentBankPage implements OnInit {
  LinkBankAccount: string = "linkAccount";
  countryList:any;
  paymentBank: any;
  PlaceHolderRouter:string='IBAN / SWIFT';
  constructor(
    private service: AdultsService,
    public router: Router,
    public onBoardingService: OnboardingService
  ) {
    this.initializePaymentBankModel();
  }

  ngOnInit() {
    this.getCountry();
  }

  initializePaymentBankModel() {
    this.paymentBank = {
      Plant_Trees: 0,
      Receive_Income: 1,
      CountryId: 0,
      BankName: "",
      Acc_Number: "",
      IBAN_SWIFT_RoutingNo: "",
      ByPaypal: "",
      PayPalID: "",
    };
  }
  LinkbankAccountbtn() {
    this.LinkBankAccount = "linkAccount";
  }

  payPalbtn() {
    this.LinkBankAccount = "Paypal";
  }
  getDisabled() {
    if (this.LinkBankAccount == "Paypal" && this.paymentBank.PayPalID == "") {
      return "disabled";
    }
    if (
      this.LinkBankAccount == "linkAccount" &&
      (this.paymentBank.CountryId == 0 ||
      this.paymentBank.BankName == "" ||
      this.paymentBank.Acc_Number == "" ||
      this.paymentBank.IBAN_SWIFT_RoutingNo == "")
    ) {
      return "disabled";
    }
  }

  Submit() {
    if (this.LinkBankAccount == "linkAccount") {
      this.paymentBank.ByPaypal = "0";
      this.paymentBank.PayPalID = "";
    } else {
      this.paymentBank.CountryId == 0;
      this.paymentBank.BankName == "";
      this.paymentBank.Acc_Number == "";
      this.paymentBank.IBAN_SWIFT_RoutingNo == "";
    }
    this.service.UpdatePartner(this.paymentBank).subscribe((res) => {
      if (res != "") {
        localStorage.setItem("referralCode", res);
        this.router.navigate(["adults/partnership-app/payment-income"]);
      }
    });
  }

  getCountry() {
    this.service.GetCountry().subscribe(
      (res: any) => {
        this.countryList=res;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
  onChange($event){
    this.paymentBank.CountryId=$event;
    if($event==50){
      this.PlaceHolderRouter="Routing Number"
    }else{
      this.PlaceHolderRouter="IBAN / SWIFT"
    }
  }
  getPlaceHolder(){
    return this.PlaceHolderRouter;
  }
}

