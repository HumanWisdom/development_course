import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s33022',
  templateUrl: './s33022.page.html',
  styleUrls: ['./s33022.page.scss'],
})
export class S33022Page implements OnInit {
  
  toc="five-circles/s33001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/key_ideas.jpg"
  bg_tn="bg_purple_blue"
  bg_cft="bg_purple_blue"
  bg=""
  moduleLink="/adults/key-ideas/"
  moduleName="05. Key Ideas"
  sectionName= "Introduction";
  moduleId=34

  constructor() { }

  ngOnInit() {
  }
}
