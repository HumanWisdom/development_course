import { Component, OnInit } from '@angular/core';
import { AdultsService } from "../../adults.service"
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s74012',
  templateUrl: './s74012.page.html',
  styleUrls: ['./s74012.page.scss'],
})
export class S74012Page implements OnInit {

  toc="how-can-wisdom-help/s74001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/benefits_of_wisdom.png"
  bg=""
  moduleLink="/adults/benefits-of-wisdom/"
  moduleName=" Wisdom brings change"
  sectionName= "Introduction";
  moduleId=32

  
  constructor() { }

  ngOnInit() { }
}
