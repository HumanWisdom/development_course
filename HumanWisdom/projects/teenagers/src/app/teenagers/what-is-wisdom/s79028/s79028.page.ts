import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s79028',
  templateUrl: './s79028.page.html',
  styleUrls: ['./s79028.page.scss'],
})
export class S79028Page implements OnInit {
  
  toc="what-is-wisdom/s79001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/how_can_wisdom_help.png"
  bg=""
  moduleLink="/adults/how-can-wisdom-help/"
  moduleName="How can wisdom help?"
  sectionName= "Introduction"
  moduleId=80
  
  constructor() { }

  ngOnInit() {} 
}