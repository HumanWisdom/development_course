import { verifyHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { PartnershipReport } from '../partnership-report.model';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.page.html',
  styleUrls: ['./income-report.page.scss'],
})
export class IncomeReportPage implements OnInit {
  partnershipReport:PartnershipReport;
  groupedDates = [];
  currentDate=new Date();
  years:any=[];
  totalSubscriber:number;
  selectedYear=0;
  totalPartners:number;
  totalRevenu:number;
 constructor(public adultService:AdultsService, private ngNavigatorShareService: NgNavigatorShareService,public router:Router) { 
   this.InitializePartnershipReport();

 }

 ngOnInit() {
   this.adultService.GetPartnerCommReport().subscribe(res=>{
     if(res){
       this.partnershipReport=res;
       this.groupByYears()
       if(this.partnershipReport.IncomeReport.length>0){
     this.totalSubscriber=this.partnershipReport.IncomeReport.map(item => +item.SubscribersCnt).reduce((prev, curr) => prev + curr, 0);
     this.totalPartners=this.partnershipReport.IncomeReport.map(item => +item.PartnersCnt).reduce((prev, curr) => prev + curr, 0);
     this.totalRevenu=this.partnershipReport.IncomeReport.map(item => +item.RevenueEarned).reduce((prev, curr) => prev + curr, 0);
    }
     }
   })
 }

 InitializePartnershipReport(){
   this.partnershipReport={
     AffName:'',
     AffRefCode:'',
     BalanceAmt:0,
     IncomeActivity:[],
     IncomeReport:[],
     WithdrawnAmt:0 
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
 redirectToIncomeActivity(){
  this.router.navigate(['adults/partnership-report/income-activity']);
 }


 groupByYears(){
   this.years=[...new Set(this.partnershipReport.IncomeReport.map(item => item.Year))];
 }

 onChange(value){
  this.adultService.GetPartnerCommReport().subscribe(res=>{
    if(res){
      if(value=='0'){
        this.partnershipReport=res;
      }else{
        this.partnershipReport=res;
        this.partnershipReport.IncomeReport=this.partnershipReport.IncomeReport.filter(x=>x.Year==value);
      }
    }
  })
 }
}
