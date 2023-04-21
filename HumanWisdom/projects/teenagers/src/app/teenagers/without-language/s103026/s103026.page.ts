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

  toc="without-language/s103001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/43.png"
  
  bg=""
  moduleLink="/adults/obstacles-enquiry/s104001"
  moduleName=" Obstacles to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=104
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/37.png',
      link: '/three-steps-enquiry',
      id: 97
    },
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/39.png',
      link: '/awareness',
      id: 100
 
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/28.png',
      link: '/nature',
      id: 28
  
    },
  ]

  
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature.jpg"
     
      this.moduleLink = "/adults/nature"
      this.moduleName = "Nature"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 28
    
    }
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
     
      this.moduleLink = "/adults/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 29
    
    }
    
  }

  ngOnInit() {
  }
}
