import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'

@Component({
  selector: 'app-s140110',
  templateUrl: './s140110.page.html',
  styleUrls: ['./s140110.page.scss'],
})
export class S140110Page implements OnInit {
  
  toc="opinions-beliefs/s140001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_esteem.jpg"
  
  // bg=""
  // moduleLink="/adults/self-esteem"
  // moduleName=" Self Esteem"
  // sectionName= "Transform your life - II";
  // moduleId=17

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/48.png"
 
  bg=""
  moduleLink="/success-failure"
  moduleName=" Success and Failure"
  sectionName= "Transform your life - II";
  moduleId=48
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
 
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/21.png',
      link: '/identity',
      id: 21
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/49.png"
      
      this.moduleLink = "/opinions-beliefs"
      this.moduleName = "Opinions and Beliefs"
      this.sectionName = "Transform your life";
      this.moduleId = 49
    
    }
   }

  ngOnInit() {
  }
}
