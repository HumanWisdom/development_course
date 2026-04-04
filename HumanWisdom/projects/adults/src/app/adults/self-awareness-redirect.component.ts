import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

/** Navigates to home with #self-awareness so HomeComponent activates the Self-awareness tab. */
@Component({ selector: 'app-self-awareness-redirect', template: '' })
export class SelfAwarenessRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const base = `/${SharedService.getprogramName()}/home`;
    this.router.navigate([base], { fragment: 'self-awareness', replaceUrl: true });
  }
}
