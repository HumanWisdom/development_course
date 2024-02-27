import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service';

@Component({
  selector: 'app-develop-a-calm-mind',
  templateUrl: './develop-a-calm-mind.page.html',
  styleUrls: ['./develop-a-calm-mind.page.scss'],
})
export class DevelopACalmMindPage implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  public natureP: any
  public breathingP: any
  public meditationP: any
  public ntP: any
  public gamP: any

  constructor(public router: Router, public service: AdultsService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.natureP = d['ModUserScrPc'].find(e => e.Module == "Nature")?.Percentage;
      this.breathingP = d['ModUserScrPc'].find(e => e.Module == "Breathing")?.Percentage;
      this.meditationP = d['ModUserScrPc'].find(e => e.Module == "Meditation")?.Percentage;
      this.ntP = d['ModUserScrPc'].find(e => e.Module == "Noticing Thoughts")?.Percentage;
      this.gamP = d['ModUserScrPc'].find(e => e.Module == "Guided Audio Meditation")?.Percentage;
    });
    this.logeventservice.logEvent('view_develop_calm_mind');
    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  getPoint() {

  }

  goBack() {
    this.logeventservice.logEvent('click_back');
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }
  }
}
