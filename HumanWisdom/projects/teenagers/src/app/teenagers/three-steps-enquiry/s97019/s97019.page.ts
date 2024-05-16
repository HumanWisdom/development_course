import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s97019',
  templateUrl: './s97019.page.html',
  styleUrls: ['./s97019.page.scss'],
})
export class S97019Page implements OnInit {
  programType:ProgramType=ProgramType.Teenagers;
  toc="teenagers/three-steps-enquiry/s97001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/99.webp"
  
  bg=""
  moduleLink="/insight/s99001"
  moduleName="04. Insight"
  sectionName= "Art of Enquiry";
  moduleId=99
  moduleList: any = [
    {
      name: 'Awareness',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/100.webp',
      link: '/awareness',
      id: 100
    },
    {
      name: 'Questions are Key',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/102.webp',
      link: '/questions-are-key',
      id: 102
 
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
