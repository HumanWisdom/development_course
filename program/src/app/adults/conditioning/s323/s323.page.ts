import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s323',
  templateUrl: './s323.page.html',
  styleUrls: ['./s323.page.scss'],
})
export class S323Page implements OnInit {
  
  toc=""
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/comparison_envy.png"
  bg=""
  moduleLink="/adults/comparison/s0"
  moduleName="02. Comparison"
  sectionName= "How the Mind Works";
  moduleId=7
  
  constructor() { }

  ngOnInit() {
  }
}
