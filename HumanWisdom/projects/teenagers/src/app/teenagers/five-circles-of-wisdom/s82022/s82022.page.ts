import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeenagersService } from "../../teenagers.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s82022',
  templateUrl: './s82022.page.html',
  styleUrls: ['./s82022.page.scss'],
})
export class S82022Page implements OnInit {
  
  toc="five-circles-of-wisdom/s82001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/key_ideas.jpg"
  
  bg=""
  moduleLink="/teenagers/key-ideas/"
  moduleName=" Key Ideas"
  sectionName= "Introduction";
  moduleId=83

  constructor() { }

  ngOnInit() {
  }
}