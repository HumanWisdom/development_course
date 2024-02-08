import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  constructor(private router: Router) { }

  addToHistory(url: string) {
    this.history.push(url);// Use a Set to keep track of unique values
    if (this.history.length > 0) {
      let uniqueSet = new Set(this.history);
      if (uniqueSet.size > 0) {
        this.history = JSON.parse(JSON.stringify(Array.from(uniqueSet)));
      }
    }
  }

  getBackLink(): string | null {
    if (this.history.length > 1) {
      this.history.pop();
      const lastUrl = this.history[this.history.length - 1];
      var urlsToRemoveForModule = this.history.filter(x=>x.includes(lastUrl.split('/')[2]));
      this.history =  this.history.filter(item => !urlsToRemoveForModule.includes(item));
      return this.history[this.history.length - 1];
    }
    return null;
  }

  navigateToBackLink() {
    const url = this.getBackLink();
    if (url != null) {
      this.router.navigate([url]);
      return 'DONOROUTE';
    }
    return null;
  }


}
