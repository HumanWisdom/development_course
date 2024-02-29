import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AdultsService } from "../../adults.service";
import { PartnershipReport } from "../partnership-report.model";
import jsPDF from "jspdf";
import { NgNavigatorShareService } from "ng-navigator-share";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import html2pdf from "html2pdf.js";
@Component({
  selector: "app-income-activity",
  templateUrl: "./income-activity.page.html",
  styleUrls: ["./income-activity.page.scss"],
})
export class IncomeActivityPage implements OnInit {
  partnershipReport: PartnershipReport;
  hasIncome =false;

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
        if(this.partnershipReport.IncomeActivity.length>0)
        {
          this.hasIncome=true;

        }
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

  DownloadPdf1(){
  

    this.isPdfDownloading=true;
    const html = document.getElementById('partnershipReport');
    console.log("activity",html)
     setTimeout(() => {
      const htmlHeight = html.scrollHeight;

  // Create a canvas with the height equal to the total height of the HTML content
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = html.offsetWidth;
  canvas.height = htmlHeight;

  // Render the HTML content onto the canvas
  html2canvas(html, { canvas: canvas }).then((canvas) => {
    const fileWidth = 208;
    const fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    const PDF = new jsPDF('p', 'mm', 'a4');
    const position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
    })
     this.isPdfDownloading=false;
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

  constructTableHtml(): string {
    
    let htmlString =`<html><body>`
     htmlString=`<div style="background-color: #2A3F54;min-height:100%">`
    htmlString+=` <div style="background-color: #2A3F54;" ><img  src="https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v1_3/hwp_logo_v3_white.svg" alt="HumanWisdom" class="img-responsive img_logo"> </div>`
    htmlString+=`<h2 style="color:white;float: right;">Income Activity Report</h2>`
    htmlString += '<table style="border: 1px solid black;width: 100%; color:white ;min-height:100%" >';
    htmlString += '<thead>';
    htmlString += '<tr>';
    htmlString += '<th style="border: 1px solid black; color: fff;">Level</th>';
    htmlString += '<th style="border: 1px solid black; color: fff;">Partner Count</th>';
    htmlString += '<th style="border: 1px solid black; color: fff;">Subscriptions Count</th>';
    htmlString += '<th style="border: 1px solid black; color: fff;">Revenue</th>';
    htmlString += '</tr>';
    htmlString += '</thead>';
    htmlString += '<tbody style="height=1000px;" >';
    for (const income of this.partnershipReport.IncomeReport) {
      htmlString += '<tr>';
      htmlString += `<td style="border: 1px solid black;margin-left='2px'; color: fff;margin-left:5px  ">${income.Level}</td>`;
      htmlString += `<td style="border: 1px solid black;margin-left='2px'; color: fff;margin-left:5px ">${income.PartnersCnt}</td>`;
      htmlString += `<td style="border: 1px solid black;margin-left='2px'; color: fff;margin-left:5px ">${income.SubscribersCnt}</td>`;
      htmlString += `<td style="border: 1px solid black;margin-left='2px'; color: fff;margin-left:5px ">${income.RevenueEarned}</td>`;
      htmlString += '</tr>';
    }
    htmlString += '</tbody>';
    return htmlString;
  }

//   DownloadPdf() {
//     this.isPdfDownloading=true;
//      const html = document.getElementById('test');
//      var options={
//       margin:[0,0,0,0],
//      }
//     // let base64result:any;
//     // html2canvas(html).then(canvas => {
//     //   canvas.toBlob(blob => {
//     //     const reader = new FileReader();
//     //     reader.readAsDataURL(blob);
//     //     reader.onload = (event: any) => {
//     //       base64result = event.target.result.split(',').pop();
//     //       this.DownLoadFile(base64result,'application/pdf','partnership')
//     //     };
//     //   });
//     // });
// setTimeout(() => {
//   html2pdf()
//   .from(html).set(options)
//  .save();
//   this.isPdfDownloading=false;
// }, 500);
// this.constructTableHtml();

   
//   }

//   DownLoadFile(data: any, type: string, name: string) {
//     const blob = new Blob([data], { type });
//     const url = window.URL.createObjectURL(blob);
//     const fileLink = document.createElement('a');
//     fileLink.href = url;
//     // it forces the name of the downloaded file
//     fileLink.download = name + '.pdf';
//     // triggers the click event
//     fileLink.click();
//   }
  

  DownloadPdf() {
    this.isPdfDownloading = true;
    const html = document.getElementById('partnershipReport');
    var options = {
      margin: [0, 0, 0, 0],
    }
    setTimeout(() => {
      html2pdf()
        .from(html).set(options)
        .save();
      this.isPdfDownloading = false;
    }, 500);

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
