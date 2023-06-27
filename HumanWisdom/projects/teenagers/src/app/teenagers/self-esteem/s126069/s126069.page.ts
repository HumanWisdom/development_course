import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s126069',
  templateUrl: './s126069.page.html',
  styleUrls: ['./s126069.page.scss'],
})
export class S126069Page implements OnInit 
{  
  
  toc="self-esteem/s126001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/45.png"
 
  bg=""
  moduleLink="/habit-addiction"
  moduleName=" Addiction"
  sectionName= "Transform your life - II";
  moduleId=45
  moduleList: any = [
    {
      name: 'Self Image',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/25.png',
      link: '/teenagers/self-image',
      id: 114
    },
    {
      name: 'Criticisms',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/16.png',
      link: '/criticism',
      id: 16
 
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/teenagers/conditioning',
      id: 105
  
    },
  ]

  constructor() 
  {}

  ngOnInit() 
  {}

}