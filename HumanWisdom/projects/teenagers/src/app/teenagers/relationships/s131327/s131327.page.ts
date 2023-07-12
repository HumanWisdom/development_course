import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s131327',
  templateUrl: './s131327.page.html',
  styleUrls: ['./s131327.page.scss'],
})
export class S131327Page implements OnInit {
  
  toc="relationships/s47000"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/love.jpg"
  
  // bg=""
  // moduleLink="/adults/love/"
  // moduleName=" Love"
  // sectionName= "Transform your life - I";
  // moduleId=62

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/53.png"
  
  bg=""
  moduleLink="/communication"
  moduleName="02. Communication"
  sectionName= "Transform your life - II";
  moduleId=53

  moduleList: any = [
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/53.png',
      link: '/communication',
      id: 53
    },
    {
      name: 'Emotional Needs',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/emotional-needs',
      id: 18
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/55.png',
      link: '/self-interest',
      id: 55
  
    },
  ]

  constructor() {
   
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'workplace') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/work.jpg"
     
      this.moduleLink = "/adults/work"
      this.moduleName = "Work"
      this.sectionName = "Transform your life";
      this.moduleId = 58
    
    }
   else if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/18.png"
     
      this.moduleLink = "/adults/emotional-needs"
      this.moduleName = "Emotional Needs"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 18
     
    }
 }

ngOnInit() {
}
}

