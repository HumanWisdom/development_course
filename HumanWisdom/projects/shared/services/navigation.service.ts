import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  constructor(private router: Router) { }

  addToHistory(url: string) {
    this.history.push(url);
  }

  getBackLink(): string | null {
    if (this.history.length > 1) {
      this.history.pop();
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
