import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s53256',
  templateUrl: './s53256.page.html',
  styleUrls: ['./s53256.page.scss'],
})
export class S53256Page  implements OnInit {
  
  toc="communication/s53001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/success_&_failure.jpg"
 
  // bg=""
  // moduleLink="/adults/success-failure"
  // moduleName=" Success and Failure"
  // sectionName= "Transform your life - II";
  // moduleId=48

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/23.png"
 
  bg=""
  moduleLink="/adults/happiness"
  moduleName=" Happiness"
  sectionName= "Transform your life - II";
  moduleId=23

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15
 
    },
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/54.png',
      link: '/reactive-mind',
      id: 54
    },
    {
      name: 'Relationships',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/47.png',
      link: '/relationships',
      id: 47
    },
  ]

  constructor() {
   
      let cur = localStorage.getItem('curated');
      if (cur && cur === 'workplace') {
        this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/success_&_failure.jpg"
       
        this.moduleLink = "/adults/success-failure"
        this.moduleName = "Success and Failure"
        this.sectionName = "Transform your life";
        this.moduleId = 48
      
      }
     else if (cur && cur === 'relationships') {
        this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/love.jpg"
       
        this.moduleLink = "/adults/love"
        this.moduleName = "Love"
        this.sectionName = "Transform your life";
        this.moduleId = 62
       
      }
   }

  ngOnInit() {
  }
}
