import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';


@Component({
  selector: 'app-s107011',
  templateUrl: './s107011.page.html',
  styleUrls: ['./s107011.page.scss'],
})
export class S107011Page implements OnInit {
  
  toc="breathing/s107001"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/30.png"
  moduleLink="/noticing-thoughts"
  moduleName="Noticing Thoughts"
  sectionName= "Develop a calm mind";
  moduleId=108
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/28.png',
      link: '/nature',
      id: 28
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/51.png',
      link: '/guided-meditation',
      id: 51
  
    },
  ]


  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
      this.moduleLink = "/stress"
      this.moduleName = "stress"
      this.sectionName = "Transform your life";
      this.moduleId = 44
    
    }
  
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/sorrow.jpg"
      this.moduleLink = "/sorrow"
      this.moduleName = "Sorrow"
      this.sectionName = "Manage your emotions";
      this.moduleId = 60
     
    }

   }

  ngOnInit() {
  }

}
