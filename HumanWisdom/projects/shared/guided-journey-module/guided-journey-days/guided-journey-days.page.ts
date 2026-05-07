import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-guided-journey-days',
  templateUrl: './guided-journey-days.page.html',
  styleUrls: ['./guided-journey-days.page.scss']
})
export class GuidedJourneyDaysPage implements OnInit {
  isAdults = true;
  journeyId: any;
  currentDay: number = 1;
  totalDays: number = 0;
  allDaysData: any[] = [];
  displayExercises: any[] = [];
  isLoading = true;
  journeyTitle: string = '';
  visitedDays: Set<number> = new Set();
  isSubscriber = false;
  private touchStartX = 0;
  private touchStartY = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private commonService: CommonService
  ) {
    this.isAdults = SharedService.ProgramId == 9;
    this.isSubscriber = SharedService.isSubscriber();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.journeyId = params['journeyId'];
      const dayParam = params['day'];
      if (dayParam) {
        this.currentDay = parseInt(dayParam);
        this.markAsVisited(this.currentDay);
      }
      if (this.journeyId) {
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
        // Swipe left -> Next day or End screen
        if (this.currentDay < this.totalDays) {
          this.navigateToDay(this.currentDay + 1);
        } else if (this.currentDay === this.totalDays) {
          // Last day — go to End screen
          this.navigateToEnd();
        }
      } else {
        // Swipe right -> Previous day / Intro
        if (this.currentDay > 1) {
          this.navigateToDay(this.currentDay - 1);
        } else if (this.currentDay === 1) {
          this.navigateToDay(0);
        }
      }
    }
  }

  navigateToEnd() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/end`], {
      queryParams: { journeyId: this.journeyId, title: 'Stress reduction' }
    });
  }

  getGuidedJourneyDays() {
    this.isLoading = true;
    const userId = SharedService.getUserId() || 100;
    const programId = SharedService.ProgramId;

    this.commonService.GetGuidedJourneyDays(this.journeyId, programId, userId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        this.allDaysData = res.map(item => ({
          ...item,
          Type: item.type ? parseInt(item.type) : 1,
          Title: item.Title || item.Section,
          imgPath: this.getImgUrl(item.imgPath)
        }));
        this.updateDisplayData();
        
        // Also check initial read status to mark visited
        this.allDaysData.forEach(item => {
          if (item.isRead === '1') {
            const dayNum = parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day);
            if (!isNaN(dayNum)) {
              this.markAsVisited(dayNum);
            }
          }
        });
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  getImgUrl(url: string) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    
    // Handle comma separated URLs
    if (url.includes(',')) {
      return url.split(',').map(u => this.formatSingleUrl(u)).join(',');
    }
    
    return this.formatSingleUrl(url);
  }

  formatSingleUrl(url: string) {
    url = url.trim();
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }

  updateDisplayData() {
    this.displayExercises = this.allDaysData.filter(item => {
      const dayNum = parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day);
      return dayNum === this.currentDay;
    });
    
    // Calculate total days
    const days = this.allDaysData.map(item => parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day)).filter(n => !isNaN(n));
    this.totalDays = days.length > 0 ? Math.max(...days) : 0;

    // Scroll to active day
    this.scrollToActiveDay();
  }

  scrollToActiveDay() {
    setTimeout(() => {
      const activeEl = document.querySelector('.day_circle.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 100);
  }

  goBack() {
    this.location.back();
  }

  markAsVisited(day: number) {
    this.visitedDays.add(day);
  }

  isVisited(day: number) {
    // If current day is 3, everything before 3 is considered "viewed" as per user request
    // "maan le intro se aagye apn day 1 pe basically intro view hogya h"
    return day < this.currentDay || this.visitedDays.has(day);
  }

  navigateToDay(day: number) {
    if (day === 0) {
      const prefix = SharedService.getprogramName();
      this.router.navigate([`/${prefix}/guided-journeys/intro`], { queryParams: { journeyId: this.journeyId } });
      return;
    }
    this.currentDay = day;
    this.markAsVisited(day);
    this.updateDisplayData();
    // Update URL without reloading
    const prefix = SharedService.getprogramName();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { day: this.currentDay },
      queryParamsHandling: 'merge'
    });
    this.scrollToActiveDay();
  }

  onExerciseClick(exercise: any) {
    this.commonService.clickGuidedJourneyDay(exercise.GuidedJourneyDayID).subscribe();
    
    if (exercise.Url) {
      const urls = exercise.Url.split(',');
      let targetUrl = urls[0].trim(); 
      const prefix = SharedService.getprogramName();
      
      if (targetUrl.includes('~podcasts~')) {
        const parts = targetUrl.split('/');
        // Format example: ~podcasts~102.mp3/102/T/Why...
        const id = parts[1]; 
        this.router.navigate([`/${prefix}/podcast/podcast-details/${id}`]);
      } else if (targetUrl.startsWith('/')) {
        // Ensure program prefix for absolute paths
        if (!targetUrl.startsWith(`/${prefix}/`)) {
          this.router.navigate([`/${prefix}${targetUrl}`]);
        } else {
          this.router.navigate([targetUrl]);
        }
      } else {
        this.router.navigate([targetUrl]);
      }
    }
  }

  getExerciseClass(section: string) {
    switch (section.toUpperCase()) {
      case 'BREATHING EXERCISE': return 'breathing';
      case 'SHORT VIDEO': return 'video';
      case 'AUDIO MEDITATION': return 'audio';
      case 'MICROLEARNING': return 'microlearning';
      default: return 'default';
    }
  }

  getSectionIcon(section: string) {
    if (!section) return null;
    const s = section.toUpperCase();
    
    if (s.includes('MODULE') || s.includes('SESSION')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/pathway.svg';
    }
    
    if (s.includes('PODCAST') || s.includes('AUDIO') || s.includes('MEDITATION') || s.includes('BREATHING') || s.includes('SOUNDSCAPE')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio_play.svg';
    }
    
    if (s.includes('VIDEO') || s.includes('SHORT')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg';
    }
    
    return null;
  }

  getDaysArray() {
    return Array.from({ length: this.totalDays }, (_, i) => i + 1);
  }
}
