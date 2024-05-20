import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";


@Component({
  selector: 'app-s141112',
  templateUrl: './s141112.page.html',
  styleUrls: ['./s141112.page.scss'],
})
export class S141112Page implements OnInit {
  
  toc="teenagers/success-failure/s141001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
 
  // bg=""
  // moduleLink="/adults/habit-addiction"
  // moduleName=" Addiction"
  // sectionName= "Transform your life - II";
  // moduleId=45

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/142.webp"
  
  bg=""
  moduleLink="/teenagers/making-better-decisions"
  moduleName=" Making better decisions"
  sectionName= "Transform your life - I";
  moduleId=142
  programType : ProgramType = ProgramType.Teenagers;

  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/112.webp',
      link: '/fear-anxiety',
      id: 112
 
    },
    {
      name: 'Need For External approval',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/123.webp',
      link: '/external-approval',
      id: 123
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/140.webp"
      
      this.moduleLink = "/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Transform your life";
      this.moduleId = 140
    
    }
   }

  ngOnInit() {
  }
}

