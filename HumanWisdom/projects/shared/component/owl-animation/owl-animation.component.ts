import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OwlStore } from '../../stores/owl.store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LogEventService } from '../../services/log-event.service';
import { CommonService } from '../../services/common.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-owl-animation',
  templateUrl: './owl-animation.component.html',
  styleUrls: ['./owl-animation.component.css']
})
export class OwlAnimationComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class.teenager-theme') get isTeenagerTheme() {
    return SharedService.ProgramId === ProgramType.Teenagers;
  }

  // Configuration: Time to wait (in milliseconds) before marking as initialized
  // Increase this value to keep the owl visible longer
  private readonly WAIT_TIME_BEFORE_INITIALIZATION = 5000; // 5 seconds

  @ViewChild('gifElement', { static: false }) gifElement!: ElementRef<HTMLImageElement>;
  @ViewChild('staticOwlImage', { static: false }) staticOwlImage!: ElementRef<HTMLImageElement>;
  gifError = false;
  gifLoaded = false;
  private _isPlaying: boolean = true;
  private _isTransitioning: boolean = false;
  private _isAtCorner: boolean = true; // GIF plays in corner position from the start
  private gifAnimationDuration = 6000; // Duration of GIF animation in milliseconds (10 seconds)
  public staticOwlUrl: string = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/justBreathing.gif';
  private gifPlayedOnce: boolean = false; // Track if GIF has played once
  private gifAnimationTimeout: any = null; // Track GIF animation timeout to prevent multiple calls
  private gifAlreadyStarting: boolean = false; // Prevent multiple GIF starts before localStorage is set

  // Static owl properties
  public showStaticOwl: boolean = false; // Start with video, show static owl after video ends
  public owlMessage: string = "Hi! I'm Olly.\nAsk me a question."; // Customizable message
  public showOwl: boolean = true; // Show owl on all pages
  public isSpeaking: boolean = false; // Controls cloud speaking animation
  public isDisappearing: boolean = false; // Controls cloud disappearing animation
  public showGif: boolean = false; // Control whether to show GIF animation
  private hasCheckedHomePage: boolean = false; // Track if we've checked for home page
  private messageTimers: any[] = [];
  private menuCheckInterval: any = null;
  private menuObserver: MutationObserver | null = null;
  private routerSubscription: Subscription | null = null;
  private loginCheckInterval: any = null; // Interval to check login status
  private lastLoginStatus: string | null = null; // Track last login status
  private readonly GIF_SHOWN_KEY = 'owl_gif_shown'; // localStorage key to track if GIF has been shown
  private readonly DIALOGUE_SHOWN_KEY = 'owl_dialogue_shown';
  private dialogueAlreadyShown: boolean = false;
  private bubbleRetryInterval: any = null;

  // Cloud image: only OLLY_HI – fade in on open, fade out on close
  public showCloudMessage: boolean = false;
  public cloudFadeIn: boolean = false; // Fade-in effect when cloud opens
  private readonly OLLY_HI_URL = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/Olly_Hi.svg';
  public currentCloudImage: string = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/icons/Olly_Hi.svg';
  private cloudImageInterval: any = null;
  private readonly CLOUD_FADE_IN_MS = 1800;

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
    private owlStore: OwlStore,
    private logeventservice: LogEventService,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.refreshDialogueState();

    // Debug mode - show static owl immediately for testing (cloud shows 200ms after image loads)
    if (this.debugMode) {
      this.showStaticOwl = true;
      this.cdr.detectChanges();
      return;
    }

    // Show owl on all pages
    this.showOwl = true;

    // IMPORTANT: Initialize both to false - we'll determine which to show
    this.showStaticOwl = false;
    this.showGif = false;

    // Check immediately and aggressively for home page
    // Use multiple timeouts to ensure DOM is fully loaded
    this.checkRouteAndSetOwlDisplay();
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 50);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 150);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 300);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 500);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 1000);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 2000);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 3000);

    // Subscribe to route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRouteAndSetOwlDisplay();
        if (this.commonService.shouldShowFooterBubble()) {
          this.startFooterBubbleRetry();
        }
      });

    // Monitor login status changes to trigger GIF on login
    this.lastLoginStatus = localStorage.getItem("isloggedin");
    this.monitorLoginStatus();
  }

  /**
   * Monitor login status to trigger GIF animation when user logs in
   */
  private monitorLoginStatus(): void {
    // Check login status every 500ms to detect login changes
    this.loginCheckInterval = setInterval(() => {
      const currentLoginStatus = localStorage.getItem("isloggedin");

      // If login status changed from not logged in to logged in, trigger GIF
      if (this.lastLoginStatus !== 'T' && currentLoginStatus === 'T') {
        // User just logged in - check if we should show GIF
        const hasGifBeenShown = sessionStorage.getItem(this.GIF_SHOWN_KEY) === 'true';
        if (!hasGifBeenShown && !this.gifPlayedOnce && !this.gifAlreadyStarting) {
          // Trigger GIF display
          this.checkRouteAndSetOwlDisplay();
        }
      }

      this.lastLoginStatus = currentLoginStatus;
    }, 500);
  }

  /**
   * Check current route and set owl display accordingly.
   * Shows justBreathing.gif with Olly_Hi.svg dialogue on first visit.
   */
  private checkRouteAndSetOwlDisplay(): void {
    this.refreshDialogueState();
    this.showGif = false;
    this.showStaticOwl = true;
    this.isPlaying = false;
    this.hasCheckedHomePage = true;
    this.maybeStartFooterBubble();
    this.cdr.detectChanges();
  }

  /**
   * Check if current route is the home page
   */
  private isHomePage(url: string): boolean {
    if (!url) {
      return false;
    }

    // Remove query params and hash for comparison
    const baseUrl = url.split('?')[0].split('#')[0];

    // Check for various home page route patterns
    const isHome = baseUrl === '/' ||
      baseUrl === '/adults' ||
      baseUrl === '/adults/' ||
      baseUrl.endsWith('/adults') ||
      baseUrl.includes('/adults/home') ||
      baseUrl.includes('/home') ||
      (baseUrl.split('/').length <= 2 && baseUrl.includes('adults')) ||
      (baseUrl === '' || baseUrl === '/');

    return isHome;
  }

  ngAfterViewInit() {
    // Wait a bit for the DOM to be fully ready, then monitor menu state
    setTimeout(() => {
      this.monitorMenuState();
    }, 500);

    // Also check for home component after view init (in case it loads late)
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 200);
    setTimeout(() => {
      this.checkRouteAndSetOwlDisplay();
    }, 800);

    this.startFooterBubbleRetry();
  }

  private startFooterBubbleRetry(): void {
    if (this.bubbleRetryInterval) {
      return;
    }
    this.maybeStartFooterBubble();
    let attempts = 0;
    this.bubbleRetryInterval = setInterval(() => {
      attempts++;
      this.maybeStartFooterBubble();
      if (
        attempts >= 12 ||
        this.commonService.hasFooterBubbleShownThisSession() ||
        this.commonService.hasFooterBubbleSequenceScheduled() ||
        !this.commonService.shouldShowFooterBubble()
      ) {
        clearInterval(this.bubbleRetryInterval);
        this.bubbleRetryInterval = null;
      }
    }, 500);
  }

  private maybeStartFooterBubble(): void {
    if (
      !this.showStaticOwl ||
      !this.commonService.shouldShowFooterBubble() ||
      this.commonService.hasFooterBubbleSequenceScheduled() ||
      this.showCloudMessage
    ) {
      return;
    }
    const img = this.staticOwlImage?.nativeElement;
    if (img?.complete && img.naturalWidth > 0) {
      this.onStaticOwlImageLoaded();
    }
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
      /*  if (menuOpen) {
         owlWrapper.style.zIndex = '10';
         owlWrapper.style.setProperty('z-index', '10', 'important');
       } else {
         owlWrapper.style.zIndex = '10';
         owlWrapper.style.setProperty('z-index', '10', 'important');
       } */
      owlWrapper.style.zIndex = '10';
      owlWrapper.style.setProperty('z-index', '10', 'important');

    }
  }


  ngOnDestroy() {
    // Allow the bubble to retry if this instance is destroyed before it was shown.
    if (!this.commonService.hasFooterBubbleShownThisSession()) {
      this.commonService.resetFooterBubbleSequenceScheduled();
    }

    // Clear any pending timers
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];

    // Clear GIF animation timeout
    if (this.gifAnimationTimeout) {
      clearTimeout(this.gifAnimationTimeout);
      this.gifAnimationTimeout = null;
    }

    // Clear cloud image interval
    if (this.cloudImageInterval) {
      clearInterval(this.cloudImageInterval);
      this.cloudImageInterval = null;
    }

    // Clear router subscription
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
      this.routerSubscription = null;
    }

    // Clear menu monitoring
    if (this.menuCheckInterval) {
      clearInterval(this.menuCheckInterval);
      this.menuCheckInterval = null;
    }
    if (this.menuObserver) {
      this.menuObserver.disconnect();
      this.menuObserver = null;
    }

    // Clear login status monitoring
    if (this.loginCheckInterval) {
      clearInterval(this.loginCheckInterval);
      this.loginCheckInterval = null;
    }
    if (this.bubbleRetryInterval) {
      clearInterval(this.bubbleRetryInterval);
      this.bubbleRetryInterval = null;
    }
  }


  openChat() {
    this.logeventservice.logEvent('Click_olly_chat');
    const program = SharedService.ProgramId === ProgramType.Teenagers ? 'teenagers' : 'adults';
    this.router.navigate([`/${program}/chat-bot`], { state: { startWithChat: true } });
  }

  private detectMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;
  }

  private refreshDialogueState(): void {
    this.dialogueAlreadyShown = !this.commonService.shouldShowFooterBubble();
  }

  private isSmallScreen(): boolean {
    return window.innerWidth <= 600;
  }

  /**
   * Called when the static owl image (justBreathing.gif) has loaded.
   * Triggers the speaking sequence so Olly_Hi.svg cloud appears 200ms later
   * (via the delay inside startSpeakingSequence).
   */
  onStaticOwlImageLoaded(): void {
    this.refreshDialogueState();
    if (!this.dialogueAlreadyShown) {
      this.startSpeakingSequence();
    }
    this.cdr.detectChanges();
  }

  // GIF load handler
  onGifLoaded() {
    // Prevent multiple calls - critical to stop GIF from playing multiple times
    if (this.gifPlayedOnce || this.gifAnimationTimeout !== null) {
      return;
    }

    // Extra safety: ensure flag is set to prevent any restart attempts
    this.gifAlreadyStarting = true;

    this.gifLoaded = true;
    this.cdr.detectChanges();

    // Do NOT set GIF_SHOWN_KEY here - that causes checkRouteAndSetOwlDisplay() to hide
    // the GIF immediately on its next run (50ms, 150ms, etc.). Set it only in the
    // timeout callback after gifAnimationDuration so the GIF stays visible for full duration.
    // Cloud (Olly_Hi.svg) is shown by onStaticOwlImageLoaded() 200ms after static owl image loads.
    this.cdr.detectChanges();

    // Stop GIF after gifAnimationDuration - keeps GIF visible for full duration
    this.gifAnimationTimeout = setTimeout(() => {
      // Mark as played and as shown only when we actually hide the GIF
      this.gifPlayedOnce = true;
      sessionStorage.setItem(this.GIF_SHOWN_KEY, 'true');

      // Hide GIF and show static owl
      this.showGif = false;
      this.showStaticOwl = true;
      this.isPlaying = false;
      
      // Force stop the GIF by removing its source to prevent any further looping
      // This ensures the GIF cannot restart even if the element remains in DOM briefly
      if (this.gifElement && this.gifElement.nativeElement) {
        const gifEl = this.gifElement.nativeElement;
        // Remove the src to stop the GIF animation completely
        gifEl.src = '';
        gifEl.style.display = 'none';
      }

      // Clear the timeout reference
      this.gifAnimationTimeout = null;

      // Force change detection to show static owl immediately
      this.cdr.detectChanges();

      // Start speaking sequence immediately (shows cloud with owl)
      // This ensures owl and cloud appear together right after GIF
      // Use requestAnimationFrame to ensure DOM is updated before showing cloud
      requestAnimationFrame(() => {
        // this.startSpeakingSequence();
        // this.cdr.detectChanges();
      });
    }, this.gifAnimationDuration);
  }


  // GIF error handler
  handleGifError() {
    // Ensure flag is set to prevent restart attempts
    this.gifAlreadyStarting = true;
    this.gifPlayedOnce = true; // Mark as played to prevent retrying

    this.gifError = true;
    this.cdr.detectChanges();

    // Mark GIF as shown even on error to prevent retrying
    localStorage.setItem(this.GIF_SHOWN_KEY, 'true');

    // Show static owl after error
    setTimeout(() => {
      this.isPlaying = false;
      this.showStaticOwl = true;
      this.showGif = false;

      // Force stop the GIF element if it exists
      if (this.gifElement && this.gifElement.nativeElement) {
        const gifEl = this.gifElement.nativeElement;
        gifEl.src = '';
        gifEl.style.display = 'none';
      }

      // Cloud (Olly_Hi.svg) is shown by onStaticOwlImageLoaded() 200ms after static owl image loads
      if (this.dialogueAlreadyShown) {
        this.owlMessage = '';
        this.isSpeaking = false;
      }
      this.cdr.detectChanges();
    }, 2500);
  }

  // Called when GIF animation completes
  private onGifAnimationComplete() {
    this.isPlaying = false;
    this.showGif = false;
    this.showStaticOwl = true;
    // Cloud (Olly_Hi.svg) is shown by onStaticOwlImageLoaded() 200ms after static owl image loads
    if (this.dialogueAlreadyShown) {
      this.owlMessage = '';
      this.isSpeaking = false;
    }
    this.cdr.detectChanges();
  }

  // Method to restart animation (if needed)
  restartAnimation() {
    if (this.gifAnimationTimeout) {
      clearTimeout(this.gifAnimationTimeout);
      this.gifAnimationTimeout = null;
    }

    this.isPlaying = false;
    this.isTransitioning = false;
    this.isAtCorner = true;
    this.gifError = false;
    this.showGif = false;
    this.showStaticOwl = true;
    this.isSpeaking = false;
    this.dialogueAlreadyShown = false;
    this.showCloudMessage = false;
    this.staticOwlUrl = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/justBreathing.gif?t=' + Date.now();
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];
    this.cdr.detectChanges();
  }

  private startSpeakingSequence() {
    if (this.commonService.hasFooterBubbleSequenceScheduled()) {
      return;
    }
    this.refreshDialogueState();
    if (this.dialogueAlreadyShown) {
      return;
    }

    this.commonService.markFooterBubbleSequenceScheduled();
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];

    const showBubble = setTimeout(() => {
      this.refreshDialogueState();
      if (!this.commonService.shouldShowFooterBubble()) {
        return;
      }

      this.commonService.markFooterBubbleShownThisSession();
      this.dialogueAlreadyShown = true;

      this.currentCloudImage = this.OLLY_HI_URL;
      this.showCloudMessage = true;
      this.cloudFadeIn = true;
      this.isSpeaking = true;
      this.isDisappearing = false;
      this.cdr.detectChanges();
    }, 1000);
    this.messageTimers.push(showBubble);

    const clearFadeIn = setTimeout(() => {
      this.cloudFadeIn = false;
      this.cdr.detectChanges();
    }, 1000 + this.CLOUD_FADE_IN_MS);
    this.messageTimers.push(clearFadeIn);

    const hideCloud = setTimeout(() => {
      this.hideCloudWithAnimation();
    }, 6000);
    this.messageTimers.push(hideCloud);
  }

  // Method to hide cloud with reverse animation (same as appearance but in reverse)
  hideCloudWithAnimation() {
    if (!this.showCloudMessage || this.isDisappearing) {
      return; // Already disappearing or no message
    }

    // Stop the cloud image interval
    if (this.cloudImageInterval) {
      clearInterval(this.cloudImageInterval);
      this.cloudImageInterval = null;
    }

    // Start disappearing animation
    this.isDisappearing = true;
    this.isSpeaking = false; // Stop speaking animation
    this.cdr.detectChanges();

    // Wait for animation to complete (0.6s for cloud shrink)
    setTimeout(() => {
      this.showCloudMessage = false;
      this.isDisappearing = false;
      this.cdr.detectChanges();
    }, 600);
  }

  // Method to set custom owl message (deprecated - now using images)
  setOwlMessage(message: string) {
    // This method is kept for backward compatibility but is no longer used
    // The cloud now shows images instead of text
    console.warn('setOwlMessage is deprecated. Cloud now uses images.');
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

  // Debug method to force show GIF (for testing)
  // Call this from browser console: ng.probe(document.querySelector('app-owl-animation')).componentInstance.forceShowGif()
  forceShowGif() {
    sessionStorage.removeItem(this.GIF_SHOWN_KEY);
    localStorage.removeItem(this.DIALOGUE_SHOWN_KEY);
    this.commonService.resetFooterBubbleSession();
    this.showGif = false;
    this.showStaticOwl = true;
    this.isPlaying = false;
    this.dialogueAlreadyShown = false;
    this.showCloudMessage = false;
    this.staticOwlUrl = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/onboarding/justBreathing.gif?t=' + Date.now();
    this.cdr.detectChanges();
  }
} 