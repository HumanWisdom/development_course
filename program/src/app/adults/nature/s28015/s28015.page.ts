import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s28015',
  templateUrl: './s28015.page.html',
  styleUrls: ['./s28015.page.scss'],
})
export class S28015Page implements OnInit {

  toc="nature/s28001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
 
  bg=""
  moduleLink="/adults/breathing"
  moduleName=" Breathing"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=29
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/07.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/08.png',
      link: '/noticing-thoughts',
      id: 30
 
    },
    {
      name: 'Guided Audio Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/10.png',
      link: '/guided-meditation',
      id: 51
  
    },
  ]


  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
      
      this.moduleLink = "/adults/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 29
    
    }
   }

  ngOnInit() {
  }
}
