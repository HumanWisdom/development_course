import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s34033',
  templateUrl: './s34033.page.html',
  styleUrls: ['./s34033.page.scss'],
})
export class S34033Page implements OnInit {
  
  toc="key-ideas/s34001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/program_guide.jpg"
 
  bg=""
  moduleLink="/adults/program-guide/"
  moduleName="01. User Guide"
  sectionName= "Introduction";
  moduleId=35

  constructor() { }

  ngOnInit() {
  }
}
