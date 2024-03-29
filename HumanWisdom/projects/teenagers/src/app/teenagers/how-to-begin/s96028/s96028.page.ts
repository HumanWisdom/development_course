import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../../../../shared/models/program-model'; 


@Component({
  selector: 'app-s96028',
  templateUrl: './s96028.page.html',
  styleUrls: ['./s96028.page.scss'],
})

export class S96028Page implements OnInit 
{
  
  toc="teenagers/how-to-begin/s96001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/37.png"
  bg=""
  moduleLink="/three-steps-enquiry/s97001"
  moduleName=" Three Steps to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=97
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Begin your journey',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/36.png',
      link: '/how-to-begin',
      id: 96
    },
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/37.png',
      link: '/three-steps-enquiry',
      id: 97
 
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/38.png',
      link: '/insight',
      id: 99
  
    },
  ]
  constructor() 
  { }

  ngOnInit() 
  { }
  
}