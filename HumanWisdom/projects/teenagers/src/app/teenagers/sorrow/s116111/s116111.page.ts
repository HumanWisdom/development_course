import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s116111',
  templateUrl: './s116111.page.html',
  styleUrls: ['./s116111.page.scss'],
})
export class S116111Page implements OnInit {
  
  toc="sorrow/s112001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/117.webp"
  programType : ProgramType = ProgramType.Teenagers;
  bg=""
  moduleLink="/loneliness"
  moduleName=" Loneliness"
  sectionName= "Understand Emotions";
  moduleId=117
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/119.webp',
      link: '/identity',
      id: 119
    },
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/134.webp',
      link: '/love',
      id: 134
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/130.jpg"
    
      this.moduleLink = "/teenagers/dealing-with-death"
      this.moduleName = " Dealing with Death"
      this.sectionName = "Transform your life";
      this.moduleId = 130
    
    }
   
    
  }

  ngOnInit() {
  }
}

