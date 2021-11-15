import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s432',
  templateUrl: './s432.page.html',
  styleUrls: ['./s432.page.scss'],
})
export class S432Page implements OnInit {
  
  toc="criticism/s324"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/self_esteem.jpg"
  bg=""
  moduleLink="/adults/self-esteem"
  moduleName="05. Self-Esteem"
  sectionName= "Living with Wisdom - I";

  constructor() { }

  ngOnInit() {
  }
}
