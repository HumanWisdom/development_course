import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdultsService } from "../../adults.service";
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e01',
  templateUrl: './e01.page.html',
  styleUrls: ['./e01.page.scss'],
})
export class E01Page implements OnInit {

  tocImage="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/curated_dbs/images/events/artworks/01.png"
  tocColor="white"
  
  constructor() { }

  ngOnInit() {
  }

}
