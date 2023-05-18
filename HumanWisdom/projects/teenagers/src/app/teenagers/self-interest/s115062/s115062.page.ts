import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s115062',
  templateUrl: './s115062.page.html',
  styleUrls: ['./s115062.page.scss'],
})
export class S115062Page implements OnInit 
{  
  
  toc="self-interest/s115001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/15.png"
  bg=""
  moduleLink="/conditioning"
  moduleName=" Conditioning"
  sectionName= "How the Mind Works";
  moduleId=112
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/62.png',
      link: '/love',
      id: 62
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
 
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 18
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}