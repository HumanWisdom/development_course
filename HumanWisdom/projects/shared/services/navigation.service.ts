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
    var urls = url.split('/');
    var urltoCheck: any;
    urltoCheck = urls[urls.length - 1];
    if(!this.backClicked){
      if (urltoCheck) {
        let isNan = isNaN(urltoCheck[urltoCheck.length - 1]);
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
     , 's162p0','s51000','s39000','s47000','s324','s47000', 'mp4',
     's72002','s72001','s72003','s72004','s72005','s72006','s72007','event?eid',
     '/curated/youtubelink/','why-do-i','how-can-i'
  ];

  const wholeUrlCheckKeywords = [
     'mp3','coach/profile/','coach/contact/'
  ]
  var isValid = false;
  for(var item of wholeUrlCheckKeywords){
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
