import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  public backClicked: boolean = false;
  private lastSource: string | null = null;

  constructor(private router: Router) {
    this.lastSource = localStorage.getItem('lastNavSource');
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

    if (url.includes('/onboarding/add-to-cart')) {
      return;
    }
    const urls = url.split('/');
    let urltoCheck: any;
    urltoCheck = urls[urls.length - 1];
    if(!this.backClicked) {
      if (urltoCheck) {
        let isNan = isNaN(Number(urltoCheck[urltoCheck.length - 1]));
        if (isNan || this.endsWith001ForModule(urltoCheck) || this.isExceptionUrl(urltoCheck,url) || SharedService.isModuleEnd) {
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
    if(url.includes('wisdom-survey') || url.includes('wisdom-score')) {
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
     's162p0','s51000','s39000','s47000','s324','s47000', 'mp4','s42000','s39000',
     's72002','s72001','s72003','s72004','s72005','s72006','s72007','event?eid',
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

    if (fromMicroLearningEnd === 'true' && (returnUrl || m_learningId)) {
      if (!returnUrl && m_learningId) {
        const prefix = SharedService.getprogramName();
        returnUrl = `/${prefix}/micro-learning/inner/${m_learningId}?isEnd=true`;
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
      
      const prefix = SharedService.getprogramName();
      return `/${prefix}/search`;
    }


    // Fallback if history is empty
    let navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
    if (navFrom && navFrom != null && navFrom != 'null' && navFrom != this.router.url && !navFrom.includes('start-your-free-trial')) {
      return navFrom;
    }

    // Default Fallback Rules (when no history or valid NavigatedFrom exists)
    const prefix = SharedService.getprogramName();
    const currentUrl = this.router.url;

    // 1. Microlearning: Inner -> Listing -> Search
    if (currentUrl.includes('/micro-learning/inner')) {
      console.log("Fallback: ML Inner -> Listing");
      return `/${prefix}/micro-learning`;
    }
    if (currentUrl.includes('/micro-learning')) {
      console.log("Fallback: ML Listing -> Search");
      return `/${prefix}/search`;
    }

    // 2. Pathways: Pathway -> Search
    if (currentUrl.includes('/pathway/')) {
      console.log("Fallback: Pathway -> Search");
      return `/${prefix}/search`;
    }

    // 3. Modules: Session -> Index (TOC) -> Pathway/Search
    const segments = currentUrl.split('/');
    const lastSeg = segments[segments.length - 1];
    
    // Sessions usually look like 's123001' or 's123p1'
    const isSessionRegex = /^s[0-9]+/;
    const isSession = isSessionRegex.test(lastSeg);
    
    if (isSession && segments.length > 2) {
      console.log("Fallback: Session -> Index");
      return segments.slice(0, -1).join('/');
    }

    // 4. Module TOC / Index -> Search (If no pathway context was found)
    if (segments.length >= 2 && (segments[0] === 'adults' || segments[0] === 'teenagers' || segments[0] === 'youngadults')) {
       const topLevelPages = ['adult-dashboard', 'dashboard', 'home', 'search', 'journal', 'profile', 'forum', 'notification', 'teenager-dashboard'];
       if (!topLevelPages.includes(segments[1])) {
          console.log("Fallback: Module TOC -> Search");
          return `/${prefix}/search`;
       }
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
