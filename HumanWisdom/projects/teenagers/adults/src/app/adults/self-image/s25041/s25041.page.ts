import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s25041',
  templateUrl: './s25041.page.html',
  styleUrls: ['./s25041.page.scss'],
})
export class S25041Page implements OnInit {
  
  toc="self-image/s25001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/55.png"
 
  bg=""
  moduleLink="/adults/self-interest"
  moduleName=" Self Interest"
  sectionName= "How the Mind Works";
  moduleId=55
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/17.png',
      link: '/self-esteem',
      id: 17
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 57
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
