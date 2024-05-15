import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";


@Component({
  selector: 'app-s140110',
  templateUrl: './s140110.page.html',
  styleUrls: ['./s140110.page.scss'],
})
export class S140110Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/opinions-beliefs/s140001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_esteem.jpg"
  
  // bg=""
  // moduleLink="/adults/self-esteem"
  // moduleName=" Self Esteem"
  // sectionName= "Transform your life - II";
  // moduleId=17

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/110.webp"
 
  bg=""
  moduleLink="/success-failure"
  moduleName=" Success and Failure"
  sectionName= "Transform your life - II";
  moduleId=141
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
 
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/119.webp',
      link: '/identity',
      id: 119
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/140.webp"
      
      this.moduleLink = "/teenagers/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Transform your life";
      this.moduleId = 140
    
    }
   }

  ngOnInit() {
  }
}
