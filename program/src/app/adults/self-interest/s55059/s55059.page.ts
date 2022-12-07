import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s55059',
  templateUrl: './s55059.page.html',
  styleUrls: ['./s55059.page.scss'],
})
export class S55059Page implements OnInit {
  
  toc="self-interest/s55001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/identity.jpg"
 
  bg=""
  moduleLink="/adults/identity"
  moduleName=" Identity"
  sectionName= "How the Mind Works";
  moduleId=21
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/36.png',
      link: '/love',
      id: 62
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/35.png',
      link: '/relationships',
      id: 47
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/26.png',
      link: '/emotional-needs',
      id: 18
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
