import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s64072',
  templateUrl: './s64072.page.html',
  styleUrls: ['./s64072.page.scss'],
})
export class S64072Page implements OnInit {
  
  toc="dealing-with-death/s64001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/bullying.png"
  // bg_tn="bg_teal"
  // bg_cft="bg_teal"
  // bg=""
  // moduleLink="/adults/bullying"
  // moduleName=" Bullying"
  // sectionName= "Transform your life - I";
  // moduleId=76
  
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/44.png"
 
  bg=""
  moduleLink="/adults/stress"
  moduleName=" Stress"
  sectionName= "Transform your life - I";
  moduleId=44
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

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/18.png"
    
      this.moduleLink = "/adults/emotional-needs"
      this.moduleName = " Emotional Needs"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 18
    
    }
   
    
  }

  ngOnInit() {
  }
}

