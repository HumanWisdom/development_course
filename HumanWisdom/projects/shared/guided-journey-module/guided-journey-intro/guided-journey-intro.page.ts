import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: 'app-guided-journey-intro',
  templateUrl: './guided-journey-intro.page.html',
  styleUrls: ['./guided-journey-intro.page.scss']
})
export class GuidedJourneyIntroPage implements OnInit {
  isAdults = true;
  journeyId: any;
  journeyDetails: any;
  isLoading = true;
  totalDays: number = 0;
  currentDay: number = 0;
  private touchStartX = 0;
  private touchStartY = 0;

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
      if (this.journeyId) {
        this.getJourneyDetails();
        this.getGuidedJourneyDays();
      }
    });
  }

  isDragging = false;

  handleTouchStart(event: any) {
    this.touchStartX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    this.touchStartY = event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
    this.isDragging = true;
  }

  handleTouchEnd(event: any) {
    if (!this.isDragging) return;
    this.isDragging = false;

    // Use changedTouches for touch events, or clientX for mouse events
    const touchEndX = event.type.startsWith('touch') ? event.changedTouches[0].clientX : event.clientX;
    const touchEndY = event.type.startsWith('touch') ? event.changedTouches[0].clientY : event.clientY;
    
    // Only check if it's a mouse event and we don't have clientX (e.g. mouseleave)
    if (!touchEndX && event.type !== 'touchend') return;

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    // Check if swipe is horizontal and significant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        // Swipe left
        this.beginJourney();
      }
    }
  }

  getJourneyDetails() {
    this.isLoading = true;
    let userid = SharedService.getUserId() || 100;
    let programId = SharedService.ProgramId;
    this.commonService.GetGuidedJourneys(programId, userid).subscribe((res: any) => {
      if (res) {
        const data = Array.isArray(res) ? res : (res.Data || res.data || res.DataList || res.GuidedJourneys || res.Guided_Journeys || res.list || []);
        const journey = data.find(item => (item.GuidedJourneyID || item.JourneyID || item.journeyID || item.Id || item.id || item.RowID) == this.journeyId);
        
        if (journey) {
          this.journeyDetails = {
            id: journey.GuidedJourneyID || journey.JourneyID || journey.journeyID || journey.Id || journey.id || journey.RowID,
            title: journey.Title || journey.title || journey.JourneyName || journey.Name,
            subtitle: journey.Subtitle || journey.subtitle,
            description: journey.Description || journey.description,
            imgUrl: this.getImgUrl(journey.ImageUrl || journey.ImgUrl || journey.imgUrl || journey.imageUrl),
          };
          if (journey.Days) {
            this.totalDays = parseInt(journey.Days);
          }
        }
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getGuidedJourneyDays() {
    const userId = SharedService.getUserId() || 100;
    const programId = SharedService.ProgramId;

    this.commonService.GetGuidedJourneyDays(this.journeyId, programId, userId).subscribe((res: any) => {
      if (res && Array.isArray(res) && this.totalDays === 0) {
        const days = res.map(item => parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day)).filter(n => !isNaN(n));
        this.totalDays = days.length > 0 ? Math.max(...days) : 0;
      }
    });
  }

  getImgUrl(url) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }

  goBack() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
  }

  goToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
  }

  beginJourney() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/days`], { queryParams: { journeyId: this.journeyId, day: 1 } });
  }

  navigateToDay(day) {
    if (day === 0) return;
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/days`], { queryParams: { journeyId: this.journeyId, day: day } });
  }

  getDaysArray() {
    return Array.from({ length: this.totalDays }, (_, i) => i + 1);
  }
}
