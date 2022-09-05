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
     text: 'Hey, check out the HumanWisdom Partnership Program,login using my referral code:'+refcode,
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
