import { Location } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, HostListener, ViewChild, OnInit } from '@angular/core';
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
  LinkBankAccount: string = "linkAccount";
  countryList: any;
  paymentBank: any;
  PlaceHolderRouter: string = 'IBAN / SWIFT';
  isBankAccountChecked: boolean;
  isUpdate: boolean = false;
  ByPaypal: number = 0;
  isPaypalChecked: boolean = false;
  isBankAccount: boolean = true;
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

  payPalbtn(event?: Event, mode?: string) {
    this.isPaypalChecked = true;
    this.isBankAccount = false;
    this.paymentBank.ByPaypal = "1";
    this.LinkBankAccount = "Paypal";
  }

  bankChecked(event?: Event, mode?: string) {
    this.isBankAccount = true;
    this.isPaypalChecked = false;
    this.LinkBankAccount = "linkAccount";
    this.paymentBank.ByPaypal = "0";
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

  isCountryDropdownOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select-wrapper')) {
      this.isCountryDropdownOpen = false;
    }
  }

  toggleCountryDropdown() {
    this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
  }

  selectCountry(cid: number, name: string) {
    this.paymentBank.CountryId = cid;
    this.onChange(cid);
    this.isCountryDropdownOpen = false;
  }

  getSelectedCountryName(): string {
    if (!this.paymentBank || this.paymentBank.CountryId == 0) return 'Select Country';
    const found = this.countryList?.find(c => c.CID == this.paymentBank.CountryId);
    return found ? found.Country : 'Select Country';
  }

  clickHereInfo() {
    this.router.navigate(['adults/partnership-webpage/partnership-index'], {
      state: { fromPaymentBank: true }
    });
  }

  doThisLater() {
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

