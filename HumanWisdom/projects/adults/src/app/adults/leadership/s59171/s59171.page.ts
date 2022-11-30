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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/happiness.jpg"
  
  bg=""
  moduleLink="/adults/happiness"
  moduleName=" Happiness"
  sectionName= "Living with Wisdom - II";
  moduleId=23
  moduleList: any = [
    {
      name: 'Communication',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/42.png',
      link: '/communication'
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/35.png',
      link: '/relationships'
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/24.png',
      link: '/self-interest'
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'workplace') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
     
      this.moduleLink = "/adults/communication"
      this.moduleName = "Communication"
      this.sectionName = "Live with wisdom";
      this.moduleId = 53
    
    }
   }

  ngOnInit() {
  }
}


