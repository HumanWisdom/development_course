import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s91084',
  templateUrl: './s91084.page.html',
  styleUrls: ['./s91084.page.scss'],
})
export class S91084Page implements OnInit {
  
  toc="external-approval/s91001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/21.png"
  
  bg=""
  moduleLink="/adults/identity"
  moduleName=" Identity"
  sectionName= "How the Mind Works";
  moduleId=21
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/62.png',
      link: '/love',
      id: 62
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 18
  
    },
  ]

  constructor() { }

  ngOnInit() { }

}