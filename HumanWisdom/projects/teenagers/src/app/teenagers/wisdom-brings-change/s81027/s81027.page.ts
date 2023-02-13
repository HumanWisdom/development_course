import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s81027',
  templateUrl: './s81027.page.html',
  styleUrls: ['./s81027.page.scss'],
})
export class S81027Page implements OnInit {
  
  toc="wisdom-brings-change/s81001"
  bg="";
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/5circles_of_wisdom.jpg"
  moduleLink="/teenagers/five-circles-of-wisdom/"
  moduleName="5 Circles of Wisdom"
  sectionName= "Introduction";
  moduleId=82

  constructor() { }

  ngOnInit() {
  }
}