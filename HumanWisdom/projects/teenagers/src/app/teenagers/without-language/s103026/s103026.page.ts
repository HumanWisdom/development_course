import { Component, OnInit } from '@angular/core';

import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s103026',
  templateUrl: './s103026.page.html',
  styleUrls: ['./s103026.page.scss'],
})
export class S103026Page implements OnInit {

  toc="teenagers/without-language/s103001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/104.webp"
  
  bg=""
  moduleLink="/obstacles-enquiry/s104001"
  moduleName=" Obstacles to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=104
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/97.webp',
      link: '/three-steps-enquiry',
      id: 97
    },
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/100.webp',
      link: '/awareness',
      id: 100
 
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/106.webp',
      link: '/nature',
      id: 106
  
    },
  ]

  
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/106.webp"
     
      this.moduleLink = "/nature"
      this.moduleName = "Nature"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 106
    
    }
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp"
     
      this.moduleLink = "/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 107
    
    }
    
  }

  ngOnInit() {
  }
}
