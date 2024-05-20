import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s160168',
  templateUrl: './s160168.page.html',
  styleUrls: ['./s160168.page.scss'],
})
export class S160168Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/career-success/s160001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/124.webp"
  
  bg=""
  moduleLink="/teenagers/pleasure"
  moduleName=" Pleasure"
  sectionName= "How the Mind Works";
  moduleId=124
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/129.webp',
      link: '/living-with-peace',
      id: 129
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp',
      link: '/happiness',
      id: 133
  
    },
  ]

  constructor() {
   
  }
  ngOnInit() {
  }
}