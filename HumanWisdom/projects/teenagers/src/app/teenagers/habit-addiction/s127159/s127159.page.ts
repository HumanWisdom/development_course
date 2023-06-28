import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s127159',
  templateUrl: './s127159.page.html',
  styleUrls: ['./s127159.page.scss'],
})
export class S127159Page implements OnInit 
{  
  
  toc="habit-addiction/s127001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/46.png"
 
  bg=""
  moduleLink="/food-health"
  moduleName="Food and Health"
  sectionName= "Transform your life - II";
  moduleId=128
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15

    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/07.png',
      link: '/comparison',
      id: 7

    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}