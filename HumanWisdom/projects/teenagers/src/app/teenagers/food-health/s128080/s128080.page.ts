import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s128080',
  templateUrl: './s128080.page.html',
  styleUrls: ['./s128080.page.scss'],
})
export class S128080Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;

  toc="teenagers/food-health/s128001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/129.webp"
  bg=""
  moduleLink="/living-with-peace"
  moduleName=" Living With Peace"
  sectionName= " Live your best life ";
  moduleId=129
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105

    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/124.webp',
      link: '/pleasure',
      id: 124
 
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