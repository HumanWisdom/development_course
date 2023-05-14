import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s112160',
  templateUrl: './s112160.page.html',
  styleUrls: ['./s112160.page.scss'],
})
export class S112160Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="fear-anxiety/s112001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/92.png"
  
  bg=""
  moduleLink="/adults/dealing-with-depression"
  moduleName=" Dealing with depression"
  sectionName= "Manage your emotions";
  moduleId=113
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 63
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/23.png',
      link: '/happiness',
      id: 23
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
     
      this.moduleLink = "/adults/conditioning"
      this.moduleName = "Conditioning"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 15
    
    }
  }
  ngOnInit() {
  }
}
