import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';

@Component({
  selector: 'app-understand-how-your-mind-works',
  templateUrl: './understand-how-your-mind-works.page.html',
  styleUrls: ['./understand-how-your-mind-works.page.scss'],
})
export class UnderstandHowYourMindWorksPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(public router: Router, public service: AdultsService, private location: Location) { }

  ngOnInit() {
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

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
