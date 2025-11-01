import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OwlStore } from '../../stores/owl.store';

@Component({
  selector: 'app-owl-animation',
  templateUrl: './owl-animation.component.html',
  styleUrls: ['./owl-animation.component.css']
})
export class OwlAnimationComponent implements OnInit, OnDestroy {
  // Configuration: Time to wait (in milliseconds) before marking as initialized
  // Increase this value to keep the owl visible longer
  private readonly WAIT_TIME_BEFORE_INITIALIZATION = 5000; // 5 seconds
  
  @ViewChild('gifElement', { static: false }) gifElement!: ElementRef<HTMLImageElement>;
  gifError = false;
  gifLoaded = false;
  private _isPlaying: boolean = true;
  private _isTransitioning: boolean = false;
  private _isAtCorner: boolean = true; // GIF plays in corner position from the start
  private gifAnimationDuration = 8000; // Duration of GIF animation in milliseconds (8 seconds)
  
  // Static owl properties
  public showStaticOwl: boolean = false; // Start with video, show static owl after video ends
  public owlMessage: string = "Hi! I'm Olly I am here to help"; // Customizable message
  public showOwl: boolean = true; // Control visibility based on route (home only)
  public isSpeaking: boolean = false; // Controls cloud speaking animation
  private messageTimers: any[] = [];
  
  // Debug flag - set to true to test static owl immediately
  private debugMode: boolean = false;

  // Getters and setters
  get isPlaying(): boolean {
    return this._isPlaying;
  }
  set isPlaying(value: boolean) {
    this._isPlaying = value;
  }

  get isTransitioning(): boolean {
    return this._isTransitioning;
  }
  set isTransitioning(value: boolean) {
    this._isTransitioning = value;
  }

  get isAtCorner(): boolean {
    return this._isAtCorner;
  }
  set isAtCorner(value: boolean) {
    this._isAtCorner = value;
  }
  
  private isMobile = this.detectMobile();

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private owlStore: OwlStore
  ) {}

  ngOnInit() {
    console.log('OwlAnimationComponent initialized');
    console.log('GIF element:', this.gifElement);
    console.log('Initial showStaticOwl:', this.showStaticOwl);
    console.log('Initial isAtCorner:', this.isAtCorner);
    
    // Debug mode - show static owl immediately for testing
    if (this.debugMode) {
      console.log('DEBUG MODE: Showing static owl immediately');
      this.showStaticOwl = true;
      this.startSpeakingSequence();
      this.cdr.detectChanges();
      return;
    }
    
    // Show only on home route; hide on chat-bot and others
    this.updateShowOwlForRoute(this.router.url);
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.updateShowOwlForRoute(evt.urlAfterRedirects || evt.url);
      }
    });

    // GIF will play automatically when loaded
    // After the GIF animation duration, show the static owl
  }
  

  ngOnDestroy() {
    // Clear any pending timers
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];
  }

  
 openChat(){
  this.router.navigate(['/adults/chat-bot']);
 }

  private detectMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
  }

  private isSmallScreen(): boolean {
    return window.innerWidth <= 600;
  }

  // GIF load handler
  onGifLoaded() {
    console.log('GIF loaded successfully');
    this.gifLoaded = true;
    this.cdr.detectChanges();
    
    // After the GIF animation duration, show the static owl
    setTimeout(() => {
      this.onGifAnimationComplete();
    }, this.gifAnimationDuration);
  }

  private updateShowOwlForRoute(url: string) {
    // Only show on adults home route; hide on chat-bot and elsewhere
    const isAdultsHome = /\/adults\/home(\b|\?|#|$)/.test(url);
    this.showOwl = isAdultsHome;
    this.cdr.detectChanges();
  }

  // GIF error handler
  handleGifError() {
    console.error('GIF loading error');
    this.gifError = true;
    this.cdr.detectChanges();
    
    // Show static owl after error
    setTimeout(() => {
      this.isPlaying = false;
      this.showStaticOwl = true;
      this.startSpeakingSequence();
      this.cdr.detectChanges();
      console.log('Static owl is now visible (after GIF error)');
    }, 2000);
  }

  // Called when GIF animation completes
  private onGifAnimationComplete() {
    console.log('GIF animation completed, showing static owl permanently');
    this.isPlaying = false;
    this.showStaticOwl = true;
    this.startSpeakingSequence();
    this.cdr.detectChanges();
    console.log('Static owl is now permanently visible');
  }

  // Method to restart animation (if needed)
  restartAnimation() {
    console.log('Restarting animation');
    
    // Reset component state - start with GIF again
    this.isPlaying = true;
    this.isTransitioning = false;
    this.isAtCorner = true;
    this.gifError = false;
    this.showStaticOwl = false;
    this.isSpeaking = false;
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];
    this.cdr.detectChanges();
    
    // Restart the timer for showing static owl
    setTimeout(() => {
      this.onGifAnimationComplete();
    }, this.gifAnimationDuration);
  }

  private startSpeakingSequence() {
    // Begin with the intro message and speaking animation
    this.owlMessage = "Hi I am olly\nI am here to help";
    this.isSpeaking = true;
    this.cdr.detectChanges();

    // After a few seconds, switch to the next prompt
    const toNext = setTimeout(() => {
      this.owlMessage = 'Ask me\nany questions';
      this.cdr.detectChanges();
    }, 3000);
    this.messageTimers.push(toNext);

    // Stop the speaking animation after a short while
    const stopSpeaking = setTimeout(() => {
      this.isSpeaking = false;
      this.cdr.detectChanges();
    }, 6000);
    this.messageTimers.push(stopSpeaking);

    // After showing the question for a bit, remove the cloud entirely
    const hideCloud = setTimeout(() => {
      this.owlMessage = '';
      this.cdr.detectChanges();
    }, 9000);
    this.messageTimers.push(hideCloud);
  }

  // Method to set custom owl message
  setOwlMessage(message: string) {
    this.owlMessage = message;
    this.cdr.detectChanges();
  }

  // Method to toggle between static owl and video
  toggleOwlDisplay(showStatic: boolean = true) {
    this.showStaticOwl = showStatic;
    this.cdr.detectChanges();
  }

  // Method to show static owl with custom message
  showStaticOwlWithMessage(message: string) {
    this.showStaticOwl = true;
    this.owlMessage = message;
    this.cdr.detectChanges();
  }

  // Method to show video instead of static owl
  showVideo() {
    this.showStaticOwl = false;
    this.cdr.detectChanges();
  }
} 