import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';


@Component({
  selector: 'app-s29010',
  templateUrl: './s29010.page.html',
  styleUrls: ['./s29010.page.scss'],
})
export class S29010Page implements OnInit {
  
  toc="breathing/s29000"
  bg=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/noticing_thoughts.jpg"
  moduleLink="/adults/noticing-thoughts"
  moduleName="Noticing Thoughts"
  sectionName= "Develop a calm mind";
  moduleId=30
  moduleList: any = [
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/06.png',
      link: '/nature'
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/08.png',
      link: '/noticing-thoughts'
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/10.png',
      link: '/guided-meditation'
  
    },
  ]


  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/stress.jpg"
      this.moduleLink = "/adults/stress"
      this.moduleName = "stress"
      this.sectionName = "Live with wisdom";
      this.moduleId = 44
    
    }
  
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/sorrow.jpg"
      this.moduleLink = "/adults/sorrow"
      this.moduleName = "Sorrow"
      this.sectionName = "Manage your emotions";
      this.moduleId = 60
     
    }

   }

  ngOnInit() {
  }

}
