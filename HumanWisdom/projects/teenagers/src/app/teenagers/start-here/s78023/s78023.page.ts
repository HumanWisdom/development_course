import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s78023',
  templateUrl: './s78023.page.html',
  styleUrls: ['./s78023.page.scss'],
})
export class S78023Page implements OnInit {
  
  toc="start-here/s78001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/how_can_wisdom_help.png"
  bg=""
  moduleLink="/what-is-wisdom/"
  moduleName="What is Wisdom?"
  sectionName= "Introduction";
  moduleId=79
  
  constructor() { }

  ngOnInit() {} 
}