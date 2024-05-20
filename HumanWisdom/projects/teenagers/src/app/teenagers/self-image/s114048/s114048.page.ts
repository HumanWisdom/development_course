import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s114048',
  templateUrl: './s114048.page.html',
  styleUrls: ['./s114048.page.scss'],
})
export class S114048Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/self-image/s114001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/115.webp"
  bg=""
  moduleLink="/self-interest"
  moduleName=" Self Interest"
  sectionName= "How the Mind Works";
  moduleId=115
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/126.webp',
      link: '/self-esteem',
      id: 126
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/122.webp',
      link: '/nature-of-i',
      id: 122
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}