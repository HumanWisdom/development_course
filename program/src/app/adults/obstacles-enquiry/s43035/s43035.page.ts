import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s43035',
  templateUrl: './s43035.page.html',
  styleUrls: ['./s43035.page.scss'],
})
export class S43035Page implements OnInit {
  
  toc="obstacles-enquiry/s43000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/benefits_of_enquiry.jpg"
  bg=""
  moduleLink="/adults/benefits-of-enquiry/s26002"
  moduleName="01. Benefits of Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=26
  
  constructor() { }

  ngOnInit() {
  }
}
