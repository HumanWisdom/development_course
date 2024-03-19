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
    if (urltoCheck) {
      let isNan = isNaN(urltoCheck[urltoCheck.length - 1]);
      if (isNan) {
        if (!this.backClicked) {
          this.history.push(url);
          // Use a Set to keep track of unique values
          // if (this.history.length > 0) {
          //   let uniqueSet = new Set(this.history);
          //   if (uniqueSet.size > 0) {
          //     this.history = JSON.parse(JSON.stringify(Array.from(uniqueSet)));
          //   }
          // }

        }
      }
    }
    this.backClicked = false;
  }

  getBackLink(): string | null {
    if (this.history.length > 0) {
      return this.history[this.history.length - 1];
    }
    return 'adults/search';
  }

  navigateToBackLink() {
    const url = this.getBackLink();
    this.history?.pop();
    this.backClicked = true;
    if (url != null) {
      this.router.navigate([url]);
      return 'DONOROUTE';
    }
    return 'adults/search';
  }






}
