import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s28015',
  templateUrl: './s28015.page.html',
  styleUrls: ['./s28015.page.scss'],
})
export class S28015Page implements OnInit {

  toc="nature/s28001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/breathing.jpg"
  bg=""
  moduleLink="/adults/breathing"
  moduleName="02. Breathing"
  sectionName= "Nurturing a Quiet Mind";
  moduleId=29

  constructor() { }

  ngOnInit() {
  }
}
