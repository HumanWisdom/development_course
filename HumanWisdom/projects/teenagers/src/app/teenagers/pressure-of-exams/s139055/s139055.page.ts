import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s139055',
  templateUrl: './s139055.page.html',
  styleUrls: ['./s139055.page.scss'],
})
export class S139055Page implements OnInit {

  toc="teenagers/pressure-of-exams/s139001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
 
  // bg=""
  // moduleLink="/adults/stress"
  // moduleName=" Stress"
  // sectionName= "Transform your life - I";
  // moduleId=44

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/115.webp"
  
  bg=""
  moduleLink="/self-interest"
  moduleName="Self-interest"
  sectionName= "Transform your life - I";
  moduleId=115
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/125.webp',
      link: '/teenagers/stress',
      id: 125
    },
    {
      name: 'Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/teenagers/anxiety',
      id: 105
    },
    {
      name: 'Need For External approval',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/123.webp',
      link: '/external-approval',
      id: 123
    }
  ]

  constructor() {
    
  }

  ngOnInit() {}

}