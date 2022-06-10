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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/criticism.png"
  bg_tn="bg_blue_pink"
  bg_cft="bg_blue_pink"
  bg=""
  moduleLink="/adults/criticism"
  moduleName=" Criticism"
  sectionName= "Living with Wisdom - I";
  moduleId=16
  moduleList: any = [
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png',
      link: '/relationships'
    },
    {
      name: 'Living with Peace',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/39.png',
      link: '/living-with-peace'
 
 
    },
    {
      name: 'Self Interest',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/24.png',
      link: '/self-interest'
  
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

