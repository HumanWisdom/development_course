import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { PartnershipReport } from '../partnership-report.model';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tree-plantation-report',
  templateUrl: './tree-plantation-report.page.html',
  styleUrls: ['./tree-plantation-report.page.scss'],
})
export class TreePlantationReportPage implements OnInit {

  partnershipReport:any;
  groupedDates = [];
  currentDate=new Date();
  years:any=[];
  totalSubscriber:number;
  selectedYear=0;
  totalPartners:number;
  totalRevenu:number;
  iframeSrc:SafeResourceUrl;
  isPdfDownloading=false;
  value='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMiAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg5NjIgMTcuMDQ0NVYxOC4zMTg1VjI0QzExLjQ4MyAyMy45NjU2IDExLjEwNDIgMjMuOTY1NiAxMC42OTEgMjMuOTY1NkMxMC4yNzc4IDIzLjk2NTYgOS44OTkwNiAyMy45NjU2IDkuNDg1ODYgMjRWMTguMzE4NVYxNy4wNDQ1QzEwLjI3NzggMTYuODAzNCAxMS4xMDQyIDE2LjgwMzQgMTEuODk2MiAxNy4wNDQ1Wk00Ljk3NTEgMTcuOTc0MkM2LjMxOCAxOC4xODA4IDcuNjI2NDYgMTcuOTM5NyA4LjY5Mzg5IDE3LjM1NDRDOC45MzQ5MyAxNy4yMTY2IDkuMjEwMzkgMTcuMTEzMyA5LjQ4NTg2IDE3LjA0NDVWMTUuODA0OVYxMy4xMTkxTDYuODAwMDYgMTAuMzY0NEM2LjQ1NTczIDEwLjAyMDEgNi40OTAxNiA5LjQ2OTE1IDYuODAwMDYgOS4xNTkyNUM3LjE0NDQgOC44MTQ5MiA3LjY5NTMzIDguODQ5MzUgOC4wMDUyMyA5LjE1OTI1TDkuNDUxNDMgMTAuNjM5OVY2Ljg4NjY2QzkuNDUxNDMgNi4yMzI0MiAxMC4wMDI0IDUuNjgxNDkgMTAuNjU2NiA1LjY4MTQ5QzExLjMxMDggNS42ODE0OSAxMS44NjE4IDYuMjMyNDIgMTEuODYxOCA2Ljg4NjY2VjEwLjYwNTVMMTMuMzA4IDkuMTI0ODJDMTMuNjUyMyA4Ljc4MDQ5IDE0LjE2ODggOC43ODA0OSAxNC41MTMxIDkuMTI0ODJDMTQuODU3NCA5LjQ2OTE1IDE0Ljg1NzQgOS45ODU2NSAxNC41MTMxIDEwLjMzTDExLjgyNzMgMTMuMDg0NlYxNS43NzA0VjE3LjAxQzEyLjEwMjggMTcuMDc4OSAxMi4zNDM4IDE3LjE4MjIgMTIuNjE5MyAxNy4zMTk5QzEzLjY4NjcgMTcuOTA1MyAxNC45OTUyIDE4LjE0NjMgMTYuMzM4MSAxNy45Mzk3QzE4Ljg4NjEgMTcuNTYxIDIwLjkxNzcgMTUuNDYwNSAyMS4yNjIgMTIuODc4QzIxLjcwOTcgOS40MzQ3MiAxOS4xNjE2IDYuNDczNDYgMTUuODU2IDYuMjMyNDJDMTUuOTI0OSA1LjkyMjUzIDE1Ljk1OTMgNS42MTI2MyAxNS45NTkzIDUuMzAyNzNDMTUuOTU5MyAyLjM3NTkgMTMuNTgzNCAwIDEwLjY1NjYgMEM3LjcyOTc2IDAgNS4zNTM4NyAyLjM3NTkgNS4zNTM4NyA1LjMwMjczQzUuMzUzODcgNS42MTI2MyA1LjM4ODMgNS45MjI1MyA1LjQ1NzE2IDYuMjMyNDJDMi4xNTE1NyA2LjQ3MzQ2IC0wLjM5NjQ5MiA5LjQzNDcyIDAuMDUxMTQwNiAxMi44NzhDMC4zOTU0NzMgMTUuNDk1IDIuNDI3MDQgMTcuNTk1NCA0Ljk3NTEgMTcuOTc0MloiIGZpbGw9IiM3MEM2QkQiLz4KPC9zdmc+Cg=='
 
 constructor(  private sanitizer: DomSanitizer,public adultService:AdultsService, private ngNavigatorShareService: NgNavigatorShareService,public router:Router,private location:Location) { 
 this.iframeSrc=this.sanitizer.bypassSecurityTrustUrl(this.value);
}

 ngOnInit() {
   this.adultService.getTreePlantationReport().subscribe(res=>{
     if(res){
       this.partnershipReport=res;
       
     }
   })
 }
 getLoop(tree){
  var array=[]
  for(let i=1;i<=+tree;i++){
    array.push(i);
  }
  return array;
 }


 DownloadPdf(){
  this.isPdfDownloading=true;
  setTimeout(() => {
    let DATA: any = document.getElementById("partnershipReport");
    html2canvas(DATA).then((canvas) => {

      const imgData = canvas.toDataURL("image/jpeg") 
      const pdf = new jsPDF("p","mm","a5");
      const imageProps = pdf.getImageProperties(imgData)
      const pdfw = pdf.internal.pageSize.getWidth()
      const test = pdf.internal.pageSize.getHeight()
      const pdfh = (imageProps.height * pdfw) / imageProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, test)
      pdf.save("tree-plantation-report.pdf");
    
    });
    this.isPdfDownloading=false;
  }, 500);
 }
 
 share(refcode){
   this.ngNavigatorShareService.share({
     title: 'HumanWisdom Program',
     text:  "Hi! I’ve just subscribed to the amazing HumanWisdom app and joined their partnership program to help share this with others and make the world a better place. The app is free to download and browse. This is a short video introduction: https://youtu.be/GYbpYnkGJ0U. If you like it and want to subscribe use this referral code to get 10% off – "+refcode+". If you want to find out more about the partnership program – https://www.humanwisdom.me/adults/partnership-webpage"
   }).then( (response) => {
     console.log(response);
   })
   .catch( (error) => {
     console.log(error);
   });
 }

  goBack()
  {
  this.router.navigate(['adults/adult-dashboard'])
  }

}
