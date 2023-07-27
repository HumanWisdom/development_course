import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s133186',
  templateUrl: './s133186.page.html',
  styleUrls: ['./s133186.page.scss'],
})
export class S133186Page implements OnInit {
  
  toc="happiness/s133001"

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/62.png"
  
  bg=""
  moduleLink="/love/"
  moduleName=" Love"
  sectionName= "Transform your life - I";
  moduleId=134
  moduleList: any = [
    {
      name: 'Love',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/62.png',
      link: '/love',
      id: 134
    },
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 124
 
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/63.png',
      link: '/living-with-peace',
      id: 63
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/63.png"
    
      this.moduleLink = "/living-with-peace"
      this.moduleName = "Living with Peace"
      this.sectionName = "Transform your life";
      this.moduleId = 134
    
    }
   
    
  }

  ngOnInit() {
  }
}


