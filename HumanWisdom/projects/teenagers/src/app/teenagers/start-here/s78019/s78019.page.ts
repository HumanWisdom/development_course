import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { TeenagersService } from '../../teenagers.service';

@Component({
  selector: 'app-s78019',
  templateUrl: './s78019.page.html',
  styleUrls: ['./s78019.page.scss'],
})
export class S78019Page implements OnInit {
  
  toc="start-here/s78001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/discovering_wisdom.jpg"
  
  bg=""
  moduleLink="/teenagers/discovering-wisdom/"
  moduleName="What is Wisdom?"
  sectionName= "Introduction";
  moduleId=27

  constructor() { }

  ngOnInit() {
  }
}
