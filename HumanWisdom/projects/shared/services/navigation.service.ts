import { HostListener, Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from './shared.service';
import { filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  public backClicked: boolean = false;
  private lastSource: string | null = null;
  private isFirstNavigation = true;
  private hasInjectedFindAnswersHistory = false;
  private hasInjectedEventsHistory = false;
  private readonly FIND_ANSWERS_REGEX = /\/find-answers\/(?:[\w-]+\/)?[\w-]+-a\d+(-at)?$/;

  constructor(private router: Router, private location: Location) {
    this.lastSource = localStorage.getItem('lastNavSource');
    this.setupFirstNavigationListener();
  }
  private setupFirstNavigationListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      take(1)
    ).subscribe(() => {
      this.isFirstNavigation = false;
    });
  }

  addToHistory(url: string, source: string | null = null) {
    const navigation = this.router.getCurrentNavigation();
    const newSource = source || navigation?.extras?.state?.source;

    if (newSource) {
      this.lastSource = newSource;
      localStorage.setItem('lastNavSource', this.lastSource);
    } else {
      // If no source in current navigation, check if we should keep the previous one
      // (e.g., when moving between module TOC and sessions which are not in history)
      const urls = url.split('/');
      const urltoCheck = urls[urls.length - 1];
      const isSession = !isNaN(Number(urltoCheck[urltoCheck.length - 1]));
      
      if (!isSession) {
        this.lastSource = null;
        localStorage.removeItem('lastNavSource');
      }
    }

    if (url.includes('/onboarding/add-to-cart') || this.dontPushToHistory(url)) {
      return;
    }

    const urls = url.split('/');
    let urltoCheck: any;
    urltoCheck = urls[urls.length - 1];
    
    // Handle URLs with query parameters (like event?eid=123)
    if (urltoCheck && urltoCheck.includes('?')) {
      urltoCheck = urltoCheck.split('?')[0];
    }
    
    // Special handling for event pages - always add to history
    const isEventPage = url.includes('/events/event');
    
    if(!this.backClicked) {
      if (urltoCheck) {
        let isNan = isNaN(Number(urltoCheck[urltoCheck.length - 1]));
        if (isNan || this.endsWith001ForModule(urltoCheck) || this.isExceptionUrl(urltoCheck,url) || SharedService.isModuleEnd || isEventPage) {
          if (this.history.length > 0) {
            const lastUrl = this.history[this.history.length - 1];
            if (lastUrl === url) {
              this.backClicked = false;
              return;
            }

            // Check if we are moving between a module root and its first session (sXXXX01)
            // Example: /teenagers/stress and /teenagers/stress/s125001 are identical pages
            const currentSegments = url.split('/');
            const lastSegments = lastUrl.split('/');

            const isDuplicateToc = (
              // Current is /path/module/sXXXX01 and Last is /path/module
              (currentSegments.length === lastSegments.length + 1 &&
               this.endsWith001ForModule(urltoCheck) &&
               url.startsWith(lastUrl)) ||
              // Current is /path/module and Last is /path/module/sXXXX01
              (lastSegments.length === currentSegments.length + 1 &&
               this.endsWith001ForModule(lastSegments[lastSegments.length - 1]) &&
               lastUrl.startsWith(url))
            );

            if (isDuplicateToc) {
              this.backClicked = false;
              return;
            }

            this.history.push(url);
          } else {
            this.history.push(url);
          }
        }
      }
    }

    this.backClicked = false;
    SharedService.isModuleEnd = false;

    // Handle direct navigation to Find Answers pages
    this.handleFindAnswersDirectNavigation(url);
    this.handleEventsDirectNavigation(url);
  }

  private handleEventsDirectNavigation(url: string): void {
    if (!url.includes('/events/event') && !url.includes('/curated/youtubelink')) {
      return;
    }

    const isDirectEntry = this.isDirectEntryNavigation();
    
    if (isDirectEntry && !this.hasInjectedEventsHistory) {
      this.injectEventsHistory(url);
      this.hasInjectedEventsHistory = true;
    }
  }

  private injectEventsHistory(currentUrl: string): void {
    const cleanUrl = currentUrl.split('?')[0];
    const segments = cleanUrl.split('/');
    if (segments.length < 2) return;
    
    const baseUrl = `/${segments[1]}`; // /adults or /teenagers
    const searchUrl = `${baseUrl}/search`;
    const eventsUrl = `${baseUrl}/events`;
    
    try {
      this.location.replaceState(searchUrl);
      this.location.go(eventsUrl);
      this.location.go(currentUrl);

      this.history.push(searchUrl);
      this.history.push(eventsUrl);
      this.history.push(currentUrl);

      console.log('[NavigationService] Injected Events history:', {
        stack: [searchUrl, eventsUrl, currentUrl]
      });
    } catch (error) {
      console.error('[NavigationService] Error injecting Events history:', error);
    }
  }
  private handleFindAnswersDirectNavigation(url: string): void {
    // Only process if it's a Find Answers answer page
    if (!this.isFindAnswersAnswerPage(url)) {
      return;
    }

    // Check if this is a direct entry (no Angular navigation history within app)
    const isDirectEntry = this.isDirectEntryNavigation();
    
    if (isDirectEntry && !this.hasInjectedFindAnswersHistory) {
      this.injectFindAnswersHistory(url);
      this.hasInjectedFindAnswersHistory = true;
    }
  }
  private isFindAnswersAnswerPage(url: string): boolean {
    const cleanUrl = url.split('?')[0];
    return this.FIND_ANSWERS_REGEX.test(cleanUrl);
  }

  private isDirectEntryNavigation(): boolean {
    const navigation = this.router.getCurrentNavigation();
    
    // If trigger is imperative, it's programmatic navigation (not direct entry)
    if (navigation?.trigger === 'imperative') {
      return false;
    }

    // Check for Angular navigation state in history
    const historyState = window.history.state;
    const hasAngularState = historyState && 
      (historyState.navigationId || historyState.ɵrouterPageId);

    // If no Angular state in history, likely a direct entry
    if (!hasAngularState && this.isFirstNavigation) {
      return true;
    }

    // If internal history is empty and this is first navigation, it's direct entry
    if (this.history.length === 0 && this.isFirstNavigation) {
      return true;
    }

    return false;
  }
  private injectFindAnswersHistory(currentUrl: string): void {
    const cleanUrl = currentUrl.split('?')[0];
    const segments = cleanUrl.split('/');
    const lastSegment = segments[segments.length - 1];
    
    // Extract category (e.g., "why-do-i" from "why-do-i-a12")
    const match = lastSegment.match(/^([\w-]+)-a\d+/);
    if (!match) return;
    
    const category = match[1];
    const baseUrl = `/${segments[1]}`; // /adults or /teenagers
    const findAnswersUrl = `${baseUrl}/find-answers`;
    const categoryUrl = `${findAnswersUrl}/${category}`;
    
    try {
      // Use replaceState and go to create proper history stack
      // This ensures back button goes: current → category → find-answers
      this.location.replaceState(findAnswersUrl);
      this.location.go(categoryUrl);
      this.location.go(currentUrl);

      // Add these to internal history tracking
      this.history.push(findAnswersUrl);
      this.history.push(categoryUrl);
      this.history.push(currentUrl);

      console.log('[NavigationService] Injected Find Answers history:', {
        stack: [findAnswersUrl, categoryUrl, currentUrl]
      });
    } catch (error) {
      console.error('[NavigationService] Error injecting Find Answers history:', error);
    }
  }

  /**
   * Replace the last history entry with a new URL
   * Used when clearing fragments from the URL bar to keep internal history in sync
   */
  replaceLastHistory(url: string) {
    if (this.history.length > 0) {
      console.log('Replacing last history entry from:', this.history[this.history.length - 1], 'to:', url);
      this.history[this.history.length - 1] = url;
    }
  }


   dontPushToHistory(url: string) {
    if(url.includes('wisdom-survey') || url.includes('wisdom-score') || url.includes('wellness-survey')) {
      return true;
    }
   }


   endsWith001ForModule(url: string): boolean {
    // Regular expression to match URLs ending with "001"
    const regex = /001$/;

    // Test if the URL matches the regular expression
    return regex.test(url);
}


 isExceptionUrl(urltoCheck,url) {
  const exceptions = [
      'guidedquestions', 'why-do-i', 'how-can-i',
      's29000', 's44001', 's486', 's232',
      's54001', 's92001', 'view-stories', 's42000',
     's162p0','s51000','s39000','s47000', 'mp4','s42000','s39000',
     's72002','s72001','s72003','s72004','s72005','s72006','s72007',
     '/curated/youtubelink/','why-do-i','how-can-i','blog-article', 'micro-learning',
  ];

  const wholeUrlCheckKeywords = [
     'mp3','coach/profile/','coach/contact/','videopage','mp4','blog-article','curated/youtubelink','forum-thread','profile','micro-learning','daily-practise','daily-checkin','wisdom-shorts','wisdom-stories','wisdom-exercise','audio-meditation'
  ]
  let isValid = false;
  for(const item of wholeUrlCheckKeywords){
     if(url.includes(item)){
      isValid = true;
     }
  }

  return exceptions.some(exception => urltoCheck.includes(exception)) || urltoCheck == 's0' || isValid ;
}


  getBackLink(): string | null {
    if (this.history.length > 0) {
      return this.history[this.history.length - 1];
    }
    return  SharedService.getDashboardUrls();
  }
  
  getHistoryLength(): number {
    return this.history.length;
  }
  
  getLastUrlVisited(): string | null {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }
    return null;
  }


  navigateToBackLink() {
    const fromMicroLearningEnd = localStorage.getItem('fromMicroLearningEnd');
    const microLearningEndUrl = localStorage.getItem('microLearningEndUrl');
    let returnUrl = microLearningEndUrl;
    const m_learningId = localStorage.getItem('m_learningId');
    let prefix = SharedService.getprogramName();
    if (prefix === 'youngadults') prefix = 'teenagers';

    if (fromMicroLearningEnd === 'true' && (returnUrl || m_learningId)) {
      if (!returnUrl && m_learningId) {
        returnUrl = `/${prefix}/micro-learning/inner/${m_learningId}?isEnd=true`;
      }

      if (returnUrl && returnUrl.includes('youngadults')) {
        returnUrl = returnUrl.replace('youngadults', 'teenagers');
      }

      localStorage.removeItem('microLearningEndUrl');
      
      if (returnUrl && returnUrl.includes('micro-learning/inner')) {
        if (!returnUrl.includes('?') && !returnUrl.includes('%3F')) {
          returnUrl += '?isEnd=true';
        } else if (!returnUrl.includes('isEnd=true') && !returnUrl.includes('isEnd%3Dtrue')) {
          returnUrl += (returnUrl.includes('?') ? '&' : '?') + 'isEnd=true';
        }
      } else {
        localStorage.removeItem('fromMicroLearningEnd');
      }
      this.history.pop();
      this.backClicked = true;
      return returnUrl;
    }

    const index = this.history.lastIndexOf(this.router.url);
    if (index !== -1) {
      this.history.splice(index + 1);
    }

    const url = this.goBack();
    
    // Prevent loops: if the returned URL is the same as current or contains start-your-free-trial, don't use it
    if (url != null && (url === this.router.url || url.includes('start-your-free-trial'))) {
      // Reset context and fall through to fallback logic
      this.lastSource = null;
      localStorage.removeItem('lastNavSource');
    } else if (url != null) {
       // Reset context if we derived a valid URL from history
       this.lastSource = null;
       localStorage.removeItem('lastNavSource');
       return url;
    }

    // Fallback logic starts here
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/');
    const lastSeg = segments[segments.length - 1];

    // Explicit Context Fallbacks (Highest Priority on Empty History)
    // 5. Blogs: Blog article -> Blog listing -> Previous page
    if (currentUrl.includes('/blog-article')) {
      console.log("Fallback: Blog article -> Blog listing");
      return `/${prefix}/blogs`;
    }
    if (currentUrl.includes('/blogs')) {
      console.log("Fallback: Blog listing -> Search");
      return `/${prefix}/search`;
    }

    // 6. Events: Event inner page -> Events listing -> Search
    const hasEventsSeg = segments.some(s => s.toLowerCase() === 'events');
    const hasEventSeg = segments.some(s => {
      const l = s.toLowerCase();
      return l === 'event' || l.startsWith('event?') || l === 'e01' || l.startsWith('e01?');
    });

    if (hasEventsSeg && hasEventSeg) {
      console.log("Fallback: Event inner -> Events listing");
      return `/${prefix}/events`;
    }

    if (currentUrl.includes('/curated/youtubelink')) {
      console.log("Fallback: Curated Youtube Link -> Events listing");
      return `/${prefix}/events`;
    }

    if (hasEventsSeg || segments.some(s => s.toLowerCase() === 'events-index')) {
      console.log("Fallback: Events listing -> Search");
      return `/${prefix}/search`;
    }

    // 7. Feel Better Now: Inner -> Index -> Search
    if (currentUrl.includes('/feel-better-now/')) {
      console.log("Fallback: Feel Better Now Inner -> Index");
      return `/${prefix}/feel-better-now`;
    }
    if (currentUrl.includes('/feel-better-now')) {
      console.log("Fallback: Feel Better Now Index -> Search");
      return `/${prefix}/search`;
    }

    // 8. Coach: Inner -> Index -> Search
    if (currentUrl.includes('/coach/')) {
      console.log("Fallback: Coach Inner -> Listing");
      return `/${prefix}/coach`;
    }
    if (currentUrl.includes('/coach')) {
      console.log("Fallback: Coach Listing -> Search");
      return `/${prefix}/search`;
    }
    // 9. Wisdom Stories: Inner -> Listing -> Search
    if (currentUrl.includes('/wisdom-stories/')) {
      console.log("Fallback: Wisdom Stories Inner -> Listing");
      return `/${prefix}/wisdom-stories`;
    }
    if (currentUrl.includes('/wisdom-stories')) {
      console.log("Fallback: Wisdom Stories Listing -> Search");
      return `/${prefix}/search`;
    }

    // 10. Wellness Survey: Survey -> Intro -> Search
    if (currentUrl.includes('/wellness-survey')) {
      console.log("Fallback: Wellness Survey -> Intro");
      return `/${prefix}/wisdom-survey`;
    }
    if (currentUrl.includes('/wisdom-survey')) {
      console.log("Fallback: Wellness Survey Intro -> Search");
      return `/${prefix}/search`;
    }

    // 11. Audio/Guided Meditation: Inner -> Listing -> Search
    if (currentUrl.includes('/audio-meditation/audiopage')) {
      console.log("Fallback: Audio Meditation Inner -> Listing");
      return `/${prefix}/audio-meditation`;
    }
    if (currentUrl.includes('/guided-meditation/audiopage')) {
      console.log("Fallback: Guided Meditation Inner -> Listing");
      return `/${prefix}/guided-meditation`;
    }
    if (currentUrl.includes('/audio-meditation') || currentUrl.includes('/guided-meditation')) {
      console.log("Fallback: Meditation Listing -> Search");
      return `/${prefix}/search`;
    }

    // 12. Wisdom Shorts: Inner -> Listing -> Search
    if (currentUrl.includes('/wisdom-shorts/')) {
      console.log("Fallback: Wisdom Shorts Inner -> Listing");
      return `/${prefix}/wisdom-shorts`;
    }
    if (currentUrl.includes('/wisdom-shorts')) {
      console.log("Fallback: Wisdom Shorts Listing -> Search");
      return `/${prefix}/search`;
    }

    // 13. Soundscapes: Inner -> Listing -> Search
    const hasSoundscapes = segments.some(s => s.toLowerCase() === 'soundscapes' || s.toLowerCase() === 'soundcapes');
    if (segments.includes('audiopage') && hasSoundscapes) {
      console.log("Fallback: Soundscapes Inner -> Listing");
      return `/${prefix}/soundscapes`;
    }
    if (hasSoundscapes) {
      console.log("Fallback: Soundscapes Listing -> Search");
      return `/${prefix}/search`;
    }

    // 15. Podcast: Inner -> Listing -> Search
    const hasPodcast = segments.some(s => s.toLowerCase() === 'podcast');
    if (segments.includes('audiopage') && hasPodcast) {
      console.log("Fallback: Podcast Inner -> Listing");
      return `/${prefix}/podcast`;
    }
    if (hasPodcast) {
      console.log("Fallback: Podcast Listing -> Search");
      return `/${prefix}/search`;
    }

    // 14. Microlearning: Inner/End -> Listing -> Search
    if (currentUrl.includes('/micro-learning/inner') || currentUrl.includes('/micro-learning/end')) {
      console.log("Fallback: ML Inner/End -> Listing");
      return `/${prefix}/micro-learning`;
    }
    if (currentUrl.includes('/micro-learning')) {
      console.log("Fallback: ML Listing -> Search");
      return `/${prefix}/search`;
    }

    // 16. Journal: Inner -> Listing -> Search
    if (currentUrl.includes('/journal/') || currentUrl.includes('/guidedquestions')) {
      console.log("Fallback: Journal Inner -> Let component handle");
      return null;
    }
    if (currentUrl.includes('/journal')) {
      console.log("Fallback: Journal Listing -> Search");
      return `/${prefix}/search`;
    }


    // Context-driven navigation priority fallback for empty history
    if (this.lastSource === 'pathway' || this.lastSource === 'search' || this.lastSource === 'video') {
      const sourceIsPathway = this.lastSource === 'pathway';
      const sourceIsVideo = this.lastSource === 'video';
      const navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
      
      this.lastSource = null; // Reset after usage check
      localStorage.removeItem('lastNavSource');

      if (sourceIsPathway && navFrom && navFrom.includes('pathway')) {
        this.backClicked = true;
        return navFrom;
      }
      
      if (sourceIsVideo && navFrom && navFrom != null && navFrom != 'null' && navFrom != this.router.url && !navFrom.includes('start-your-free-trial')) {
        this.backClicked = true;
        return navFrom;
      }
      
      return `/${prefix}/search`;
    }


    // 2. Pathways: Pathway -> Search
    if (currentUrl.includes('/pathway/')) {
      console.log("Fallback: Pathway -> Search");
      return `/${prefix}/search`;
    }

    // 3. Modules: Session -> Index (TOC) -> Pathway/Search
    // Sessions usually look like 's123001' or 's123p1'
    const isSessionRegex = /^s[0-9]+/;
    const isSession = isSessionRegex.test(lastSeg);
    
    if (isSession && segments.length > 2) {
      console.log("Fallback: Session -> Index");
      return segments.slice(0, -1).join('/');
    }

    if (currentUrl.includes('/find-answers/')) {
      const lastSegment = segments[segments.length - 1];
      // Check if it's an answer page (ends with -a<number> or -a<number>-at)
      const isAnswerPage = /-a\d+(-at)?$/.test(lastSegment);
      
      if (isAnswerPage) {
        const categoryMatch = lastSegment.match(/^([\w-]+)-a\d+/);
        if (categoryMatch) {
          const category = categoryMatch[1];
          console.log(`Fallback: Find Answers Answer Page -> Category (${category})`);
          return `/${prefix}/find-answers/${category}`;
        }
      } else if (lastSegment === 'why-do-i' || lastSegment === 'how-can-i') {
        // If on category page, go to search (matching adult behavior)
        console.log("Fallback: Find Answers Category -> Search");
        return `/${prefix}/search`;
      }
    }

    // 9. Module TOC / Index -> Search (If no pathway context was found)
    if (segments.length >= 3 && (segments[1] === 'adults' || segments[1] === 'teenagers' || segments[1] === 'youngadults')) {
       const topLevelPages = [
         'adult-dashboard', 'dashboard', 'home', 'search', 'journal', 
         'profile', 'forum', 'notification', 'teenager-dashboard', 
         'explore', 'coach', 'find-answers', 'feel-better-now'
       ];
       if (!topLevelPages.includes(segments[2])) {
          console.log("Fallback: Module TOC -> Search");
          return `/${prefix}/search`;
       }
    }

    // 10. Previous Session / External Context (Last Resort before Dashboard)
    const navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
    if (navFrom && navFrom != null && navFrom != 'null' && navFrom != this.router.url && !navFrom.includes('start-your-free-trial')) {
      console.log("Fallback: NavigatedFrom -> " + navFrom);
      return navFrom;
    }

    console.log("Fallback: Dashboard");
    return SharedService.getDashboardUrls();
  }

  navigateToSkippedBackLink(){
    this.history.splice(this.history.indexOf(this.router.url)+1)
    const url = this.goBack();
    if (url != null) {
      return url;
    }
    return SharedService.getDashboardUrls();
  }

  public goBack() {
    let prevPath=null;
    if (this.history.length > 0) {
        // Pop the topmost path from the stack
       this.history.pop();
        this.backClicked = true;
        // Perform routing logic to the popped path
        prevPath = this.history[this.history.length - 1];


    } else {
        console.log("Cannot go back. History is empty.");
    }

    return prevPath ;
}
}
