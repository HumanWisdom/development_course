import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: 'app-guided-journey-end',
  templateUrl: './guided-journey-end.page.html',
  styleUrls: ['./guided-journey-end.page.scss']
})
export class GuidedJourneyEndPage implements OnInit {
  isAdults = true;
  journeyId: any;
  journeyTitle: string = 'Stress reduction';
  moduleList: any[] = [];
  isLoading = true;
  totalDays: number = 0;
  currentDay: number = -1;
  visitedDays: Set<number> = new Set();
  loginResponse: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private commonService: CommonService,
    private navigationService: NavigationService
  ) {
    this.isAdults = SharedService.ProgramId == 9;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.journeyId = params['journeyId'];
      if (params['title']) {
        this.journeyTitle = params['title'];
      }
      if (this.journeyId) {
        this.getGuidedJourneyDays();
      }
    });

    const savedLogin = localStorage.getItem("loginResponse") || sessionStorage.getItem("loginResponse");
    if (savedLogin) {
      this.loginResponse = JSON.parse(savedLogin);
    }

    this.getModuleList();
  }

  survey(): void {
    const prefix = this.isAdults ? '/adults' : '/teenagers';
    this.router.navigate([`${prefix}/wisdom-survey`], { state: { isUseCloseButton: true } });
  }

  getGuidedJourneyDays() {
    const userId = SharedService.getUserId() || 100;
    const programId = SharedService.ProgramId;

    this.commonService.GetGuidedJourneyDays(this.journeyId, programId, userId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        const days = res.map(item => parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day)).filter(n => !isNaN(n));
        this.totalDays = days.length > 0 ? Math.max(...days) : 0;
        this.currentDay = this.totalDays + 1; // Mark as after last day
        
        // Mark all as visited on end screen
        for(let i=0; i<=this.totalDays; i++) {
          this.visitedDays.add(i);
        }
      }
    });
  }

  getModuleList() {
    this.isLoading = true;
    this.commonService.GetMicrolearningList(SharedService.ProgramId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        this.moduleList = res.slice(0, 4).map(item => ({
          id: item.MicrolearningID || item.Id || item.id,
          title: item.Title || item.title,
          imgUrl: this.getImgUrl(item.ImgPath || item.imgPath || item.ImageUrl || item.imageUrl),
          sessions: item.Sessions || item.sessions || '',
          url: item.Url || item.url || ''
        }));
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getImgUrl(url: string) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }

  goToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
  }

  goToModule(item: any) {
    if (item.url) {
      let url = item.url;
      if (!url.startsWith('/')) {
        url = '/' + url;
      }
      this.router.navigateByUrl(url);
    }
  }

  goToHome() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }

  navigateToDay(day: number) {
    const prefix = SharedService.getprogramName();
    if (day === 0) {
      this.router.navigate([`/${prefix}/guided-journeys/intro`], { queryParams: { journeyId: this.journeyId } });
    } else {
      this.router.navigate([`/${prefix}/guided-journeys/days`], { queryParams: { journeyId: this.journeyId, day: day } });
    }
  }

  getDaysArray() {
    return Array.from({ length: this.totalDays }, (_, i) => i + 1);
  }

  isVisited(day: number) {
    return true; // All visited on end screen
  }

  logEvent(event: string, url: string) {
    // Implement logEvent if needed or remove from HTML
    console.log(event, url);
  }

  navigateToPathway(url: string) {
    if (url) {
      let finalUrl = url;
      if (!finalUrl.startsWith('/')) {
        finalUrl = '/' + finalUrl;
      }
      this.router.navigateByUrl(finalUrl);
    }
  }
}

