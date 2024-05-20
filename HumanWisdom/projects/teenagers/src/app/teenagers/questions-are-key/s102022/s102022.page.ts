import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s102022',
  templateUrl: './s102022.page.html',
  styleUrls: ['./s102022.page.scss'],
})
export class S102022Page implements OnInit {
  
  toc="questions-are-key//s102001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/103.webp"
  bg=""
  moduleLink="/without-language/s103001"
  moduleName="Without Language"
  sectionName= "Understand yourself";
  moduleId=103
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/97.webp',
      link: '/three-steps-enquiry',
      id: 97
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/122.webp',
      link: '/nature-of-i',
      id: 122
  
    },
    {
      name: 'No Judgemnet',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/101.webp',
      link: '/no-judgement',
      id: 101
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
