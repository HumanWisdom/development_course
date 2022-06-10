import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s49103',
  templateUrl: './s49103.page.html',
  styleUrls: ['./s49103.page.scss'],
})
export class S49103Page implements OnInit {
  
  toc="opinions-beliefs/s49001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_esteem.jpg"
  bg_tn="bg_purple_red"
  bg_cft="bg_purple_red"
  bg=""
  moduleLink="/adults/self-esteem"
  moduleName=" Self Esteem"
  sectionName= "Living with Wisdom - II";
  moduleId=17
  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png',
      link: '/conditioning'
    },
    {
      name: 'Stress',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png',
      link: '/stress'
 
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/25.png',
      link: '/identity'
    },
  ]

  constructor() {

    let cur = localStorage.getItem('curated');
    if (cur && cur === 'relationships') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/relationships.jpg"
      
      this.moduleLink = "/adults/relationships"
      this.moduleName = "Relationships"
      this.sectionName = "Live with Wisdom";
      this.moduleId = 47
    
    }
   }

  ngOnInit() {
  }
}
