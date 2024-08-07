import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s107011',
  templateUrl: './s107011.page.html',
  styleUrls: ['./s107011.page.scss'],
})
export class S107011Page implements OnInit {
  
  toc="teenagers/breathing/s107001"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/108.webp"
  moduleLink="/noticing-thoughts"
  moduleName="Noticing Thoughts"
  sectionName= "Develop a calm mind";
  moduleId=108
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/106.webp',
      link: '/nature',
      id: 106
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/108.webp',
      link: '/noticing-thoughts',
      id: 108
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/110.webp',
      link: '/guided-meditation',
      id: 110
  
    },
  ]


  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp"
      this.moduleLink = "/stress"
      this.moduleName = "stress"
      this.sectionName = "Transform your life";
      this.moduleId = 125
    
    }
  
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/116.webp"
      this.moduleLink = "/sorrow"
      this.moduleName = "Sorrow"
      this.sectionName = "Manage your emotions";
      this.moduleId = 116
     
    }

   }

  ngOnInit() {
  }

}
