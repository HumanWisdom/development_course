import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s122080',
  templateUrl: './s122080.page.html',
  styleUrls: ['./s122080.page.scss'],
})
export class S122080Page implements OnInit 
{
  programType : ProgramType = ProgramType.Teenagers;
  
  toc="nature-of-the-i/s120001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/123.webp"
  bg=""
  moduleLink="/external-approval"
  moduleName="Need For Approval"
  sectionName= "How the Mind Works";
  moduleId=123
  moduleList: any = [
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/119.webp',
      link: '/identity',
      id: 119
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/115.webp',
      link: '/self-interest',
      id: 115
  
    },
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/114.webp',
      link: '/teenagers/self-image',
      id: 114
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/117.webp"
      this.moduleLink = "/loneliness"
      this.moduleName = "Loneliness"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 117
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/133.webp"
      this.moduleLink = "/happiness"
      this.moduleName = "Happiness"
      this.sectionName = "Transform your life";
      this.moduleId = 133
    }
  }

  ngOnInit() 
  {}

}