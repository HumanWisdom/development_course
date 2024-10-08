import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdultsService } from "../../adults.service";

@Component({
  selector: "app-referral-code",
  templateUrl: "./referral-code.page.html",
  styleUrls: ["./referral-code.page.scss"],
})
export class ReferralCodePage implements OnInit {
  isCode: boolean = false;
  referralCode:string='';
  responseMessage:any;
  enableAlert:boolean = false;
  content='';
  isValidated=false;
  constructor(public router: Router, public location: Location,public service:AdultsService) {}

  ngOnInit() {
    if(!localStorage.getItem('AffReferalCode') || localStorage.getItem('AffReferalCode')==null || localStorage.getItem('AffReferalCode')==''){
      this.service.GetUsedAffDiscCode().subscribe((res:any)=>{
        if(res){
           this.referralCode = res;
        }
     });
    }else{
      this.referralCode = localStorage.getItem('AffReferalCode');
    }
 
  }
  goBack() {
    this.location.back();
  }

  Validate(input){
    if(input!='' && input!=null){
      this.service.ValidateAffRefCode(input).subscribe((res:any)=>{
        if(res){
            this.isValidated = true;
          }
      },
      error=>{
        this.isValidated = false;
        this.enableAlert =  true;
        this.content = error.error.Message;
      });
    }
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enableAlert = false;
  }

  Cancel() {
    this.isCode = false;
  }

  Proceed(data) {
    this.service.AddPartner(data).subscribe(res=> {
      if(res!=null && res!="" && res.length>5){
        alert(res)
      }else{
        localStorage.setItem("CouponCode", res[0].CouponCode);
        localStorage.setItem("ReferralLink", res[0].ReferralLink);
        localStorage.setItem("isPartner","1");
        this.router.navigate(["/adults/partnership-app/payment-income"]);
        //this.router.navigate(["adults/partnership-app/partnership-subscribed"]);
      }
    },
    error=>{

    },);
  }
  
  GoToIndex(){
    this.router.navigate(['adults/partnership-webpage/partnership-index']);
  }

  DontHaveCode() {
    this.isCode = true;
  }

  getClass(){
    if(this.referralCode=='' ||   this.isValidated == false){
      return 'disabled';
    }
  }

}
