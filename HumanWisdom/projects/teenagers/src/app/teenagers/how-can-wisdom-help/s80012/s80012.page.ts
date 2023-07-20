import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s80012',
  templateUrl: './s80012.page.html',
  styleUrls: ['./s80012.page.scss'],
})
export class S80012Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="how-can-wisdom-help/s80001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/benefits_of_wisdom.png"
  bg=""
  moduleLink="/benefits-of-wisdom/"
  moduleName=" Wisdom brings change"
  sectionName= "Introduction";
  moduleId=81
  
  constructor() { }

  ngOnInit() { }
}
