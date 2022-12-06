import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'HumanWisdom-s76093',
  templateUrl: './s76093.page.html',
  styleUrls: ['./s76093.page.scss'],
})
export class S76093Page implements OnInit {
  
  toc="bullying/s76001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
 
  bg=""
  moduleLink="/adults/stress"
  moduleName=" Stress"
  sectionName= "Living with Wisdom - I";
  moduleId=44
  moduleList: any = [
    {
      name: 'Fear & Anxiety',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/29.png',
      link: '/fear-anxiety'
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/20.png',
      link: '/conditioning'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'leadership') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/leadership.jpg"
      this.moduleLink = "/adults/leadership"
      this.moduleName = "Leadership"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 59
    }
  }

  ngOnInit() {}

}