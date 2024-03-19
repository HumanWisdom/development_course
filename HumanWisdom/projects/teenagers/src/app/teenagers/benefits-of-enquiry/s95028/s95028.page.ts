import { Component, OnInit } from '@angular/core';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s95028',
  templateUrl: './s95028.page.html',
  styleUrls: ['./s95028.page.scss'],
})
export class S95028Page implements OnInit {
  
  toc="teenagers/benefits-of-enquiry/s95001"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/37.png"
  moduleLink="/three-steps-enquiry"
  moduleName="Three Steps to Enquiry"
  sectionName= "Understand yourself";
  moduleId=96;
  programType : ProgramType = ProgramType.Teenagers;

  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 107
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 108
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/51.png',
      link: '/guided-meditation',
      id: 110
  
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
