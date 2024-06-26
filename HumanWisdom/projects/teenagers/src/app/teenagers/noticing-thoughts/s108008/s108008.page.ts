import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s108008',
  templateUrl: './s108008.page.html',
  styleUrls: ['./s108008.page.scss'],
})
export class S108008Page implements OnInit {
  
  toc="teenagers/noticing-thoughts/s108001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/110.webp"
  bg=""
  moduleLink="/guided-meditation"
  moduleName=" Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=110
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp',
      link: '/breathing',
      id: 107
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/109.webp',
      link: '/meditation',
      id: 109
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
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/110.webp"
      
      this.moduleLink = "/teenagers/guided-meditation"
      this.moduleName = "Guided Meditation"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 110
    
    }
   }

  ngOnInit() {
  }
}
