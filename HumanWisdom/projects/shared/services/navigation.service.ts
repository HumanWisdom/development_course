import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  backClicked: boolean = false;
  constructor(private router: Router) { }

  addToHistory(url: string) {
  if (url.includes('/onboarding/add-to-cart')) {
    return;
  }
    const urls = url.split('/');
    let urltoCheck: any;
    urltoCheck = urls[urls.length - 1];
    if(!this.backClicked) {
      if (urltoCheck) {
        let isNan = isNaN(Number(urltoCheck[urltoCheck.length - 1]));
        if (isNan || this.endsWith001ForModule(urltoCheck) || this.isExceptionUrl(urltoCheck,url)) {
          if (this.history.length>0 && this.history[this.history.length-1] != url) {
            this.history.push(url);
          } else if(this.history[this.history.length-1] != url) {
            this.history.push(url);
          }
        }
      }
    }

    this.backClicked = false;
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
     'mp3','coach/profile/','coach/contact/','videopage','mp4','blog-article','curated/youtubelink','forum-thread','profile','micro-learning'
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

    this.history.splice(this.history.indexOf(this.router.url) + 1);

    const url = this.goBack();
    if (url != null && !url.includes('home') && !url.includes('dashboard')) {
      return url;
    }

    let navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
    if (navFrom && navFrom != null && navFrom != 'null') {
      return navFrom;
    }

    if (url != null) {
      return url;
    }
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
