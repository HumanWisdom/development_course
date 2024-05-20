import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s109077',
  templateUrl: './s109077.page.html',
  styleUrls: ['./s109077.page.scss'],
})
export class S109077Page implements OnInit {
 
  toc="teenagers/meditation/s109001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/106.webp"
  
  bg=""
  moduleLink="/nature/s106001"
  moduleName="Nature-Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=106
  programType : ProgramType = ProgramType.Teenagers;

 moduleList: any = [
  {
    name: 'Breathing',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp',
    link: '/breathing',
    id: 107
  },
  {
    name: 'Noticing Thoughts',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/108.webp',
    link: '/noticing-thoughts',
    id: 108

  },
  {
    name: ' Guided Meditation',
    image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/110.webp',
    link: '/guided-meditation',
    id: 110
  },
]
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/103.webp"
    
      this.moduleLink = "/without-language"
      this.moduleName = " Look Without Language"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 103
    
    }
   
    
   }

  ngOnInit() {
  }
}

