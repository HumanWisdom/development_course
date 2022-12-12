import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s63079',
  templateUrl: './s63079.page.html',
  styleUrls: ['./s63079.page.scss'],
})
export class S63079Page implements OnInit {
  
  toc="living-with-peace/s63001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/dealing_with_death.jpg"
  
  bg=""
  moduleLink="/adults/dealing-with-death"
  moduleName=" Dealing with Death"
  sectionName= "Living with Wisdom - I";
  moduleId=64
  moduleList: any = [
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/30.png',
      link: '/pleasure',
      id: 20

    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/21.png',
      link: '/comparison',
      id: 7
    },
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/07.png',
      link: '/breathing',
      id: 29
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'happier') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
    
      this.moduleLink = "/adults/pleasure"
      this.moduleName = "Pleasure"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 20
    
    }
   
    
  }

  ngOnInit() {
  }
}



