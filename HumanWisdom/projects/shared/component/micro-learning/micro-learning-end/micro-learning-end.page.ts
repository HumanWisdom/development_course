import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { CommonService } from "../../../services/common.service";
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-micro-learning-end',
  templateUrl: './micro-learning-end.page.html',
  styleUrls: ['./micro-learning-end.page.scss'],
})
export class MicroLearningEndPage implements OnInit {
  isAdults = true;
  resourcesList = [];
  contentId: any;
  journalText: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state.contentId) {
      this.contentId = state.contentId;
      localStorage.setItem("m_learningId", this.contentId);
    } else {
      this.contentId = localStorage.getItem("m_learningId");
    }
  }

  ngOnInit() {
    localStorage.setItem("progressbarvalue", "100");
    if(this.contentId) {
      this.commonService.clickMicrolearning(this.contentId).subscribe(res=>{
        
      })
      this.getEndScreens();
    }
  }

  getEndScreens() {
    this.commonService.getMicrolearningsEndScreens(this.contentId).subscribe((res: any) => {
      if(res && res.length > 0) {
        const data = res[0];
        this.resourcesList = [
          this.processLink(data.Link1Title, data.Link1Url, data.Link1imgpath),
          this.processLink(data.Link2Title, data.Link2Url, data.Link2imgpath),
          this.processLink(data.Link3Title, data.Link3Url, data.Link3imgpath)
        ];
      }
    });
  }

  processLink(title: string, url: string, imgUrl: string) {
    let decodedTitle = title ? title : '';
    try {
      decodedTitle = decodeURIComponent(decodedTitle);
    } catch (e) {
      console.log('Error decoding title', title);
    }

    let type = 'Resource';
    let cleanTitle = decodedTitle;

    // Extract text inside brackets for type, e.g. "Title (1 min.)" -> type="1 min."
    const match = decodedTitle.match(/\(([^)]*)\)/);
    if(match) {
      type = match[1];
      cleanTitle = decodedTitle.replace(match[0], '').trim();
    }

    return {
      title: cleanTitle,
      url: url,
      imgUrl: imgUrl,
      type: type
    };
  }

  goBack() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning/inner/${this.contentId}`], {
      state: { fromEnd: true }
    });
  }

  addJournal() {
    // Logic to add to journal
    console.log("Journal added:", this.journalText);
    // You might call a service here
  }

  navigateToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning`]);
  }

  goToHome() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  handleResourceClick(resource) {
    if (resource.url) {
      this.router.navigate([decodeURIComponent(resource.url)]);
    }
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