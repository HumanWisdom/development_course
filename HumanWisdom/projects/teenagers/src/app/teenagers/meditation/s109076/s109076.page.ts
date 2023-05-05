import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s109076',
  templateUrl: './s109076.page.html',
  styleUrls: ['./s109076.page.scss'],
})
export class S109076Page implements OnInit {

  toc="meditation/s109001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/51.png"
  
  bg=""
  moduleLink="/guided-meditation/s110001"
  moduleName=" Guided Audio Meditation"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=110
  programType : ProgramType = ProgramType.Teenagers;
  
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/look_without_language.jpg"
    
      this.moduleLink = "/without-language"
      this.moduleName = " Look Without Language"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 103
    
    }
   
    
  }

  ngOnInit() {
  }
}

