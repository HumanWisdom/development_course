import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramType } from '../../../../../../shared/models/program-model';

@Component({
  selector: 'app-s82022',
  templateUrl: './s82022.page.html',
  styleUrls: ['./s82022.page.scss'],
})
export class S82022Page implements OnInit {
  programType : ProgramType = ProgramType.Teenagers;
  toc="five-circles-of-wisdom/s82001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/teenagers/99.webp"
  
  bg=""
  moduleLink="/insight/s99001"
  moduleName=" Insight"
  sectionName= "Art of Enquiry";
  moduleId=99

  constructor() { }

  ngOnInit() {
  }
}