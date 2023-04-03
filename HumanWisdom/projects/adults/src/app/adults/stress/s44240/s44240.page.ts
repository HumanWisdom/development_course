import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s44240',
  templateUrl: './s44240.page.html',
  styleUrls: ['./s44240.page.scss'],
})
export class S44240Page implements OnInit {
  
  toc="stress/s44001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/relationships.jpg"
  
  // bg=""
  // moduleLink="/adults/relationships"
  // moduleName=" Relationships"
  // sectionName= "Transform your life - I";
  // moduleId=47
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/17.png"
  
  bg=""
  moduleLink="/adults/self-esteem"
  moduleName=" Self Esteem"
  sectionName= "Transform your life - II";
  moduleId=17
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/15.png',
      link: '/conditioning',
      id: 15
    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/07.png',
      link: '/comparison',
      id: 7
 
    },
    {
      name: 'Money',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/73.png',
      link: '/money',
      id: 73
  
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/fear_anxiety.jpg"
     
      this.moduleLink = "/adults/fear-anxiety"
      this.moduleName = "Fear-Anxiety"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 19
    
    }
    else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/food.jpg"
     
      this.moduleLink = "/adults/food-health"
      this.moduleName = "Food and Health"
      this.sectionName = "Transform your life";
      this.moduleId = 46
    
    }
    
  }

  ngOnInit() {
  }
}