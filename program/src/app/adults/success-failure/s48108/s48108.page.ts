import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s48108',
  templateUrl: './s48108.page.html',
  styleUrls: ['./s48108.page.scss'],
})
export class S48108Page implements OnInit {
  
  toc="success-failure/s48001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/addiction.jpg"
  bg=""
  moduleLink="/adults/habit-addiction"
  moduleName="05. Addiction"
  sectionName= "Living with Wisdom - II";
  moduleId=45

  constructor() { }

  ngOnInit() {
  }
}
