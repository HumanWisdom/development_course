import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  private loadedJourneyId: any = null;
  currentDay: number = 1;
  totalDays: number = 0;
  allDaysData: any[] = [];
  displayExercises: any[] = [];
  isLoading = true;
  journeyTitle: string = '';
  isSubscriber = false;
  isLoggedIn = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  
  isAnimating = false;
  private touchStartX = 0;
  private touchStartY = 0;
  private touchCurrentX = 0;
  isDragging = false;
  dragOffset = 0;
  private containerWidth = 0;
  private isHorizontalSwipe = false;
  enableAlert: boolean = false;
  content: string = '';
  alertTitle: string = '';
  alertContent: string = '';
  alertOkText: string = 'Ok';
  isNavigatingOut: boolean = false;
  showTranscript: boolean = false;
  transcriptHtml: SafeHtml = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
    private commonService: CommonService,
    private navigationService: NavigationService
  ) {
    this.isAdults = SharedService.ProgramId == 9;
    this.isSubscriber = SharedService.isSubscriber();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const newJourneyId = params['journeyId'];
      const dayParam = params['day'];
      
      let dayChanged = false;
      if (dayParam !== undefined && dayParam !== null) {
        const newDay = parseInt(dayParam);
        if (this.currentDay !== newDay) {
          this.currentDay = newDay;
          dayChanged = true;
        }
      } else {
        if (this.currentDay !== 0) {
          this.currentDay = 0;
          dayChanged = true;
        }
      }

      if (newJourneyId && newJourneyId !== this.loadedJourneyId) {
        this.journeyId = newJourneyId;
        this.loadedJourneyId = newJourneyId;
        this.getJourneyDetails();
        this.getGuidedJourneyDays();
      } else if (dayChanged) {
        this.updateDisplayData();
      }
    });

    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isLoggedIn = true;
    }
  }

  handleTouchStart(event: any) {
    const target = event.target as HTMLElement;
    // Don't drag when touching buttons, links, etc.
    if (target.closest('a') || target.closest('button')) {
      this.isDragging = false;
      return;
    }

    // Don't start drag when touching journal textarea or any input
    if (target.closest('textarea') || target.closest('input') || target.closest('[contenteditable="true"]')) {
      this.isDragging = false;
      return;
    }

    if (this.isAnimating) return;
    this.touchStartX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    this.touchStartY = event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true;
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;

    const container = document.querySelector('.guided_journey_days_wrapper');
    if (container) {
      this.containerWidth = container.clientWidth;
    }
  }

  handleTouchMove(event: any) {
    const target = event.target as HTMLElement;
    if (target.closest('textarea') || target.closest('input') || target.closest('[contenteditable="true"]')) {
      return;
    }
    if (!this.isDragging || this.isAnimating) return;
    this.touchCurrentX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    const deltaY = (event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY) - this.touchStartY;

    if (!this.isHorizontalSwipe) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        this.isHorizontalSwipe = true;
      } else if (Math.abs(deltaY) > 10) {
        return;
      }
    }

    if (this.isHorizontalSwipe) {
      this.dragOffset = deltaX;
      if (event.cancelable) event.preventDefault();
    }
  }

  handleTouchEnd(event: any) {
    if (!this.isDragging) return;
    const threshold = this.containerWidth * 0.2;
    if (this.isHorizontalSwipe) {
      if (this.dragOffset < -threshold && this.currentDay < this.totalDays) {
        this.navigateToDay(this.currentDay + 1);
      } else if (this.dragOffset < -threshold && this.currentDay === this.totalDays) {
        this.navigateToEnd();
      } else if (this.dragOffset > threshold && this.currentDay > 0) {
        this.navigateToDay(this.currentDay - 1);
      } else if (this.dragOffset > threshold && this.currentDay === 0) {
        // Already at intro, maybe do nothing or go to listing
      }
    }
    this.isDragging = false;
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;
  }

  navigateToEnd() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/end`], {
      queryParams: { journeyId: this.journeyId, title: this.journeyTitle }
    });
  }

  journeyDetails: any;

  getJourneyDetails() {
    let userid = SharedService.getUserId() || 100;
    let programId = SharedService.ProgramId;
    this.commonService.GetGuidedJourneys(programId, userid).subscribe((res: any) => {
      if (res) {
        const data = Array.isArray(res) ? res : (res.Data || res.data || res.DataList || res.GuidedJourneys || res.Guided_Journeys || res.list || []);
        const journey = data.find(item => (item.GuidedJourneyID || item.JourneyID || item.journeyID || item.Id || item.id || item.RowID) == this.journeyId);
        
        if (journey) {
          this.journeyTitle = journey.Title || journey.title || journey.JourneyName || journey.Name;
          const journeyId = journey.GuidedJourneyID || journey.JourneyID || journey.journeyID || journey.Id || journey.id || journey.RowID;
          this.journeyDetails = {
            id: journeyId,
            title: journey.Title || journey.title || journey.JourneyName || journey.Name,
            subtitle: journey.Subtitle || journey.subtitle,
            description: (journey.Description || journey.description || '').replace(/\s*\(\d+\s*days?\)\s*$/i, '').trim(),
            imgUrl: this.getImgUrl(journey.ImageUrl || journey.ImgUrl || journey.imgUrl || journey.imageUrl),
            audioUrl: journey.AudioUrl || journey.audioUrl || journey.Audio || journey.audio
                      || `https://d1tenzemoxuh75.cloudfront.net/guided_journeys/intro/${journeyId}.mp3`,
          };
          if (journey.Days) {
            this.totalDays = parseInt(journey.Days);
          }
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
          const { mainTitle, subTitle, sessionLabel, sessionName } = this.parseTitle(rawTitle);
          return {
            ...item,
            Type: item.type ? parseInt(item.type) : 1,
            Title: rawTitle,
            DisplayTitle: mainTitle,
            DisplaySubtitle: subTitle,
            sessionLabel: sessionLabel,
            sessionName: sessionName,
            QuestionCnt: item.QuestionCnt,
            imgPath: this.getImgUrl(item.imgPath),
            OriginalResponse: item.Response || ''
          };
        });
        this.updateDisplayData();
        
        // Also check initial read status to mark visited
        // Removed markAsVisited loop as isVisited now checks allDaysData directly
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
      
      let sessionLabel = '';
      let sessionName = '';
      
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
        } else {
          sessionLabel = sessionLabel.charAt(0).toUpperCase() + sessionLabel.slice(1).toLowerCase();
        }
      }
      
      if (sessionName) {
        sessionName = sessionName.charAt(0).toUpperCase() + sessionName.slice(1).toLowerCase();
      }
      
      let displaySub = subTitle;
      if (displaySub.includes(',')) {
        displaySub = displaySub.replace(',', ' •');
      }
      return { mainTitle, subTitle: displaySub, sessionLabel, sessionName };
    }
    return { mainTitle: title, subTitle: '', sessionLabel: '', sessionName: '' };
  }

  isSection8(exercise: any): boolean {
    if (!exercise) return false;
    const secId = exercise.SectionID || exercise.SectionId || exercise.sectionID || exercise.sectionId;
    const isSec8 = secId == 8 || secId == '8';
    
    const sectionStr = (exercise.Section || '').toUpperCase();
    const isModuleSession = sectionStr.includes('MODULE') || sectionStr.includes('SESSION') || 
                            (exercise.DisplaySubtitle && (exercise.DisplaySubtitle.toUpperCase().includes('SESSION') || exercise.DisplaySubtitle.toUpperCase().includes('MODULE')));
                            
    return isSec8 && isModuleSession && !!exercise.sessionLabel && !!exercise.sessionName;
  }

  isGuidedJournaling(exercise: any): boolean {
    if (!exercise) return false;
    const isGJ = (exercise.Section || '').toUpperCase() === 'GUIDED JOURNALING' || 
                 (exercise.SectionID || exercise.SectionId || exercise.sectionID || exercise.sectionId) == 6;
    return isGJ && !!exercise.QuestionCnt;
  }

  autoResize(event: any) {
    const textarea = event.target;
    textarea.style.height = '50px';
    const newHeight = Math.min(Math.max(textarea.scrollHeight, 50), 80);
    textarea.style.height = newHeight + 'px';
    if (textarea.scrollHeight > 80) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  }

  submitJournal(exercise: any) {
    if (!this.isSubscriber && (exercise.isFree === '0' || exercise.isFree === 0)) {
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

    const reflectionId = exercise.ReflectionId || exercise.FeatureID || exercise.QueId || exercise.QuestId || exercise.GuidedJourneyDayID;
    
    const data = {
      SubscriberID: userId,
      ReflectionId: reflectionId ? Number(reflectionId) : 0,
      Resp: exercise.Response,
      UserReflectionId: exercise.UserReflectionID ? Number(exercise.UserReflectionID) : 0
    };

    const isUpdate = exercise.UserReflectionID && exercise.UserReflectionID !== '0';

    this.commonService.addReflection(data).subscribe(res => {
      if (res) {
        // Handle different possible response keys for the ID
        const responseId = res.ResponseID || res.UserReflectionId || res.UserReflectionID || res;
        if (responseId && typeof responseId !== 'object') {
          exercise.UserReflectionID = responseId.toString();
        }
        
        // Update OriginalResponse to the current Response so the button hides
        exercise.OriginalResponse = exercise.Response;

        if (isUpdate) {
          this.alertTitle = 'Successfully saved';
          this.alertContent = '';
          this.alertOkText = 'Continue';
        } else {
          this.alertTitle = '';
          this.alertContent = 'Successfully added to journal';
          this.alertOkText = 'Ok';
        }
        this.enableAlert = true;
      }
    });
  }

  getAlertcloseEvent() {
    this.enableAlert = false;
    this.alertTitle = '';
    this.alertContent = '';
    this.alertOkText = 'Ok';
  }

  loadTranscript() {
    if (this.transcriptHtml) {
      this.showTranscript = true;
      return;
    }
    this.showTranscript = true;
    const data = {
      S3Directory: 'guided_journeys/intro/transcripts/',
      FileName: `${this.journeyId}.md`
    };
    this.commonService.GetAudioTranscript(data).subscribe({
      next: (res: any) => {
        const raw = this.normalizeTranscriptResponse(res);
        this.transcriptHtml = raw && raw.length > 5
          ? this.parseMarkdown(raw)
          : this.sanitizer.bypassSecurityTrustHtml('<p>Transcript not available.</p>');
      },
      error: () => {
        this.transcriptHtml = this.sanitizer.bypassSecurityTrustHtml('<p>Transcript not available.</p>');
      }
    });
  }

  normalizeTranscriptResponse(res: any): string {
    if (res == null) return '';
    if (typeof res === 'string') return res;
    if (typeof res === 'object') {
      return res.Content || res.content || res.Transcript || res.transcript ||
             res.Text || res.text || res.Data || res.data || '';
    }
    return String(res);
  }

  closeTranscript() {
    this.showTranscript = false;
  }

  parseMarkdown(text: string): SafeHtml {
    if (!text) return '';

    let lines = text.split('\n');
    let result = '';
    let inList = false;

    for (let line of lines) {
      let trimmed = line.trim();

      if (trimmed === '---') {
        if (inList) { result += '</ul>'; inList = false; }
        const hrColor = this.isAdults ? '#000000' : '#ffffff';
        result += `<hr style="border: none; margin: 0; border-top: 1px solid ${hrColor};"/>`;
        continue;
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) { result += '<ul style="padding-left: 20px;">'; inList = true; }
        result += '<li style="margin-bottom: 5px;">' + trimmed.substring(2) + '</li>';
      } else {
        if (inList) { result += '</ul>'; inList = false; }
        result += trimmed === '' ? '<br/>' : line + '<br/>';
      }
    }
    if (inList) result += '</ul>';

    result = result.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/\*([^*]+?)\*/g, '<em>$1</em>');

    return this.sanitizer.bypassSecurityTrustHtml(result);
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
    
    // Calculate total days as fallback if not already set by journey details
    if (this.totalDays === 0) {
      const days = this.allDaysData.map(item => parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day)).filter(n => !isNaN(n));
      this.totalDays = days.length > 0 ? Math.max(...days) : 0;
    }

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

  goToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys`]);
  }

  isVisited(day: number) {
    if (day === 0) return true; 

    const dayExercises = this.allDaysData.filter(item => {
      const dayNum = parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day);
      return dayNum === day;
    });

    if (dayExercises.length === 0) return false;

    return dayExercises.every(ex => ex.isRead === '1');
  }

  getExercisesForDay(day: number) {
    return this.allDaysData.filter(item => {
      const dayNum = parseInt(item.Days_No || item.DayNo || item.dayNo || item.Day_No || item.day);
      return dayNum === day;
    });
  }

  getTransform() {
    const baseTranslate = -(this.currentDay * 100);
    const dragTranslate = this.containerWidth ? (this.dragOffset / this.containerWidth) * 100 : 0;
    const gapTranslate = -(this.currentDay * 20); // 20px gap for each day
    return `translateX(calc(${baseTranslate + dragTranslate}% + ${gapTranslate}px))`;
  }

  navigateToDay(day: number) {
    if (day < 0) return;
    this.isAnimating = true;
    this.currentDay = day;
    this.updateDisplayData();
    // Update URL without reloading
    const prefix = SharedService.getprogramName();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { day: this.currentDay },
      queryParamsHandling: 'merge'
    });
    this.scrollToActiveDay();
    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
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
      
      // Determine if we need to pass the 't' parameter to bypass ActiveGuard for free content
      const isFree = exercise.isFree === '1' || exercise.isFree === 1;
      const queryParams = isFree ? { t: 1 } : {};
      
      if (targetUrl.includes('~podcasts~')) {
        // Podcast format: ~podcasts~102.mp3/102/T/Why...
        const parts = targetUrl.split('/');
        const path = parts[0];
        const id = parts[1] || '0';
        const enable = parts[2] || 'T';
        const title = parts[3] || 'Podcast';
        const moduleName = 'podcast';
        this.router.navigate([`/${prefix}/audiopage`, path, id, enable, title, moduleName], { queryParams });

      } else if (targetUrl.startsWith('https_~~') || (targetUrl.includes('~') && !targetUrl.startsWith('/'))) {
        // Encoded audio URL format used by AdultsAudioMeditationComponent
        // Route: /{prefix}/guided-meditation/audiopage/:audiolink/:title/:RowId/:type
        const rowId = exercise.GuidedJourneyDayID || '0';
        const title = (exercise.Title || exercise.Section || 'Audio');
        // User specified working pattern: audiopage/:audiolink/:id/:enable/:title
        // Mapping: :audiolink = targetUrl, :title = rowId, :RowId = 'T', :type = title
        let finalUrl = `/${prefix}/guided-meditation/audiopage/${targetUrl}/${rowId}/T/${encodeURIComponent(title)}`;
        if (isFree) {
          finalUrl += (finalUrl.includes('?') ? '&t=1' : '?t=1');
        }
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
        
        if (isFree) {
          finalUrl += (finalUrl.includes('?') ? '&t=1' : '?t=1');
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

    isBreathingExercise(exercise: any): boolean {
    if (!exercise) return false;
    const section = (exercise.Section || '').toUpperCase();
    return section.includes('BREATHING EXERCISE');
  }

  isSoundscape(exercise: any): boolean {
    if (!exercise) return false;
    const section = (exercise.Section || '').toUpperCase();
    return section.includes('SOUNDSCAPE');
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
