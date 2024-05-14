import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s100028',
  templateUrl: './s100028.page.html',
  styleUrls: ['./s100028.page.scss'],
})
export class S100028Page implements OnInit {
  
 toc="teenagers/awareness/s100001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/101.webp"
  bg=""
  moduleLink="/no-judgement"
  moduleName="No Judgement"
  sectionName= "Understand yourself";
  moduleId=101
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/107.webp',
      link: '/breathing',
      id: 107
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/108.webp',
      link: '/noticing-thoughts',
      id: 108
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/109.webp',
      link: '/meditation',
      id: 109
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
