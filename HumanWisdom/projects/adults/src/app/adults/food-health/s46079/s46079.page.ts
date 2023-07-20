import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s46079',
  templateUrl: './s46079.page.html',
  styleUrls: ['./s46079.page.scss'],
})
export class S46079Page implements OnInit {
  
  toc="food-health/s46001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/money.jpg"
 
  // bg=""
  // moduleLink="/adults/money"
  // moduleName=" Money"
  // sectionName= "Transform your life - II";
  // moduleId=73
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/63.png"
 
  bg=""
  moduleLink="/adults/living-with-peace"
  moduleName=" Living with Peace"
  sectionName= "Transform your life - I";
  moduleId=63
  moduleList: any = [
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/20.png',
      link: '/pleasure',
      id: 20
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
    
      this.moduleLink = "/adults/habit-addiction"
      this.moduleName = " Habit Addiction"
      this.sectionName = "Transform your life";
      this.moduleId = 45
    
    }
   
    
  }

  ngOnInit() {
  }
}


