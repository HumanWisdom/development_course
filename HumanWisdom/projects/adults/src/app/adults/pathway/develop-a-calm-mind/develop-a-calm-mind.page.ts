import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../../adults.service';
import { Location } from '@angular/common';
import { SharedService } from '../../../../../../shared/services/shared.service';
import { Constant } from '../../../../../../shared/services/constant';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { LogEventService } from '../../../../../../shared/services/log-event.service';
import { ProgramType } from "../../../../../../shared/models/program-model";

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
  mediaUrl: any;

  constructor(public router: Router, public service: AdultsService,
    public logeventservice: LogEventService,
    private location: Location, private navigationService: NavigationService)
    {
      this.mediaUrl = {
        url: 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/guided-meditation/audios/guided-meditation+1.22.mp3',
        youtubeUrl: 'b5PZ6fFCL3g'
      }
    }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem("userId")) ? JSON.parse(localStorage.getItem("userId")) : 100;
    this.service.getPoints(userId).subscribe((d) => {
      this.natureP = d['ModUserScrPc'].find(e => e.ModuleId  == 28)?.Percentage;
      this.breathingP = d['ModUserScrPc'].find(e => e.ModuleId == 29)?.Percentage;
      this.meditationP = d['ModUserScrPc'].find(e => e.ModuleId == 22)?.Percentage;
      this.ntP = d['ModUserScrPc'].find(e => e.ModuleId == 30)?.Percentage;
      this.gamP = d['ModUserScrPc'].find(e => e.ModuleId == 51)?.Percentage;
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
    this.router.navigate([url]);
  }

  routeVideoaudio(type, url, title = '') {
    if(type === 'video') {
     this.router.navigate([url, 'F', title])
    }else{
      let concat = encodeURIComponent(url.replaceAll('/','~'));
      if ( SharedService.ProgramId == ProgramType.Teenagers) {
        this.router.navigate(['/teenagers/audiopage/', concat, '1', 'F', title])
      }
      else{
        this.router.navigate(['adults/audiopage/', concat, '1', 'F', title])
      }
    }
  }

  determineVideoUrl(url): string {
    if (SharedService.ProgramId == ProgramType.Teenagers) {
      return `/teenagers/videopage/${url}`;
    } else {
      return `/adults/videopage/${url}`;
    }
  }
}
