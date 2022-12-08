import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s30007',
  templateUrl: './s30007.page.html',
  styleUrls: ['./s30007.page.scss'],
})
export class S30007Page implements OnInit {
  
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation.jpg"
  
  bg=""
  moduleLink="/adults/guided-meditation"
  moduleName="04. Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=51
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/07.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/09.png',
      link: '/meditation',
      id: 22
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/06.png',
      link: '/nature',
      id: 28
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/guided_audio_meditation.jpg"
      
      this.moduleLink = "/adults/guided-meditation"
      this.moduleName = "Guided Meditation"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 51
    
    }
   }

  ngOnInit() {
  }
}
