import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s134214',
  templateUrl: './s134214.page.html',
  styleUrls: ['./s134214.page.scss'],
})
export class S134214Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;

  toc="teenagers/love/s134001"

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/76.png"
  
  bg=""
  moduleLink="/bullying"
  moduleName=" Bullying"
  sectionName= "Transform your life - I";
  moduleId=135
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 131
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 129
 
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/55.png',
      link: '/self-interest',
      id: 115
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/49.png"
      
      this.moduleLink = "/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Transform your life";
      this.moduleId = 140
    
    }
   }

  ngOnInit() {
  }
}

