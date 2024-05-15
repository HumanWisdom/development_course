import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s156278',
  templateUrl: './s156278.page.html',
  styleUrls: ['./s156278.page.scss'],
})
export class S156278Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/dealing-with-depression/s156001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/124.webp"
  
  bg=""
  moduleLink="/teenagers/pleasure"
  moduleName=" Pleasure"
  sectionName= "How the Mind Works";
  moduleId=124
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/129.webp',
      link: '/living-with-peace',
      id: 129
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp',
      link: '/happiness',
      id: 133
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/123.webp"
     
      this.moduleLink = "/external-approval"
      this.moduleName = "Need for approval"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 123
    
    }
  }
  ngOnInit() {
  }
}