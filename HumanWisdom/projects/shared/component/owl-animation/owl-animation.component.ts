import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OwlStore } from '../../stores/owl.store';

@Component({
  selector: 'app-owl-animation',
  templateUrl: './owl-animation.component.html',
  styleUrls: ['./owl-animation.component.css']
})
export class OwlAnimationComponent implements OnInit, OnDestroy, AfterViewInit {
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
  public showOwl: boolean = true; // Show owl on all pages
  public isSpeaking: boolean = false; // Controls cloud speaking animation
  private messageTimers: any[] = [];
  private menuCheckInterval: any = null;
  private menuObserver: MutationObserver | null = null;
  
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
    
    // Show owl on all pages
    this.showOwl = true;

    // GIF will play automatically when loaded
    // After the GIF animation duration, show the static owl
  }
  
  ngAfterViewInit() {
    // Wait a bit for the DOM to be fully ready, then monitor menu state
    setTimeout(() => {
      this.monitorMenuState();
    }, 500);
  }
  
  private monitorMenuState() {
    // Check for menu checkbox and monitor its state
    const menuCheckbox = document.getElementById('menu') as HTMLInputElement;
    if (menuCheckbox) {
      // Initial check
      this.adjustOwlZIndex(menuCheckbox.checked);
      
      // Monitor changes
      menuCheckbox.addEventListener('change', () => {
        this.adjustOwlZIndex(menuCheckbox.checked);
      });
      
      // Also monitor with MutationObserver for cases where checkbox is toggled programmatically
      this.menuObserver = new MutationObserver(() => {
        this.adjustOwlZIndex(menuCheckbox.checked);
      });
      this.menuObserver.observe(menuCheckbox, { attributes: true, attributeFilter: ['checked'] });
      
      // Also use a polling approach as a fallback (check every 100ms)
      this.menuCheckInterval = setInterval(() => {
        this.adjustOwlZIndex(menuCheckbox.checked);
      }, 100);
    } else {
      // Retry if checkbox not found yet
      setTimeout(() => {
        this.monitorMenuState();
      }, 500);
    }
  }
  
  private adjustOwlZIndex(menuOpen: boolean) {
    // Find the owl wrapper element
    const owlWrapper = document.querySelector('.owl-animation-wrapper') as HTMLElement;
    if (owlWrapper) {
      if (menuOpen) {
        owlWrapper.style.zIndex = '10';
        owlWrapper.style.setProperty('z-index', '10', 'important');
      } else {
        owlWrapper.style.zIndex = '100';
        owlWrapper.style.setProperty('z-index', '100', 'important');
      }
    }
  }
  

  ngOnDestroy() {
    // Clear any pending timers
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];
    
    // Clear menu monitoring
    if (this.menuCheckInterval) {
      clearInterval(this.menuCheckInterval);
      this.menuCheckInterval = null;
    }
    if (this.menuObserver) {
      this.menuObserver.disconnect();
      this.menuObserver = null;
    }
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
    this.owlMessage = "Hi I am Olly. I'm\n here to help.";
    this.isSpeaking = true;
    this.cdr.detectChanges();

    // After a few seconds, switch to the next prompt
    const toNext = setTimeout(() => {
      this.owlMessage = 'Ask me a\n question.';
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