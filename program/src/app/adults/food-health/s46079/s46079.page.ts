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
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/money.jpg"
 
  bg=""
  moduleLink="/adults/money"
  moduleName=" Money"
  sectionName= "Living with Wisdom - II";
  moduleId=73
  moduleList: any = [
    {
      name: 'Pleasure',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/30.png',
      link: '/pleasure'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/34.png',
      link: '/stress'
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/20.png',
      link: '/conditioning'

    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
    
      this.moduleLink = "/adults/habit-addiction"
      this.moduleName = " Habit Addiction"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 45
    
    }
   
    
  }

  ngOnInit() {
  }
}


