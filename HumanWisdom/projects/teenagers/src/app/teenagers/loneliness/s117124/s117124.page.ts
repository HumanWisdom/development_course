import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s117124',
  templateUrl: './s117124.page.html',
  styleUrls: ['./s117124.page.scss'],
})
export class S117124Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/loneliness/s117001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/118.webp"
 
  bg=""
  moduleLink="/anger"
  moduleName=" Anger"
  sectionName= "Understand Emotions";
  moduleId=118


  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp',
      link: '/relationships',
      id: 131
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/122.webp',
      link: '/nature-of-i',
      id: 122
 
    },
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/116.webp',
      link: '/sorrow',
      id: 116
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/118.webp"
     
      this.moduleLink = "/anger"
      this.moduleName = "Anger"
      this.sectionName = "Manage your emotions";
      this.moduleId = 118
    
    }
   }

  ngOnInit() {
  }
}

