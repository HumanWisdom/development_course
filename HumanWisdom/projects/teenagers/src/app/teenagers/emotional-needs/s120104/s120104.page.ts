import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s120104',
  templateUrl: './s120104.page.html',
  styleUrls: ['./s120104.page.scss'],
})
export class S120104Page implements OnInit 
{
  programType : ProgramType = ProgramType.Teenagers;
  toc="emotional-needs/s120001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/56.png"
  bg=""
  moduleLink="/inner-boredom"
  moduleName="Inner Boredom"
  sectionName= "How the Mind Works";
  moduleId=121
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 131
    },
    {
      name: 'No Judgement',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/40.png',
      link: '/no-judgement',
      id: 101
  
    },
  ]

  constructor() 
  {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/loneliness.jpg"
      this.moduleLink = "/loneliness"
      this.moduleName = "Loneliness"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 117
    }
    else if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
      this.moduleLink = "/happiness"
      this.moduleName = "Happiness"
      this.sectionName = "Transform your life";
      this.moduleId = 133
    }
  }

  ngOnInit() 
  {}

}