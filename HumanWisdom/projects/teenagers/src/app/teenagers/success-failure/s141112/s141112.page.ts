import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s141112',
  templateUrl: './s141112.page.html',
  styleUrls: ['./s141112.page.scss'],
})
export class S141112Page implements OnInit {
  
  toc="success-failure/s141001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
 
  // bg=""
  // moduleLink="/adults/habit-addiction"
  // moduleName=" Addiction"
  // sectionName= "Transform your life - II";
  // moduleId=45

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/77.png"
  
  bg=""
  moduleLink="/adults/making-better-decisions"
  moduleName=" Making better decisions"
  sectionName= "Transform your life - I";
  moduleId=77
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/19.png',
      link: '/fear-anxiety',
      id: 19
 
    },
    {
      name: 'Money',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/73.png',
      link: '/money',
      id: 73
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/49.png"
      
      this.moduleLink = "/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Transform your life";
      this.moduleId = 49
    
    }
   }

  ngOnInit() {
  }
}

