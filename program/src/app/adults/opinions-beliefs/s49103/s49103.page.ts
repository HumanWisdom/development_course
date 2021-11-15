import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s49103',
  templateUrl: './s49103.page.html',
  styleUrls: ['./s49103.page.scss'],
})
export class S49103Page implements OnInit {
  
  toc="opinions-beliefs/s49001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/success_&_failure.jpg"
  bg=""
  moduleLink="/adults/success-failure"
  moduleName="04. Success and Failure"
  sectionName= "Living with Wisdom - II";
  moduleId=48

  constructor() { }

  ngOnInit() {
  }
}
