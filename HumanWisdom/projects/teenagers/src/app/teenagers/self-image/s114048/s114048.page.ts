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
  toc="self-image/s114001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/55.png"
  bg=""
  moduleLink="/self-interest"
  moduleName=" Self Interest"
  sectionName= "How the Mind Works";
  moduleId=155
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 125
    },
    {
      name: 'Self-Esteem',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/17.png',
      link: '/self-esteem',
      id: 126
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 122
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}