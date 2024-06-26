import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s126069',
  templateUrl: './s126069.page.html',
  styleUrls: ['./s126069.page.scss'],
})
export class S126069Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/self-esteem/s126001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/127.webp"
 
  bg=""
  moduleLink="/habit-addiction"
  moduleName=" Addiction"
  sectionName= "Transform your life - II";
  moduleId=127
  moduleList: any = [
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/114.webp',
      link: '/teenagers/self-image',
      id: 114
    },
    {
      name: 'Criticisms',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/136.webp',
      link: '/criticism',
      id: 136
 
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/teenagers/conditioning',
      id: 105
  
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}