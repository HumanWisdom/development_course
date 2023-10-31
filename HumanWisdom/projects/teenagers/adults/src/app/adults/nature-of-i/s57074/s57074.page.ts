import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s57074',
  templateUrl: './s57074.page.html',
  styleUrls: ['./s57074.page.scss'],
})
export class S57074Page implements OnInit {
  
  toc="nature-of-i/s57001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/91.png"
 
  bg=""
  moduleLink="/adults/external-approval"
  moduleName=" Need for approval"
  sectionName= "How the Mind Works";
  moduleId=91
  moduleList: any = [
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/21.png',
      link: '/identity',
      id: 21
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/55.png',
      link: '/self-interest',
      id: 55
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/25.png',
      link: '/self-image',
      id: 25
    },
  ]


  constructor() { }

  ngOnInit() {
  }
}
