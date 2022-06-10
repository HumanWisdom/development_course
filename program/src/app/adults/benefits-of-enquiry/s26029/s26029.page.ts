import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s26029',
  templateUrl: './s26029.page.html',
  styleUrls: ['./s26029.page.scss'],
})
export class S26029Page implements OnInit {
  
  toc="benefits-of-enquiry/s26001"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/how_to_begin.jpg"
  moduleLink="/adults/how-to-begin/s36001"
  moduleName="How to begin?"
  sectionName= "Understand yourself";
  moduleId=36
  moduleList: any = [
    {
      name: 'How to begin?',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/12.png',
      link: '/how-to-begin'
    },
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/13.png',
      link: '/three-steps-enquiry'
 
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/14.png',
      link: '/insight'
  
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
