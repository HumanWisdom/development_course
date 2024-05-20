import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s132261',
  templateUrl: './s132261.page.html',
  styleUrls: ['./s132261.page.scss'],
})
export class S132261Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/communication/s132001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp"
 
  bg=""
  moduleLink="/happiness"
  moduleName=" Happiness"
  sectionName= "Transform your life - II";
  moduleId=133

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
 
    },
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp',
      link: '/reactive-mind',
      id: 113
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp',
      link: '/relationships',
      id: 131
    },
  ]

  constructor() {
   
      let cur = localStorage.getItem('curated');
      if (cur && cur === 'workplace') {
        this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/141.webp"
       
        this.moduleLink = "/success-failure"
        this.moduleName = "Success and Failure"
        this.sectionName = "Transform your life";
        this.moduleId = 141
      
      }
     else if (cur && cur === 'relationships') {
        this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/134.webp"
       
        this.moduleLink = "/love"
        this.moduleName = "Love"
        this.sectionName = "Transform your life";
        this.moduleId = 134
       
      }
   }

  ngOnInit() {
  }
}

