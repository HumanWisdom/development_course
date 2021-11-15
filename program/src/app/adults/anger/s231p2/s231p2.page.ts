import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s231p2',
  templateUrl: './s231p2.page.html',
  styleUrls: ['./s231p2.page.scss'],
})
export class S231p2Page implements OnInit {
  
  toc="anger/s162p0"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/fear_anxiety.jpg"
  bg=""
  moduleLink="/adults/fear-anxiety"
  moduleName="01. Fear & Anxiety "
  sectionName= "Understand Emotions";
  moduleId=19

  constructor() { }

  ngOnInit() {
  }
}
