import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s60112',
  templateUrl: './s60112.page.html',
  styleUrls: ['./s60112.page.scss'],
})
export class S60112Page implements OnInit {
  
  toc="sorrow/s60001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/61.png"
  
  bg=""
  moduleLink="/adults/loneliness"
  moduleName=" Loneliness"
  sectionName= "Understand Emotions";
  moduleId=61
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/21.png',
      link: '/identity',
      id: 21
    },
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/18.png',
      link: '/love',
      id: 18
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/64.png"
    
      this.moduleLink = "/adults/dealing-with-death"
      this.moduleName = "Fear of Death"
      this.sectionName = "Transform your life";
      this.moduleId = 64
    
    }
   
    
  }

  ngOnInit() {
  }
}

