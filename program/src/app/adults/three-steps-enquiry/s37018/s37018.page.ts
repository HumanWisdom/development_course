import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s37018',
  templateUrl: './s37018.page.html',
  styleUrls: ['./s37018.page.scss'],
})
export class S37018Page implements OnInit {
  
  toc="three-steps-enquiry/s37000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/insight.jpg"
  bg=""
  moduleLink="/adults/insight/s38001"
  moduleName="04. Insight"
  sectionName= "Art of Enquiry";
  moduleId=38
  
  constructor() { }

  ngOnInit() {
  }
}
