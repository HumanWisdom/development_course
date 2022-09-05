import { Component, OnInit } from '@angular/core';
import { AdultsService } from '../../adults.service';
import { PartnershipReport } from '../partnership-report.model';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Router } from '@angular/router';
@Component({
  selector: 'app-income-activity',
  templateUrl: './income-activity.page.html',
  styleUrls: ['./income-activity.page.scss'],
})
export class IncomeActivityPage implements OnInit {
  partnershipReport:PartnershipReport;
   groupedDates = [];
   currentDate=new Date();
   BankDet:string;
  constructor(public adultService:AdultsService, private ngNavigatorShareService: NgNavigatorShareService,public router:Router) { 
    this.InitializePartnershipReport();

  }

  ngOnInit() {
    this.adultService.GetPartnerCommReport().subscribe(res=>{
      if(res){
        this.partnershipReport=res;
        this. getMaskAccountDetails();
        this.groupDates();
      }
    })
  }
  getMaskAccountDetails(){
    this.BankDet= 'XXX-XX-' + this.partnershipReport.BankDet.substr(0, this.partnershipReport.BankDet.length - 5); 
  }


  InitializePartnershipReport(){
    this.partnershipReport={
      AffName:'',
      AffRefCode:'',
      BalanceAmt:0,
      IncomeActivity:[],
      IncomeReport:[],
      WithdrawnAmt:0 ,
      BankDet:''
    } as PartnershipReport;
  }

  DownloadPdf(){
      let DATA: any = document.getElementById('partnershipReport');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = 300;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('partnership-report.pdf');
      });
  }
  
  share(refcode){
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Partnership Program,login using my referral code:'+refcode,
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
  redirectToIncomeReport(){
   this.router.navigate(['adults/partnership-report/income-report']);
  }

 groupDates() {
    this.partnershipReport.IncomeActivity.forEach(d => {
      let obj={
        SubscriptionId:'',
        Level:'',
        Comm_Earned:""
      };
      const dt = new Date(d.CreatedOn);
      obj.SubscriptionId=d.SubscriptionId;
      obj.Level= d.Level;
      obj.Comm_Earned=d.Comm_Earned;
        const date = dt.getDate();
        const year = dt.getFullYear();
        const month = dt.toLocaleString("default", {month: "long"});;
        
        const key = `${month} ${year}`;
        if (key in this.groupedDates) {
            this.groupedDates[key].dates = [...this.groupedDates[key].dates, obj];
        } else {
            this.groupedDates[key] = {
                year,
                month,
                dates: [obj],
            };
        }

    });

    return Object.values(this.groupedDates);
}

ChangeAccountDetais(){
  this.router.navigate(['adults/partnership-app/payment-bank']);
}
}
