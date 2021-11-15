import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s32015',
  templateUrl: './s32015.page.html',
  styleUrls: ['./s32015.page.scss'],
})
export class S32015Page implements OnInit {
  
  toc="benefits-of-wisdom/s32001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/5circles_of_wisdom.jpg"
  bg=""
  moduleLink="/adults/five-circles/"
  moduleName="04. 5 Circles of Wisdom"
  sectionName= "Introduction";
  moduleId=33

  constructor() { }

  ngOnInit() {
  }
}
