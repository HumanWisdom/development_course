import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s127164',
  templateUrl: './s127164.page.html',
  styleUrls: ['./s127164.page.scss'],
})
export class S127164Page implements OnInit 
{  
  
  toc="teenagers/habit-addiction/s127001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/128.webp"
 
  bg=""
  moduleLink="/food-health" 
  moduleName="Food and Health"
  sectionName= "Transform your life - II";
  moduleId=128
  programType : ProgramType = ProgramType.Teenagers;

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105

    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/111.webp',
      link: '/comparison',
      id: 111

    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/stress',
      id: 125
    
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}