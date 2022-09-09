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
  
  constructor(public router: Router, public location: Location,public service:AdultsService) {}

  ngOnInit() {}
  goBack() {
    this.location.back();
  }

  Cancel() {
    this.isCode = false;
  }

  Proceed(data) {
    this.service.AddPartner(data).subscribe(res=> {
      if(res!=null && res!=""){
        alert(res)
      }else{
        this.router.navigate(["adults/partnership-app/partnership-subscribed"]);
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
    if(this.referralCode==''){
      return 'disabled';
    }
  }
}
