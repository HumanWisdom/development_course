import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";
import { NavigationService } from "../../services/navigation.service";

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
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  private touchStartX = 0;
  private touchStartY = 0;
  enableAlert: boolean = false;
  content: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private commonService: CommonService,
    private navigationService: NavigationService
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
      queryParams: { journeyId: this.journeyId, title: this.journeyTitle }
    });
  }

  getJourneyDetails() {
    let userid = SharedService.getUserId() || 100;
    let programId = SharedService.ProgramId;
    this.commonService.GetGuidedJourneys(programId, userid).subscribe((res: any) => {
      if (res) {
        const data = Array.isArray(res) ? res : (res.Data || res.data || res.DataList || res.GuidedJourneys || res.Guided_Journeys || res.list || []);
        const journey = data.find(item => (item.GuidedJourneyID || item.JourneyID || item.journeyID || item.Id || item.id || item.RowID) == this.journeyId);
        
        if (journey) {
          this.journeyTitle = journey.Title || journey.title || journey.JourneyName || journey.Name;
        }
      }
    });
  }

  getGuidedJourneyDays() {
    this.isLoading = true;
    const userId = SharedService.getUserId() || 100;
    const programId = SharedService.ProgramId;

    this.commonService.GetGuidedJourneyDays(this.journeyId, programId, userId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        this.allDaysData = res.map(item => {
          const rawTitle = item.Title || item.Section;
          const { mainTitle, subTitle } = this.parseTitle(rawTitle);
          return {
            ...item,
            Type: item.type ? parseInt(item.type) : 1,
            Title: rawTitle,
            DisplayTitle: mainTitle,
            DisplaySubtitle: subTitle,
            imgPath: this.getImgUrl(item.imgPath)
          };
        });
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

  parseTitle(title: string) {
    if (title && title.includes('(') && title.includes(')')) {
      const parts = title.split('(');
      const mainTitle = parts[0].trim();
      let subTitle = parts[1].replace(')', '').trim();
      // Replace comma with bullet point as seen in Figma
      if (subTitle.includes(',')) {
        subTitle = subTitle.replace(',', ' •');
      }
      return { mainTitle, subTitle };
    }
    return { mainTitle: title, subTitle: '' };
  }



  submitJournal(exercise: any) {
    if (!this.isSubscriber && exercise.isFree === '0') {
      const prefix = SharedService.getprogramName();
      this.router.navigate([`/${prefix}/subscription/start-your-free-trial`]);
      return;
    }

    const userId = SharedService.getUserId();
    if (!userId || userId === 100) {
      const prefix = SharedService.getprogramName();
      this.router.navigate([`/${prefix}/onboarding/login`]);
      return;
    }

    const reflectionId = exercise.QueId || exercise.QuestId || exercise.ReflectionId || exercise.GuidedJourneyDayID;
    
    const data = {
      SubscriberID: userId,
      ReflectionId: reflectionId,
      Resp: exercise.Response
    };

    this.commonService.addReflection(data).subscribe(res => {
      if (res) {
        this.content = 'Successfully added to journal';
        this.enableAlert = true;
      }
    });
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.content = '';
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
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
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
    if (!this.isSubscriber && exercise.isFree === '0') {
      this.showModal = true;
      return;
    }

    this.commonService.clickGuidedJourneyDay(exercise.GuidedJourneyDayID).subscribe();
    
    if (exercise.Url) {
      const urls = exercise.Url.split(',');
      let targetUrl = urls[0].trim(); 
      const prefix = SharedService.getprogramName();
      
      if (targetUrl.includes('~podcasts~')) {
        // Podcast format: ~podcasts~102.mp3/102/T/Why...
        const parts = targetUrl.split('/');
        const path = parts[0];
        const id = parts[1] || '0';
        const enable = parts[2] || 'T';
        const title = parts[3] || 'Podcast';
        const moduleName = 'podcast';
        this.router.navigate([`/${prefix}/audiopage`, path, id, enable, title, moduleName]);

      } else if (targetUrl.startsWith('https_~~') || (targetUrl.includes('~') && !targetUrl.startsWith('/'))) {
        // Encoded audio URL format used by AdultsAudioMeditationComponent
        // Route: /{prefix}/guided-meditation/audiopage/:audiolink/:title/:RowId/:type
        const rowId = exercise.GuidedJourneyDayID || '0';
        const title = (exercise.Title || exercise.Section || 'Audio');
        // User specified working pattern: audiopage/:audiolink/:id/:enable/:title
        // Mapping: :audiolink = targetUrl, :title = rowId, :RowId = 'T', :type = title
        const finalUrl = `/${prefix}/guided-meditation/audiopage/${targetUrl}/${rowId}/T/${encodeURIComponent(title)}`;
        this.router.navigateByUrl(finalUrl);

      } else {
        // Plain relative or absolute path — use navigateByUrl to preserve query params
        let finalUrl = targetUrl;
        
        if (finalUrl.startsWith('http')) {
          window.location.href = finalUrl;
          return;
        }

        if (finalUrl.startsWith('/')) {
          if (!finalUrl.startsWith(`/${prefix}/`)) {
            finalUrl = `/${prefix}${finalUrl}`;
          }
        } else {
          if (!finalUrl.startsWith(`${prefix}/`)) {
            finalUrl = `/${prefix}/${finalUrl}`;
          } else {
            finalUrl = `/${finalUrl}`;
          }
        }
        
        this.router.navigateByUrl(finalUrl);
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

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      const prefix = SharedService.getprogramName();
      this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
    }
  }

  getDaysArray() {
    return Array.from({ length: this.totalDays }, (_, i) => i + 1);
  }
}
