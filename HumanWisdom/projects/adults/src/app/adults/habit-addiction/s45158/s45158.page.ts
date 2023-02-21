import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s45158',
  templateUrl: './s45158.page.html',
  styleUrls: ['./s45158.page.scss'],
})
export class S45158Page implements OnInit {
  
  toc="habit-addiction/s45001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/46.png"
  
  bg=""
  moduleLink="/adults/food-health"
  moduleName=" Food and Health"
  sectionName= "Living with Wisdom - II";
  moduleId=46
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
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/44.png',
      link: '/stress',
      id: 44
    
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'emotions') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
     
      this.moduleLink = "/adults/comparison"
      this.moduleName = "Comparison and Envy"
      this.sectionName = "Explore How Your Mind Works";
      this.moduleId = 7
    
    }
   else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/pleasure.jpg"
      
      this.moduleLink = "/adults/pleasure"
      this.moduleName = "Pleasure and Desire"
      this.sectionName = "Manage your emotions";
      this.moduleId = 20
     
    }
    // else if (cur && cur === 'relationships') {
    //   this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/communication.jpg"
    //   this.bg_tn = "bg_purple_red"
    //   this.bg_cft = "bg_purple_red"
    //   this.bg = ""
    //   this.moduleLink = "/adults/communication"
    //   this.moduleName = "Communication"
    //   this.sectionName = "Live with wisdom";
    //   this.moduleId = 53
    
    // }
  }

  ngOnInit() {
  }
}
