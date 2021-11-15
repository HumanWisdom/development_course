import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location } from '@angular/common'
import { AdultsService } from '../../adults.service';

@Component({
  selector: 'app-s53256',
  templateUrl: './s53256.page.html',
  styleUrls: ['./s53256.page.scss'],
})
export class S53256Page  implements OnInit {
  
  toc="communication/s53001"
  moduleImg="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/toc/opinions_&_beliefs.jpg"
  bg=""
  moduleLink="/adults/opinions-beliefs"
  moduleName="03. Opinions and Beliefs"
  sectionName= "Living with Wisdom - II";

  constructor() { }

  ngOnInit() {
  }
}
