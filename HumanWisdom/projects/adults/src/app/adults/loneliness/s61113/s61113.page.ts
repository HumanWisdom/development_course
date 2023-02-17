import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s61113',
  templateUrl: './s61113.page.html',
  styleUrls: ['./s61113.page.scss'],
})
export class S61113Page implements OnInit {
  
  toc="loneliness/s61001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/14.png"
 
  bg=""
  moduleLink="/adults/anger"
  moduleName=" Anger"
  sectionName= "Understand Emotions";
  moduleId=14
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
    },
    {
      name: 'The Nature of the ‘I’',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/57.png',
      link: '/nature-of-i',
      id: 57
 
    },
    {
      name: 'Sorrow and Loss',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/60.png',
      link: '/sorrow',
      id: 60
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/anger.png"
     
      this.moduleLink = "/adults/anger"
      this.moduleName = "Anger"
      this.sectionName = "Manage your emotions";
      this.moduleId = 14
    
    }
   }

  ngOnInit() {
  }
}

