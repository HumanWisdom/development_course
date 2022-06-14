import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s48108',
  templateUrl: './s48108.page.html',
  styleUrls: ['./s48108.page.scss'],
})
export class S48108Page implements OnInit {
  
  toc="success-failure/s48001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
 
  bg=""
  moduleLink="/adults/habit-addiction"
  moduleName=" Addiction"
  sectionName= "Living with Wisdom - II";
  moduleId=45
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/29.png',
      link: '/fear-anxiety'
 
    },
    {
      name: 'Money',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/47.png',
      link: '/money'
  
    },
  ]

  constructor() {
   
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'workplace') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/relationships.jpg"
     
      this.moduleLink = "/adults/relationships"
      this.moduleName = "Relationships"
      this.sectionName = "Live with wisdom";
      this.moduleId = 47
    
    }
  }

  ngOnInit() {
  }
}
