import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {AdultsService} from "../../adults.service";

@Component({
  selector: 'app-s42022',
  templateUrl: './s42022.page.html',
  styleUrls: ['./s42022.page.scss'],
})
export class S42022Page implements OnInit {
  
  toc="without-language/s42000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/obstacles_to_enquiry.jpg"
  
  bg=""
  moduleLink="/adults/obstacles-enquiry/s43001"
  moduleName=" Obstacles to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=43
  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/13.png',
      link: '/three-steps-enquiry'
    },
    {
      name: 'Awareness',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/15.png',
      link: '/awareness'
 
    },
    {
      name: 'Nature',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/vectorless/06.png',
      link: '/nature'
  
    },
  ]

  
  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'mind') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature.jpg"
     
      this.moduleLink = "/adults/nature"
      this.moduleName = "Nature"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 28
    
    }
    else if (cur && cur === 'sorrow') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
     
      this.moduleLink = "/adults/breathing"
      this.moduleName = "Breathing"
      this.sectionName = "Develop a Calm Mind";
      this.moduleId = 29
    
    }
    
  }

  ngOnInit() {
  }
}
