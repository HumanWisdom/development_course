import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s62209',
  templateUrl: './s62209.page.html',
  styleUrls: ['./s62209.page.scss'],
})
export class S62209Page implements OnInit {
  
  toc="love/s62001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/criticism.png"
  
  // bg=""
  // moduleLink="/adults/criticism"
  // moduleName=" Criticism"
  // sectionName= "Living with Wisdom - I";
  // moduleId=16

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/bullying.png"
  
  bg=""
  moduleLink="/adults/bullying"
  moduleName=" Bullying"
  sectionName= "Living with Wisdom - I";
  moduleId=76
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/35.png',
      link: '/relationships',
      id: 47
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/40.png',
      link: '/living-with-peace',
      id: 63
 
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/24.png',
      link: '/self-interest',
      id: 55
  
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/opinions_&_beliefs.jpg"
      
      this.moduleLink = "/adults/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 49
    
    }
   }

  ngOnInit() {
  }
}

