import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s36027',
  templateUrl: './s36027.page.html',
  styleUrls: ['./s36027.page.scss'],
})
export class S36027Page implements OnInit {
  
  toc="how-to-begin/s36000"
  moduleImg="https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/37.webp"
  
  bg=""
  moduleLink="/adults/three-steps-enquiry/s37001"
  moduleName=" Three Steps to Enquiry"
  sectionName= "Art of Enquiry";
  moduleId=37
  
  constructor() { }

  ngOnInit() {
  }
}
