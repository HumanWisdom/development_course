import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s27036',
  templateUrl: './s27036.page.html',
  styleUrls: ['./s27036.page.scss'],
})
export class S27036Page implements OnInit {
  
  toc="discovering-wisdom/s27001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/74.png"
  bg=""
  moduleLink="/adults/how-can-wisdom-help/"
  moduleName="How can wisdom help?"
  sectionName= "Introduction"
  moduleId=74
  
  constructor() { }

  ngOnInit() {} 
}
