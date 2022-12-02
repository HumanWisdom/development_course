import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s617',
  templateUrl: './s617.page.html',
  styleUrls: ['./s617.page.scss'],
})
export class S617Page implements OnInit {
  
  toc="fear-anxiety/s486"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
  
  bg=""
  moduleLink="/adults/pleasure"
  moduleName=" Pleasure"
  sectionName= "How the Mind Works";
  moduleId=20
  moduleList: any = [
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/39.png',
      link: '/living-with-peace',
      id: 63
 
    },
    {
      name: 'Happiness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/41.png',
      link: '/happiness',
      id: 23
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/conditioning.png"
     
      this.moduleLink = "/adults/conditioning"
      this.moduleName = "Conditioning"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 15
    
    }
  }
  ngOnInit() {
  }
}
