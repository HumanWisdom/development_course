import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";


@Component({
  selector: 'HumanWisdom-s137132',
  templateUrl: './s137132.page.html',
  styleUrls: ['./s137132.page.scss'],
})
export class S137132Page implements OnInit {
   programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/kindness/s137001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
 
  // bg=""
  // moduleLink="/adults/stress"
  // moduleName=" Stress"
  // sectionName= "Transform your life - I";
  // moduleId=44

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/138.webp"
  
  bg=""
  moduleLink="/social-media"
  moduleName="Social Media"
  sectionName= "Transform your life - I";
  moduleId=138
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/anxiety',
      id: 105
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp',
      link: '/relationships',
      id: 131
    },
  ]

  constructor() {
   
  }

  ngOnInit() {}

}