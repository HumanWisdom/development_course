import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s22060',
  templateUrl: './s22060.page.html',
  styleUrls: ['./s22060.page.scss'],
})
export class S22060Page implements OnInit {

  toc="meditation/s22001"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp"
  
  bg=""
  moduleLink="/adults/guided-meditation"
  moduleName=" Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=28

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/42.webp"
    
      this.moduleLink = "/adults/without-language"
      this.moduleName = " Look Without Language"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 42
    
    }
   
    
  }

  ngOnInit() {
  }
}

