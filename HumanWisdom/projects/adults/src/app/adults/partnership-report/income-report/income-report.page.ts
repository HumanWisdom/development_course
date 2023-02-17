import { verifyHostBindings } from "@angular/compiler";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { NgNavigatorShareService } from "ng-navigator-share";
import { AdultsService } from "../../adults.service";
import { PartnershipReport } from "../partnership-report.model";
import { Location } from "@angular/common";
import jspdf from "jspdf";
@Component({
  selector: "app-income-report",
  templateUrl: "./income-report.page.html",
  styleUrls: ["./income-report.page.scss"],
})
export class IncomeReportPage implements OnInit {
  partnershipReport: PartnershipReport;
  @ViewChild('screen') screen: ElementRef;
  groupedDates = [];
  currentDate = new Date();
  years: any = [];
  totalSubscriber: number;
  selectedYear = new Date().getFullYear().toString();
  totalPartners: number;
  totalRevenu: number;
  isPdfDownloading=false;
  BankDet: string = null;
  constructor(
    public adultService: AdultsService,
    private ngNavigatorShareService: NgNavigatorShareService,
    public router: Router,
    private location: Location
  ) {
    this.InitializePartnershipReport();
  }

  ngOnInit() {
   this.onChange(this.selectedYear);
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
      ByPaypal:0,
      PartnerCount:0
    } as PartnershipReport;
  }
 


  DownloadPdf() {
   this.isPdfDownloading=true;

   setTimeout(() => {
    let DATA: any = document.getElementById("partnershipReport");
    html2canvas(DATA).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg")
 
      const pdf = new jsPDF({orientation:'portrait'});
 
      const imageProps = pdf.getImageProperties(imgData)
 
      const pdfw = pdf.internal.pageSize.getWidth()
      const test = pdf.internal.pageSize.getHeight()
      const pdfh = (imageProps.height * pdfw) / imageProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, test)
      pdf.save("partnership-report.pdf");
    
    });
    this.isPdfDownloading=false;
  }, 500);



    }

    //  // let DATA: any = document.getElementById("partnershipReport");
    //   var markup = document.documentElement.innerHTML;
    //   var encoded = window.btoa(markup); 

    //   const source = `data:application/pdf;base64,${encoded}`;
    //   const link = document.createElement("a");
    //   link.href = source;
    //   link.download = `test.pdf`
    //   link.click();


    //   // const blob = new Blob([DATA], { type: 'pdf' });
    //   // const url = window.URL.createObjectURL(blob);
    //   // const fileLink = document.createElement('a');
    //   // fileLink.href = url;
    //   // fileLink.download ='test.pdf';
    //   // fileLink.click();


    //   // html2canvas(DATA).then((canvas) => {
    //   //   const imgData = canvas.toDataURL("image/jpeg")
   
    //   //   const pdf = new jsPDF({
          
    //   //   });
   
    //   //   const imageProps = pdf.getImageProperties(imgData)
   
    //   //   const pdfw = pdf.internal.pageSize.getWidth()
   
    //   //   const pdfh = (imageProps.height * pdfw) / imageProps.width
   
    //   //   pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh+100)
    //   //   pdf.save("partnership-report.pdf");
      
    //   // });
    //   this.isPdfDownloading=false;
    // }, 500);


   
  
 


  share(refcode) {
    this.ngNavigatorShareService
      .share({
        title: "HumanWisdom Program",
        text:
          "Hi! I’ve just subscribed to the amazing HumanWisdom app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – "+refcode+". If you want to find out more about the partnership program – <a href='https://humanwisdom.me/adults/partnership-webpage'> https://humanwisdom.me/adults/partnership-webpage</a>"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  redirectToIncomeActivity() {
    this.router.navigate(["/adults/partnership-report/income-activity"]);
  }

  getMaskAccountDetails() {
    this.BankDet =
      "XXXXXXX " +
      this.partnershipReport.BankDet.substring(
        this.partnershipReport.BankDet.length - 4,
        this.partnershipReport.BankDet.length
      );
  }

  groupByYears(res) {
    this.years = [
      ...new Set(res.IncomeReport.map((item) => item.Year)),
    ];
  }

  onChange(value) {
    this.adultService.GetPartnerCommReport().subscribe((res) => {
      if (res) {
        this.partnershipReport = res;
        this.groupByYears(res);
        this.getMaskAccountDetails();
        if (value == "0") {
          this.partnershipReport = res;
        } else {
          this.partnershipReport = res;
          this.partnershipReport.IncomeReport =
            this.partnershipReport.IncomeReport.filter((x) => x.Year == value);
            if (this.partnershipReport.IncomeReport.length > 0) {
              this.totalSubscriber = this.partnershipReport.IncomeReport.map(
                (item) => +item.SubscribersCnt
              ).reduce((prev, curr) => prev + curr, 0);
              this.totalPartners = this.partnershipReport.IncomeReport.map(
                (item) => +item.PartnersCnt
              ).reduce((prev, curr) => prev + curr, 0);
              this.totalRevenu = this.partnershipReport.IncomeReport.map(
                (item) => +item.CommEarned
              ).reduce((prev, curr) => prev + curr, 0);
            }
        }
      }
    });
  }

  ChangeAccountDetais() {
    this.router.navigate(["adults/partnership-app/payment-bank"], {
      state: {
        isUpdate: true,
        ByPaypal: this.partnershipReport.ByPaypal,
      },
    });
  }
  redirectToMyPartnership(){
    this.router.navigate(['adults/partnership-report/my-partner'])
  }
  goBack()
  {
  this.router.navigate(['adults/adult-dashboard'])
  }
}
