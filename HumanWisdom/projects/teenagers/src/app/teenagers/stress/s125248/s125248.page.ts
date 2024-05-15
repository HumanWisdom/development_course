import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TeenagersService } from '../../teenagers.service';
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s125248',
  templateUrl: './s125248.page.html',
  styleUrls: ['./s125248.page.scss'],
})
export class S125248Page implements OnInit 
{  
  
  toc="teenagers/stress/s125001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/126.webp"
  
  bg=""
  moduleLink="/self-esteem/s126001"
  moduleName="Self Esteem"
  sectionName= "Transform your life - II";
  moduleId=126
  programType : ProgramType = ProgramType.Teenagers;

  moduleList: any = [
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning/s105001',
      id: 105
    },
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/111.webp',
      link: '/comparison/s11101',
      id: 111
 
    },
    {
      name: 'Identity',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/119.webp',
      link: '/identity',
      id: 119
    },
  ]

  constructor() {
    let cur = localStorage.getItem('curated');
    if (cur && cur === 'stress') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/fear_anxiety.jpg"
     
      this.moduleLink = "/fear-anxiety"
      this.moduleName = "Fear-Anxiety"
      this.sectionName = "Manage Your Emotions";
      this.moduleId = 19
    
    }
    else if (cur && cur === 'habits') {
      this.moduleImg = "https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/food.jpg"
     
      this.moduleLink = "/food-health"
      this.moduleName = "Food and Health"
      this.sectionName = "Transform your life";
      this.moduleId = 46
    
    }
    
  }

  ngOnInit() {
  }
}