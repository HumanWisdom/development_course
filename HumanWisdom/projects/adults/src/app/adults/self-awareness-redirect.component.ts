import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

/** Navigates to home with #self-awareness so HomeComponent activates the Self-awareness tab. */
@Component({ selector: 'app-self-awareness-redirect', template: '' })
export class SelfAwarenessRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const program = SharedService.getprogramName();
    // Segments must be separate; one string '/adults/home' is a single segment and breaks fragment handling (NG04002).
    this.router.navigate(['/', program, 'home'], { fragment: 'self-awareness', replaceUrl: true });
  }
}
