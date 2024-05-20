import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s131327',
  templateUrl: './s131327.page.html',
  styleUrls: ['./s131327.page.scss'],
})
export class S131327Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/relationships/s131001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp"
  
  bg=""
  moduleLink="/stress"
  moduleName="Stress"
  sectionName= "Transform your life - II";
  moduleId=125

  moduleList: any = [
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/132.webp',
      link: '/communication',
      id: 132
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/120.webp',
      link: '/emotional-needs',
      id: 120
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/126.webp',
      link: '/self-interest',
      id: 126
  
    },
  ]

  constructor() {
   
    let cur = localStorage.getItem('curated');
   if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/120.webp"
     
      this.moduleLink = "/teenagers/emotional-needs"
      this.moduleName = "Emotional Needs"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 120
     
    }
 }

ngOnInit() {
}
}

