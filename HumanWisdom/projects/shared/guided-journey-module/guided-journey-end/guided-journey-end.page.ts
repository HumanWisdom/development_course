import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";
import { NavigationService } from "../../services/navigation.service";
import { Constant } from "../../services/constant";

@Component({
  selector: 'app-guided-journey-end',
  templateUrl: './guided-journey-end.page.html',
  styleUrls: ['./guided-journey-end.page.scss']
})
export class GuidedJourneyEndPage implements OnInit {
  isAdults = true;
  journeyId: any;
  journeyTitle: string = 'Stress reduction';
  journeySubtitle: string = '';
  moduleList: any[] = [];
  continueExploringList: any[] = [];
  isLoading = true;
  totalDays: number = 0;
  currentDay: number = -1;
  visitedDays: Set<number> = new Set();
  loginResponse: any;
  isSubscriber = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

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
      if (params['subtitle']) {
        this.journeySubtitle = params['subtitle'];
      }
      if (params['title']) {
        this.journeyTitle = params['title'];
      }
      if (this.journeyId) {
        this.getJourneyDetails();
        this.getGuidedJourneyDays();
      }
    });

    SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

    const savedLogin = localStorage.getItem("loginResponse") || sessionStorage.getItem("loginResponse");
    if (savedLogin) {
      this.loginResponse = JSON.parse(savedLogin);
    }

    this.getModuleList();
  }

  survey(): void {
    const prefix = this.isAdults ? '/adults' : '/teenagers';
    this.router.navigate([`${prefix}/wisdom-survey`], { state: { isUseCloseButton: true, source: 'guided-journey' } });
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
          this.journeySubtitle = journey.Subtitle || journey.subtitle || this.journeyTitle;
        }
      }
    });
  }

  getGuidedJourneyDays() {
    const userId = SharedService.getUserId() || 100;
    const programId = SharedService.ProgramId;

    this.commonService.GetGuidedJourneyDays(this.journeyId, programId, userId).subscribe((res: any) => {
      if (res && Array.isArray(res)) {
        const days = res.map(item => parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day)).filter(n => !isNaN(n));
        const validDays = days.filter(d => d !== 100);
        this.totalDays = validDays.length > 0 ? Math.max(...validDays) : 0;
        this.currentDay = this.totalDays + 1; // Mark as after last day
        
        // Filter for Day 100 items (Continue Exploring)
        this.continueExploringList = res.filter(item => {
          const dayStr = String(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day || '');
          return dayStr === '100';
        }).map(item => {
          const rawTitle = item.Title || item.Section;
          const { mainTitle, subTitle, sessionLabel, sessionName, extractedTiming } = this.parseTitle(rawTitle);
          let timing = item.Timing || item.timing || item.Time || item.time || item.duration || item.Duration || '';
          if ((!timing || timing === '0' || timing === '0:00' || timing === '00:00') && extractedTiming) {
            timing = extractedTiming;
          }
          return {
            ...item,
            DisplayTitle: mainTitle,
            DisplaySubtitle: subTitle,
            sessionLabel: sessionLabel,
            sessionName: sessionName,
            Timing: timing,
            imgPath: this.getImgUrl(item.imgPath)
          };
        });

        // Mark all as visited on end screen
        for (let i = 0; i <= this.totalDays; i++) {
          this.visitedDays.add(i);
        }
      }
    });
  }

  getSectionIcon(section: string) {
    if (!section) return null;
    const s = section.toUpperCase();
    if (s.includes('PODCAST') || s.includes('AUDIO') || s.includes('MEDITATION') || s.includes('BREATHING') || s.includes('SOUNDSCAPE')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio_play.svg';
    }
    if (s.includes('VIDEO') || s.includes('SHORT') || s.includes('CONVERSATION') || s.includes('TALK') || s.includes('EVENT')) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg';
    }
    return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg';
  }

  getSectionDisplayName(section: string): string {
    if (!section) return '';
    const s = section.trim().toLowerCase();
    if (s === 'event' || s === 'events' || s.includes('event')) {
      return 'IN-DEPTH CONVERSATIONS';
    }
    return section;
  }

  parseTitle(title: string) {
    if (title && title.includes('(') && title.includes(')')) {
      const parts = title.split('(');
      const mainTitle = parts[0].trim();
      let subTitle = parts[1].replace(')', '').trim();

      let sessionLabel = '';
      let sessionName = '';
      let extractedTiming = '';

      const timingMatch = subTitle.match(/\b(?:\d{1,2}:)?\d{1,2}:\d{2}\b|\b\d+\s*(?:mins?|minutes?|sec|seconds?)\b/i);
      if (timingMatch) {
        extractedTiming = timingMatch[0];
      }

      let separator = '';
      if (subTitle.includes(',')) {
        separator = ',';
      } else if (subTitle.includes('•')) {
        separator = '•';
      } else if (subTitle.includes('-')) {
        separator = '-';
      }

      if (separator) {
        const subParts = subTitle.split(separator);
        sessionLabel = subParts[0].trim();
        sessionName = subParts.slice(1).join(separator).trim();
      } else {
        sessionLabel = subTitle;
      }

      if (sessionLabel) {
        const upper = sessionLabel.toUpperCase();
        if (upper.startsWith('SESSION#') || upper.startsWith('SESSION #')) {
          const num = sessionLabel.replace(/SESSION\s*#\s*/i, '').trim();
          sessionLabel = `Session #${num}`;
        } else if (upper.startsWith('MEDITATION#') || upper.startsWith('MEDITATION #')) {
          const num = sessionLabel.replace(/MEDITATION\s*#\s*/i, '').trim();
          sessionLabel = `Meditation #${num}`;
        } else if (upper.startsWith('EXERCISE#') || upper.startsWith('EXERCISE #')) {
          const num = sessionLabel.replace(/EXERCISE\s*#\s*/i, '').trim();
          sessionLabel = `Exercise #${num}`;
        } else {
          sessionLabel = sessionLabel.charAt(0).toUpperCase() + sessionLabel.slice(1).toLowerCase();
          sessionLabel = sessionLabel.replace(/([a-zA-Z])#/g, '$1 #');
        }
      }

      if (sessionName) {
        sessionName = sessionName.charAt(0).toUpperCase() + sessionName.slice(1).toLowerCase();
      }

      let displaySub = subTitle;
      if (displaySub.includes(',')) {
        displaySub = displaySub.replace(',', ' •');
      }
      return { mainTitle, subTitle: displaySub, sessionLabel, sessionName, extractedTiming };
    }
    return { mainTitle: title, subTitle: '', sessionLabel: '', sessionName: '', extractedTiming: '' };
  }

  isSection8(item: any): boolean {
    if (!item) return false;
    const secId = item.SectionID || item.SectionId || item.sectionID || item.sectionId;
    const isSec8 = secId == 8 || secId == '8';

    const sectionStr = (item.Section || '').toUpperCase();
    const isModuleSession = sectionStr.includes('MODULE') || sectionStr.includes('SESSION') ||
                            (item.DisplaySubtitle && (item.DisplaySubtitle.toUpperCase().includes('SESSION') || item.DisplaySubtitle.toUpperCase().includes('MODULE')));

    return isSec8 && isModuleSession && !!item.sessionLabel && !!item.sessionName;
  }

  onExerciseClick(exercise: any) {
    if (!this.isSubscriber && (exercise.isFree === '0' || exercise.isFree === 0)) {
      this.showModal = true;
      return;
    }

    this.commonService.clickGuidedJourneyDay(exercise.GuidedJourneyDayID).subscribe();
    localStorage.setItem('lastNavSource', 'guided-journey');
    localStorage.setItem('NaviagtedFrom', this.router.url);

    if (exercise.Url) {
      const urls = exercise.Url.split(',');
      let targetUrl = urls[0].trim();
      const prefix = SharedService.getprogramName();
      const isFree = exercise.isFree === '1' || exercise.isFree === 1;
      const queryParams = isFree ? { t: 1 } : {};

      if (targetUrl.includes('~podcasts~')) {
        const parts = targetUrl.split('/');
        const path = parts[0];
        const id = parts[1] || '0';
        const enable = parts[2] || 'T';
        const title = parts[3] || 'Podcast';
        const moduleName = 'podcast';
        this.router.navigate([`/${prefix}/audiopage`, path, id, enable, title, moduleName], { queryParams });

      } else if (targetUrl.startsWith('https_~~') || (targetUrl.includes('~') && !targetUrl.startsWith('/'))) {
        const rowId = exercise.GuidedJourneyDayID || '0';
        const title = (exercise.Title || exercise.Section || 'Audio');
        let finalUrl = `/${prefix}/guided-meditation/audiopage/${targetUrl}/${rowId}/T/${encodeURIComponent(title)}`;
        if (isFree) {
          finalUrl += (finalUrl.includes('?') ? '&t=1' : '?t=1');
        }
        this.router.navigateByUrl(finalUrl);

      } else {
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
        if (isFree) {
          finalUrl += (finalUrl.includes('?') ? '&t=1' : '?t=1');
        }
        this.router.navigateByUrl(finalUrl);
      }
    }
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      const prefix = SharedService.getprogramName();
      this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
    }
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
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/${this.journeyId}`]);
  }

  navigateToDay(day: number) {
    const prefix = SharedService.getprogramName();
    if (day === 0) {
      this.router.navigate([`/${prefix}/guided-journeys/${this.journeyId}`]);
    } else {
      this.router.navigate([`/${prefix}/guided-journeys/${this.journeyId}`], { queryParams: { day: day } });
    }
  }

  getDaysArray() {
    return Array.from({ length: this.totalDays }, (_, i) => i + 1);
  }

  isVisited(day: number) {
    return true; // All visited on end screen
  }

  logEvent(event: string, url: string) {
    console.log(event, url);
  }

  navigateToPathway(url: string) {
    if (url) {
      let finalUrl = url;
      if (!finalUrl.startsWith('/')) {
        finalUrl = '/' + finalUrl;
      }
      this.router.navigateByUrl(finalUrl, { state: { source: 'guided-journey' } });
    }
  }
}

