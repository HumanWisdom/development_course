import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s59171',
  templateUrl: './s59171.page.html',
  styleUrls: ['./s59171.page.scss'],
})
export class S59171Page implements OnInit {
  
  toc="leadership/s59001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/making_better_decisions.png"
  
  // bg=""
  // moduleLink="/adults/making-better-decisions"
  // moduleName=" Making better decisions"
  // sectionName= "Transform your life - I";
  // moduleId=77

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/73.png"
 
  bg=""
  moduleLink="/adults/money"
  moduleName=" Money"
  sectionName= "Transform your life - II";
  moduleId=73
  moduleList: any = [
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/53.png',
      link: '/communication',
      id: 53
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
 
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
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
     
      this.moduleLink = "/adults/communication"
      this.moduleName = "Communication"
      this.sectionName = "Transform your life";
      this.moduleId = 53
    
    }
   }

  ngOnInit() {
  }
}


