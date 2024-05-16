import { Component, OnInit } from '@angular/core';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s101023',
  templateUrl: './s101023.page.html',
  styleUrls: ['./s101023.page.scss'],
})
export class S101023Page implements OnInit {
  
  toc="no-judgement//s100001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/102.webp"
  bg=""
  moduleLink="/questions-are-key/s102001"
  moduleName="Questions are key"
  sectionName= "Understand yourself";
  moduleId=102
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Three Steps to Enquiry',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/97.webp',
      link: '/three-steps-enquiry',
      id: 97
    },
    {
      name: 'Insight',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/99.webp',
      link: '/insight',
      id: 99
    },
    {
      name: 'Awareness',
      image: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/teenagers/100.webp',
      link: '/awareness',
      id: 100
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
