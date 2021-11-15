import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s56054',
  templateUrl: './s56054.page.html',
  styleUrls: ['./s56054.page.scss'],
})
export class S56054Page implements OnInit {
  
  toc="inner-boredom/s56001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/nature_of_i.jpg"
  bg=""
  moduleLink="/adults/nature-of-i"
  moduleName="09. The Nature of the ‘I’"
  sectionName= "How the Mind Works";
  moduleId=56

  constructor() { }

  ngOnInit() {
  }
}
