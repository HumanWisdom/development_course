import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../adults.service';
import { PartnershipReport } from '../partnership-report.model';
import { Location } from '@angular/common';

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
 constructor(public adultService:AdultsService, private ngNavigatorShareService: NgNavigatorShareService,public router:Router,private location:Location) { 
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
     let DATA: any = document.getElementById('TreeReport');
     html2canvas(DATA).then((canvas) => {
       let fileWidth = 208;
       let fileHeight = 300;
       const FILEURI = canvas.toDataURL('image/png');
       let PDF = new jsPDF('p', 'mm', 'a4');
       let position = 0;
       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
       PDF.save('treePlantation-report.pdf');
     });
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
    this.location.back()
  }

}
