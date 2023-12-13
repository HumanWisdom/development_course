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
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/35.webp"
 
  bg=""
  moduleLink="/adults/program-guide/"
  moduleName="Start Here"
  sectionName= "Introduction";
  moduleId=35

  constructor() { }

  ngOnInit() {
  }
}
