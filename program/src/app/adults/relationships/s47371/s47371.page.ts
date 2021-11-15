import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s47371',
  templateUrl: './s47371.page.html',
  styleUrls: ['./s47371.page.scss'],
})
export class S47371Page implements OnInit {
  
  toc="relationships/s47000"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/love.jpg"
  bg=""
  moduleLink="/adults/love"
  moduleName="03. Love"
  sectionName= "Living with Wisdom - I";

  constructor() { }

  ngOnInit() {
  }
}
