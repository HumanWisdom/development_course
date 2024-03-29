import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
        if (isNan || this.endsWith001ForModule(urltoCheck)) {
          if (this.history.length>0 && this.history[this.history.length-1] != url) {
            console.log("----------------PUSHED -----------: "+url);
            this.history.push(url);
          } else if(this.history[this.history.length-1] != url) {
            console.log("----------------PUSHED -----------: "+url);
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


  getBackLink(): string | null {
    if (this.history.length > 0) {
      return this.history[this.history.length - 1];
    }
    return 'adults/search';
  }

  navigateToBackLink() {
    const url = this.goBack();
    if (url != null) {
      this.router.navigate([url]);
      return 'DONOROUTE';
    }
    return 'adults/search';
  }

  public goBack() {
    let prevPath=null;
    if (this.history.length > 0) {
        // Pop the topmost path from the stack
        this.history.pop();
        this.backClicked = true;
        // Perform routing logic to the popped path
        prevPath = this.history[this.history.length - 1];
        console.log(`Going back to: ${prevPath}`);
    } else {
        console.log("Cannot go back. History is empty.");
    }
    return prevPath ;
}
}
