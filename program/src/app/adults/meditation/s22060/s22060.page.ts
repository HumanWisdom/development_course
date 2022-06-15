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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature.jpg"
  
  bg=""
  moduleLink="/adults/nature"
  moduleName=" Nature"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=28

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/look_without_language.jpg"
    
      this.moduleLink = "/adults/without-language"
      this.moduleName = " Look Without Language"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 42
    
    }
   
    
  }

  ngOnInit() {
  }
}

