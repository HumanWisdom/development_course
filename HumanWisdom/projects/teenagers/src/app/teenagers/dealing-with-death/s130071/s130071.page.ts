import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s130071',
  templateUrl: './s130071.page.html',
  styleUrls: ['./s130071.page.scss'],
})
export class S130071Page implements OnInit 
{  
  
  toc="self-esteem/s130001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/44.png"
 
  bg=""
  moduleLink="/stress"
  moduleName=" Stress"
  sectionName= "Transform your life - I";
  moduleId=125
  moduleList: any = [
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/60.png',
      link: '/sorrow',
      id: 60

    },
    {
      name: ' Podcasts ',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/key_features/08.svg',
      link: '/podcast/sorrow',
      id: 0
 
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}