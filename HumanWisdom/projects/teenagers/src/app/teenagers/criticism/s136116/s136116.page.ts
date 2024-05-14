import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import {  ProgramType } from "../../../../../../shared/models/program-model";

@Component({
  selector: 'app-s136116',
  templateUrl: './s136116.page.html',
  styleUrls: ['./s136116.page.scss'],
})
export class S136116Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="teenagers/criticism/s136001"
  // moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/opinions_&_beliefs.jpg"
  
  // bg=""
  // moduleLink="/adults/opinions-beliefs"
  // moduleName="Opinions and Beliefs"
  // sectionName= "Transform your life - I";
  // moduleId=49

  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/140.webp"
  
  bg=""
  moduleLink="/opinions-beliefs"
  moduleName=" Opinions And Beliefs"
  sectionName= "Transform your life - I";
  moduleId=140
  moduleList: any = [
    {
      name: 'Comparison & Envy',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/111.webp',
      link: '/comparison',
      id: 111
    },
    {
      name: 'Conditioning',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/105.webp',
      link: '/conditioning',
      id: 105
    },
    {
      name: 'Reactive mind',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/113.webp',
      link: '/reactive-mind',
      id: 113
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
