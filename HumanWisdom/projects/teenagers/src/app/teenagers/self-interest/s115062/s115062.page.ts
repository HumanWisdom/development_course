import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s115062',
  templateUrl: './s115062.page.html',
  styleUrls: ['./s115062.page.scss'],
})
export class S115062Page implements OnInit 
{  
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/self-interest/s115001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/119.webp"
  bg=""
  moduleLink="/identity"
  moduleName=" Identity"
  sectionName= "How the Mind Works";
  moduleId=119
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/134.webp',
      link: '/love',
      id: 134
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/131.webp',
      link: '/relationships',
      id: 131
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/120.webp',
      link: '/emotional-needs',
      id: 120
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}