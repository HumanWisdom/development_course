import { Location } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';
import { OnboardingService } from '../../../../../../shared/services/onboarding.service';
import { AdultsService } from '../../adults.service';

@Component({
  selector: "app-payment-bank",
  templateUrl: "./payment-bank.page.html",
  styleUrls: ["./payment-bank.page.scss"],
})
export class PaymentBankPage implements OnInit {
  LinkBankAccount: string = "";
  countryList: any;
  paymentBank: any;
  PlaceHolderRouter: string = 'IBAN / SWIFT';
  isBankAccountChecked: boolean;
  isUpdate: boolean = false;
  ByPaypal: number = 0;
  isPaypalChecked: boolean = false;
  isBankAccount:boolean = false;
  @ViewChild('postModal') postModal: any;
  constructor(
    private service: AdultsService,
    public router: Router,
    public onBoardingService: OnboardingService,
    private location: Location,
  ) {
    this.initializePaymentBankModel();
    if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras) {
      this.isUpdate = this.router.getCurrentNavigation().extras?.state?.isUpdate;
      this.ByPaypal = this.router.getCurrentNavigation().extras?.state?.ByPaypal;

      localStorage.setItem("ByPaypal", this.ByPaypal?.toString())
      localStorage.setItem("isUpdate", this.isUpdate?.toString())
    } else {
      this.isUpdate = localStorage.getItem("isUpdate") == 'true' ? true : false;
      this.ByPaypal = +localStorage.getItem("ByPaypal");
    }


  }
  ngOnInit() {
    this.getCountry();
    if (this.isUpdate) {
      this.service.getPartnerBankDetails().subscribe(res => {
        if (res) {
          this.updatePaymentModel(res[0])
          this.setCheckbox();
        }
      });
    }
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

  updatePaymentModel(paymentData: any) {
    this.paymentBank = {
      Plant_Trees: 0,
      Receive_Income: 1,
      CountryId: paymentData.CountryId,
      BankName: paymentData.BankName,
      Acc_Number: paymentData.Acc_Number,
      IBAN_SWIFT_RoutingNo: paymentData.IBAN_SWIFT_RoutingNo,
      ByPaypal: paymentData.ByPaypal,
      PayPalID: paymentData.PaypalID,
    };

    this.ByPaypal = paymentData.ByPaypal;
  }

  LinkbankAccountbtn() {
    this.LinkBankAccount = "linkAccount";
  }

  payPalbtn(event:Event,mode) {
    this.isPaypalChecked = (event.target as HTMLInputElement).checked;
    if(this.isPaypalChecked){
      this.paymentBank.ByPaypal = "1";
      this.LinkBankAccount = "Paypal";
    }
    this.isBankAccount = !this.isPaypalChecked;  
  }
  bankChecked(event:Event,mode) {
    this.isBankAccount  = (event.target as HTMLInputElement).checked;
    if(this.isBankAccount){
      this.LinkBankAccount = "linkAccount";
      this.paymentBank.ByPaypal = "0";
    }
    this.isPaypalChecked = !this.isBankAccount;  
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
      this.paymentBank.CountryId =0;
      this.paymentBank.BankName = "";
      this.paymentBank.Acc_Number = "";
      this.paymentBank.IBAN_SWIFT_RoutingNo = "";
    }
    this.service.UpdatePartner(this.paymentBank).subscribe((res) => {
      if (res != "") {
        if(this.paymentBank.PayPalID =='' && this.paymentBank.Acc_Number == ""){
          localStorage.setItem("referralCode", res);
          this.postModal.nativeElement.click();
        }else{
          localStorage.removeItem("ByPaypal");
          localStorage.removeItem("isUpdate");
          if (this.isUpdate) {
            this.location.back();
          }
          else {
            this.router.navigate(["adults/partnership-report/income-report"]);
          }
        }
        }
    });
  }

  closePost(){
    localStorage.removeItem("ByPaypal");
    localStorage.removeItem("isUpdate");
    if (this.isUpdate) {
      this.router.navigate(["adults/partnership-app/payment-income"]);
    }
    else {
      this.router.navigate(["adults/partnership-report/income-report"]);
    }
  }



  getCountry() {
    this.service.GetCountry().subscribe(
      (res: any) => {
        this.countryList = res;
      },
      (error) => {
        console.log(error);
      },
      () => { }
    );
  }
  onChange($event) {
    this.paymentBank.CountryId = $event;
    if ($event == 50) {
      this.PlaceHolderRouter = "Routing Number"
    } else {
      this.PlaceHolderRouter = "IBAN / SWIFT"
    }
  }
  getPlaceHolder() {
    return this.PlaceHolderRouter;
  }
  back() {
    this.location.back();
  }

  setCheckbox() {
    setTimeout(() => {
      if (this.ByPaypal == 1) {
        this.isPaypalChecked = true;
        this.isBankAccount = false;
        this.LinkBankAccount = 'Paypal';
      }
      else {
        this.isPaypalChecked = false;
        this.isBankAccount = true;
        this.LinkbankAccountbtn()
      }
    });

  }
}

