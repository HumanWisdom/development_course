import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'


@Component({
  selector: 'app-s95028',
  templateUrl: './s95028.page.html',
  styleUrls: ['./s95028.page.scss'],
})
export class S95028Page implements OnInit {
  
  toc="benefits-of-enquiry/s95001"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/36.png"
  moduleLink="/adults/how-to-begin/s36001"
  moduleName="How to begin?"
  sectionName= "Understand yourself";
  moduleId=95
  moduleList: any = [
    {
      name: 'Begin your journey',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/36.png',
      link: '/how-to-begin',
      id: 36
    },
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/37.png',
      link: '/three-steps-enquiry',
      id: 37
 
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/38.png',
      link: '/insight',
      id: 38
  
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
