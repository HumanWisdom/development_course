import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-develop-a-calm-mind',
  templateUrl: './develop-a-calm-mind.page.html',
  styleUrls: ['./develop-a-calm-mind.page.scss'],
})
export class DevelopACalmMindPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(public router: Router, public service: AdultsService, private location: Location) { }

  ngOnInit() {
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }
}
