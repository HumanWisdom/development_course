import { Component, OnInit } from '@angular/core';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s101023',
  templateUrl: './s101023.page.html',
  styleUrls: ['./s101023.page.scss'],
})
export class S101023Page implements OnInit {
  
  toc="no-judgement//s100001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/41.png"
  bg=""
  moduleLink="/questions-are-key/s102001"
  moduleName="Questions are key"
  sectionName= "Understand yourself";
  moduleId=102
  programType : ProgramType = ProgramType.Teenagers;
  moduleList: any = [
    {
      name: 'Breathing',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/29.png',
      link: '/breathing',
      id: 29
    },
    {
      name: 'Noticing Thoughts',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/30.png',
      link: '/noticing-thoughts',
      id: 30
    },
    {
      name: 'Meditation',
      image: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/resume/22.png',
      link: '/meditation',
      id: 22
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
