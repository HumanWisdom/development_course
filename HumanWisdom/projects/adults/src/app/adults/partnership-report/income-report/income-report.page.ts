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
import html2pdf from "html2pdf.js";
import { SharedService } from "../../../../../../shared/services/shared.service";

@Component({
  selector: "app-income-report",
  templateUrl: "./income-report.page.html",
  styleUrls: ["./income-report.page.scss"],
})
export class IncomeReportPage implements OnInit {
  partnershipReport: PartnershipReport;
  @ViewChild('screen') screen: ElementRef;
  groupedDates: any
  withdrwalGroup=new Map();
  currentDate = new Date();
  years: any = [];
  totalSubscriber: number = 0;
  selectedYear = new Date().getFullYear().toString();
  totalPartners: number = 0;
  totalRevenu: number = 0;
  isPdfDownloading = false;
  BankDet: string = null;
  isCopy: boolean = false;
  titl: string = '0';
  url: string = '';
  sortedData: any;
  hasIncome: boolean;
  isSubscriber:boolean = false;
  tableData:any;
  constructor(
    public adultService: AdultsService,
    private ngNavigatorShareService: NgNavigatorShareService,
    public router: Router,
    private location: Location
  ) {
    this.isSubscriber = SharedService.isSubscriber()
    this.InitializePartnershipReport();
  }


  ngOnInit() {
    this.onChange(this.selectedYear);
    let userdetail = localStorage.getItem("userDetails");
    if (userdetail) {
      let detail = JSON.parse(userdetail);
      if (detail && detail['UserImagePath'] != '') {
        this.url = detail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
      }
    }
    this.adultService.GetPartnerCommReport().subscribe((res) => {
      if (res) {
        this.partnershipReport = res;
        if (this.partnershipReport.IncomeActivity.length > 0) {
          this.hasIncome = true;

        }
        this.getMaskAccountDetails();
        this.groupDates();
      }
    });
  }


  getMaskAccountDetails() {
    this.BankDet =
      "XXXXXXX " +
      this.partnershipReport.BankDet.substring(
        this.partnershipReport.BankDet.length - 4,
        this.partnershipReport.BankDet.length
      );
  }

  groupDates() {
    this.groupedDates = new Map();
    
    this.partnershipReport.IncomeActivity.forEach((d) => {
      let obj = {
        SubscriptionId: "",
        Level: "",
        Comm_Earned: "",
        date: 0,
        month: "",
        year:'',
        PartnerName: ''
      };

      const dt = new Date(d.CreatedOn);
      obj.SubscriptionId = d.SubscriptionId;
      obj.Level = d.Level;
      obj.Comm_Earned = d.Comm_Earned;
      obj.PartnerName = d.PartnerName;
      const date = dt.getDate();
      const year = dt.getFullYear();
      const month = dt.toLocaleString("default", { month: "long" });
      obj.date = date;
      obj.month = month;
      obj.year = year.toString();
      const key = `${month} ${year}`;
      
      // Use Map's set method to add or update entries
      if (this.groupedDates.has(key)) {
        const existing = this.groupedDates.get(key);
        existing.dates.push(obj);
        this.groupedDates.set(key, existing);
      } else {
        this.groupedDates.set(key, {
          year,
          month,
          dates: [obj]
        });
      }
    });

   this.tableData = JSON.parse(JSON.stringify(this.sortMapByDateDescending()));

    this.partnershipReport.WithdrawalReport.forEach(element => {
      let obj = {
        SubscriptionId: "",
          Level: "",
          Comm_Earned: "",
          date: 0,
          month: "",
          year:'',
          withdrawalAmt:'',
          PartnerName:'Withdrawal'
      };
  
      const dt = new Date(element.Comm_PaidDt);
      obj.withdrawalAmt = element.Withdrawal;
      const date = dt.getDate();
      const year = dt.getFullYear();
      const month = dt.toLocaleString("default", { month: "long" });
      obj.date = date;
      obj.month = month;
      obj.year = year.toString();
      const key = `${month} ${year}`;
      // Use Map's set method to add or update entries
      if (this.groupedDates.has(key)) {
        const existing = this.groupedDates.get(key);
        existing.dates.push(obj);
        this.groupedDates.set(key, existing);
      } else {
        this.groupedDates.set(key, {
          year,
          month,
          dates: [obj]
        });
      }
    });

    this.sortMapByDateDescendingForReport();

    return Object.values(this.groupedDates);
  }

  sortMapByDateDescending() {
    const sortedEntries = Array.from(this.groupedDates.entries())
      .sort(([keyA]: any, [keyB]: any) => new Date(keyB).getTime() - new Date(keyA).getTime()) as any; // Sorting in descending order
   return  Array.from(sortedEntries.entries()) as any;
  }


  
  sortMapByDateDescendingForReport() {
    const sortedEntries = Array.from(this.groupedDates.entries())
      .sort(([keyA]: any, [keyB]: any) => new Date(keyB).getTime() - new Date(keyA).getTime()) as any; // Sorting in descending order

    // Convert Map to Array
    this.sortedData = Array.from(sortedEntries.entries()) as any;
    // sortedDataArray now maintains the insertion order of the Map
    console.log(this.sortedData);
  }


  ReverseDate(date) {
    return date.reverse();
  }


  getWithdrwalData(date){
    if( this.withdrwalGroup.has(date)){
     return this.withdrwalGroup.get(date).dates;
    }
    return [];
  }

  sortedDataList(data) {
    console.log(data);
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
      ByPaypal: 0,
      PartnerCount: 0,
      WithdrawalReport:[],
      TreesCnt:0,
      RefferalLink:''
    } as PartnershipReport;
  }

  getTittle() {
    if (this.isCopy) {
      return 'Copy';
    } else {
      return 'Copied';
    }
  }

  DownloadPdf() {
    if(this.isSubscriber){
    this.isPdfDownloading = true;
    const html = document.getElementById('partnershipReport');
    var options = {
      margin: [0, 0, 0, 0],
      filename: "PartnershipIncomeActivity",
    }
    setTimeout(() => {
      html2pdf()
        .from(html).set(options)
        .save();
      this.isPdfDownloading = false;
    }, 500);
  }
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
        title: "HappierMe Program",
        text:
          "Hi! I’ve just subscribed to the amazing HappierMe app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – " + refcode + ". If you want to find out more about the partnership program – <a href='https://humanwisdom.me/adults/partnership-webpage'> https://humanwisdom.me/adults/partnership-webpage</a>"
      })
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      });
  }

  redirectToIncomeActivity() {
    this.router.navigate(["/adults/partnership-report/income-activity"]);
  }

  // getMaskAccountDetails() {
  //   this.BankDet =
  //     "XXXXXXX " +
  //     this.partnershipReport.BankDet.substring(
  //       this.partnershipReport.BankDet.length - 4,
  //       this.partnershipReport.BankDet.length
  //     );
  // }

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
  redirectToMyPartnership() {
    this.router.navigate(['adults/partnership-report/my-partner'])
  }
  goBack() {
    this.router.navigate(['adults/adult-dashboard'])
  }

  copyText(referralCode): void {
    navigator.clipboard.writeText(referralCode).catch(() => {
      console.error("Unable to copy text");
    });
    this.isCopy = false;
    setTimeout(() => {
      this.isCopy = true;
    }, 4000);
  }

}