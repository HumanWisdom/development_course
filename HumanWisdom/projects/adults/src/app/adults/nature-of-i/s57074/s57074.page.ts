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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
 
  bg=""
  moduleLink="/adults/conditioning"
  moduleName=" Conditioning"
  sectionName= "How the Mind Works";
  moduleId=15
  moduleList: any = [
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/25.png',
      link: '/identity',
      id: 21
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/24.png',
      link: '/self-interest',
      id: 55
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/23.png',
      link: '/self-image',
      id: 25
    },
  ]


  constructor() { }

  ngOnInit() {
  }
}
