import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AdultsService } from "../../adults.service";
import { PartnershipReport } from "../partnership-report.model";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import { NgNavigatorShareService } from "ng-navigator-share";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import html2canvas from "html2canvas";
@Component({
  selector: "app-income-activity",
  templateUrl: "./income-activity.page.html",
  styleUrls: ["./income-activity.page.scss"],
})
export class IncomeActivityPage implements OnInit {
  partnershipReport: PartnershipReport;

  isPdfDownloading=false;
  groupedDates = [];
  currentDate = new Date();
  BankDet: string = "";
  isCopy=true;
  partnerOption=localStorage.getItem('PartnerOption');
  constructor(
    public adultService: AdultsService,
    private ngNavigatorShareService: NgNavigatorShareService,
    public router: Router,
    private location: Location
  ) {
    this.InitializePartnershipReport();
  }

  ngOnInit() {
    this.adultService.GetPartnerCommReport().subscribe((res) => {
      if (res) {
        this.partnershipReport = res;
        this.getMaskAccountDetails();
        this.groupDates();
      }
    });
  }
  getTittle(){
    if(this.isCopy){
      return 'Copy';
    }else{
      return 'Copied';
    }
  }

  getMaskAccountDetails() {
    this.BankDet =
    "XXXXXXX " +
    this.partnershipReport.BankDet.substring(
      this.partnershipReport.BankDet.length - 4,
      this.partnershipReport.BankDet.length
    );
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
      PartnerCount:0
    } as PartnershipReport;
  }

  DownloadPdf() {
    this.isPdfDownloading=true;
    const html = document.getElementById('partnershipReport');
     setTimeout(() => {
      html2canvas(html).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg") 
        const pdf = new jsPDF("p","mm","a5");
        const imageProps = pdf.getImageProperties(imgData)
        const pdfw = pdf.internal.pageSize.getWidth()
        const test = pdf.internal.pageSize.getHeight()
        const pdfh = (imageProps.height * pdfw) / imageProps.width
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfw, test)
        pdf.save("tree-plantation-report.pdf");
      
      });
    //     // Detect screen resolution
    // const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //   const options = {
    //     margin: [0,0 , 0, 0],
    //     filename: 'Partnership-report.pdf',
    //     image: { type: 'jpeg', quality: 0.98 },
    //     html2canvas: { scale:  2},
    //     jsPDF: { unit: 'mm',format: [screenWidth*0.5, screenHeight *  0.5], orientation: 'portrait', }
    //   };
  
    //   html2pdf(html, options);
    //    this.isPdfDownloading=false;
     }, 500);
 }

  share(refcode) {
    this.ngNavigatorShareService
      .share({
        title: "HappierMe Program",
        text:
        "Hi! I’ve just subscribed to the amazing HappierMe app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – "+refcode+". If you want to find out more about the partnership program – https://humanwisdom.me/adults/partnership-webpage"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  redirectToIncomeReport() {
    if(this.partnershipReport.IncomeActivity.length>0){
      this.router.navigate(["adults/partnership-report/income-report"]);
    }
  }

  groupDates() {
    this.partnershipReport.IncomeActivity.forEach((d) => {
      let obj = {
        SubscriptionId: "",
        Level: "",
        Comm_Earned: "",
        date:0,
        month:"",
        PartnerName:''
      };
      const dt = new Date(d.CreatedOn);
      obj.SubscriptionId = d.SubscriptionId;
      obj.Level = d.Level;
      obj.Comm_Earned = d.Comm_Earned;
      obj.PartnerName=d.PartnerName;
      const date = dt.getDate();
      const year = dt.getFullYear();
      const month = dt.toLocaleString("default", { month: "long" });
      obj.date=date;
      obj.month=month;
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

  ChangeAccountDetais() {
    this.router.navigate(["adults/partnership-app/payment-bank"], {
      state: {
        isUpdate: true,
        ByPaypal: this.partnershipReport.ByPaypal,
      },
    });
  }

  goBack()
  {
  this.router.navigate(['adults/adult-dashboard'])
  }
  redirectToMyPartnership(){
    this.router.navigate(['adults/partnership-report/my-partner'])
  }
}
