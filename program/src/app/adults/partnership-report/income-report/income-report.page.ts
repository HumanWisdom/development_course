import { verifyHostBindings } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { NgNavigatorShareService } from "ng-navigator-share";
import { AdultsService } from "../../adults.service";
import { PartnershipReport } from "../partnership-report.model";
import { Location } from "@angular/common";

@Component({
  selector: "app-income-report",
  templateUrl: "./income-report.page.html",
  styleUrls: ["./income-report.page.scss"],
})
export class IncomeReportPage implements OnInit {
  partnershipReport: PartnershipReport;
  groupedDates = [];
  currentDate = new Date();
  years: any = [];
  totalSubscriber: number;
  selectedYear = "0";
  totalPartners: number;
  totalRevenu: number;
  BankDet: string = "";
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
        this.groupByYears();
        this.getMaskAccountDetails();
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
    });
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
      ByPaypal:0
    } as PartnershipReport;
  }

  DownloadPdf() {
    let DATA: any = document.getElementById("partnershipReport");
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = 300;
      const FILEURI = canvas.toDataURL("image/png");
      let PDF = new jsPDF("p", "mm", "a4");
      let position = 0;
      PDF.addImage(FILEURI, "PNG", 0, position, fileWidth, fileHeight);
      PDF.save("partnership-report.pdf");
    });
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
  redirectToIncomeActivity() {
    this.router.navigate(["/adults/partnership-report/income-activity"]);
  }

  getMaskAccountDetails() {
    this.BankDet =
      "XXX-XX-" +
      this.partnershipReport.BankDet.substring(
        this.partnershipReport.BankDet.length - 2,
        this.partnershipReport.BankDet.length
      );
  }

  groupByYears() {
    this.years = [
      ...new Set(this.partnershipReport.IncomeReport.map((item) => item.Year)),
    ];
  }

  onChange(value) {
    this.adultService.GetPartnerCommReport().subscribe((res) => {
      if (res) {
        if (value == "0") {
          this.partnershipReport = res;
        } else {
          this.partnershipReport = res;
          this.partnershipReport.IncomeReport =
            this.partnershipReport.IncomeReport.filter((x) => x.Year == value);
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

  goBack()
  {
  this.router.navigate(['adults/adult-dashboard'])
  }
}
