import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s130071',
  templateUrl: './s130071.page.html',
  styleUrls: ['./s130071.page.scss'],
})
export class S130071Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;
  toc="self-esteem/s130001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp"
 
  bg=""
  moduleLink="/relationships"
  moduleName=" Relationships"
  sectionName= "Transform your life - I";
  moduleId=131
  moduleList: any = [
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/116.webp',
      link: '/sorrow',
      id: 116

    },
    {
      name: ' Podcasts ',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/17.webp',
      link: '/audiopage/~podcasts~17.mp3/17/T/Sorrow-and-loss',
      id: 0
 
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp',
      link: '/breathing',
      id: 107
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}