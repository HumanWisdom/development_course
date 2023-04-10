import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from '../../teenagers.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s83037',
  templateUrl: './s83037.page.html',
  styleUrls: ['./s83037.page.scss'],
})
export class S83037Page implements OnInit {
  
  toc="key-ideas/s83001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/program_guide.jpg"
 
  bg=""
  moduleLink="/start-here/"
  moduleName="Start Here"
  sectionName= "Introduction";
  moduleId=78

  constructor() { }

  ngOnInit() {}
}