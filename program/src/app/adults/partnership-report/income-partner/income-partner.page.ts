import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { PartnershipReport } from '../partnership-report.model';

@Component({
  selector: 'app-income-partner',
  templateUrl: './income-partner.page.html',
  styleUrls: ['./income-partner.page.scss'],
})
export class IncomePartnerPage implements OnInit {
   partnersList:any[]=[];
   partnershipReport: PartnershipReport;
   BankDet: string = "";
   activePartrnerCount=0;
   inactivePartnerCount=0;
   activePartnerList=[];
   inactivePartnerList=[];
   isRecieveIncome=true;
   isExpand=false;
   isCopy=true;
   expandedUserId=0;
   footerOption:string='Receive Income';
   partnerOption=localStorage.getItem('PartnerOption');
  constructor(
    public adultService: AdultsService,
    private ngNavigatorShareService: NgNavigatorShareService,
    public router: Router,
   public location:Location
  ) {
    this.isRecieveIncome=localStorage.getItem('PartnerOption')=='ReceiveIncome';
    this.InitializePartnershipReport();
    if(this.isRecieveIncome){
      this.footerOption='tree Planted';
    }else{
      this.footerOption='Receive Income';
    }
  }


  ngOnInit() {
 if(!this.isRecieveIncome){
  this.adultService.getTreePlantationReport().subscribe((res) => {
    if (res) {
      this.partnershipReport = res;
      this.adultService.GetMyPartners().subscribe((res) => {
        if (res) {
          this.partnersList=res;
          if(res){
            this.activePartnerList=this.partnersList.filter(x=>x.PartnerStatus=="active");
            this.inactivePartnerList=this.partnersList.filter(x=>x.PartnerStatus=="inactive");
          }
        }
      });
    }
  });
 }else{
  this.adultService.GetPartnerCommReport().subscribe((res) => {
    if (res) {
      this.partnershipReport = res;
      this.getMaskAccountDetails();
      this.adultService.GetMyPartners().subscribe((res) => {
        if (res) {
          this.partnersList=res;
          if(res){
            this.activePartnerList=this.partnersList.filter(x=>x.PartnerStatus=="active");
            this.inactivePartnerList=this.partnersList.filter(x=>x.PartnerStatus=="inactive");
          }
        }
      });
    }
  });
 }
   
  }
  copyText(referralCode): void {
    navigator.clipboard.writeText(referralCode).catch(() => {
      console.error("Unable to copy text");
    });
    this.isCopy=false;
    setTimeout(() => {
      this.isCopy=true;
    }, 4000);
  }
  getMaskAccountDetails() {
    this.BankDet =
    "XXXXXXX " +
    this.partnershipReport.BankDet.substring(
      this.partnershipReport.BankDet.length - 4,
      this.partnershipReport.BankDet.length
    );
  }

  InitializePartnershipReport() {
    this.partnershipReport = {
      AffName: "",
      AffRefCode: "",
      BalanceAmt: 0,
      IncomeActivity: [],
      IncomeReport: [],
      WithdrawnAmt: 0,
      BankDet: "",
      AffImgPath: "",
      TreesCnt:0
    } as PartnershipReport;
  }
  share(refcode) {
    this.ngNavigatorShareService
      .share({
        title: "HumanWisdom Program",
        text:
        "Hi! I’ve just subscribed to the amazing HumanWisdom app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – "+refcode+". If you want to find out more about the partnership program – https://www.humanwisdom.me/adults/partnership-webpage"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  redirectToIncomeReport() {
    this.router.navigate(["adults/partnership-report/income-report"]);
  }
  ChangeAccountDetais() {
    this.router.navigate(["adults/partnership-app/payment-bank"], {
      state: {
        isUpdate: true,
        ByPaypal: this.partnershipReport.ByPaypal,
      },
    });
  }
  Expand(userId){
    if(this.isExpand && userId==this.expandedUserId){
      this.isExpand=false;
    }else if(!this.isExpand && userId==this.expandedUserId){
      this.isExpand=true;
    }else{
      this.isExpand=true;
      this.expandedUserId=userId;
    }

  }
  checkExpansion(userId){
    if(this.isExpand && userId==this.expandedUserId){
      return 'parenta:after';
    }else if(!this.isExpand && userId==this.expandedUserId){
      return ''
    }
  }

  goBack()
  {
  this.router.navigate(['adults/adult-dashboard'])
  }

  redirectToIncomeActivityReport(){
    this.router.navigate(['adults/partnership-report/income-activity'])
  }
  redirectToIReport(){
    if(this.partnershipReport.IncomeActivity.length>0){
      this.router.navigate(['adults/partnership-report/income-report'])
    }
  }
  redirectToTreeReport(){
    this.router.navigate(['/adults/partnership-report/tree-plantation-report']);
  }
  back(){
    this.location.back();
  }

  alert(){
    window.alert('hi');
  }
}
