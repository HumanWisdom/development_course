import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { CommonService } from "../../../services/common.service";
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-micro-learning-inner',
  templateUrl: './micro-learning-inner.page.html',
  styleUrls: ['./micro-learning-inner.page.scss'],
})
export class MicroLearningInnerPage implements OnInit {
  isAdults = true;
  contentId: any;
  
  screensList = [];
  currentScreenIndex = 0;

  // Data structure for dynamic inner page
  // Layout values: 1 (Image Top), 2 (Image Center), 3 (Image Bottom)
  contentData = {
    title: '',
    description: '',
    imgUrl: '',
    layout: 1 
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  ngOnInit() {
    this.contentId = this.route.snapshot.paramMap.get('id');
    this.getMicroLearningScreens();
  }

  getMicroLearningScreens() {
    this.commonService.GetMicrolearningScreens(this.contentId).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.screensList = res;
        this.currentScreenIndex = 0;
        this.updateContent();
      }
    }); 
  }
  
  updateContent() {
    const currentScreen = this.screensList[this.currentScreenIndex];
    this.contentData = {
      title: currentScreen.title,
      description: currentScreen.content,
      imgUrl: currentScreen.ImageUrl,
      layout: 1 // We can randomize or determine this if data supports it, currently defaulting to 1
    };
  }

  fetchContent() {
     // method kept for structure but mostly handled by route state now
  }

  goBack() {
    if (this.currentScreenIndex > 0) {
      this.currentScreenIndex--;
      this.updateContent();
    } else {
      this.location.back();
    }
  }

  next() {
    if (this.currentScreenIndex < this.screensList.length - 1) {
      this.currentScreenIndex++;
      this.updateContent();
    } else {
      // End of micro-learning module
      this.router.navigate([`/${SharedService.getprogramName()}/micro-learning/end`], {
        state: { contentId: this.contentId }
      });
    }
  }

  getProgressPercentage() {
    if (this.screensList.length === 0) return 0;
    return ((this.currentScreenIndex + 1) / this.screensList.length) * 100;
  }

  share() {
    const token = localStorage.getItem("shareToken");
    const baseUrl = SharedService.ProgramId == ProgramType.Adults ? SharedService.AdultsBaseUrl : SharedService.TeenagerBaseUrl;
    const url = baseUrl + this.router.url + (token ? `?t=${token}` : '');

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: url
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
