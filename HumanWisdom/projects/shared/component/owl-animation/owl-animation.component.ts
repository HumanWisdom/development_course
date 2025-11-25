import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OwlStore } from '../../stores/owl.store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
  public gifUrl: string = 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/owlGif.gif'; // Dynamic GIF URL
  private gifPlayedOnce: boolean = false; // Track if GIF has played once
  private gifAnimationTimeout: any = null; // Track GIF animation timeout to prevent multiple calls
  private gifAlreadyStarting: boolean = false; // Prevent multiple GIF starts before localStorage is set
  
  // Static owl properties
  public showStaticOwl: boolean = false; // Start with video, show static owl after video ends
  public owlMessage: string = "Hi! I'm Olly I am here to help"; // Customizable message
  public showOwl: boolean = true; // Show owl on all pages
  public isSpeaking: boolean = false; // Controls cloud speaking animation
  public showGif: boolean = false; // Control whether to show GIF animation
  private hasCheckedHomePage: boolean = false; // Track if we've checked for home page
  private messageTimers: any[] = [];
  private menuCheckInterval: any = null;
  private menuObserver: MutationObserver | null = null;
  private routerSubscription: Subscription | null = null;
  private readonly GIF_SHOWN_KEY = 'owl_gif_shown'; // localStorage key to track if GIF has been shown
  private readonly DIALOGUE_SHOWN_KEY = 'owl_dialogue_shown'; // localStorage key to track if dialogue has been shown
  private dialogueAlreadyShown: boolean = false; // Track if dialogue has been shown in this session
  
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
    // Check if dialogue has been shown before
    this.dialogueAlreadyShown = localStorage.getItem(this.DIALOGUE_SHOWN_KEY) === 'true';

    // Debug mode - show static owl immediately for testing
    if (this.debugMode) {
      this.showStaticOwl = true;
      this.startSpeakingSequence();
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
      });
  }

  /**
   * Check current route and set owl display accordingly
   * GIF only shows on home page and only once
   */
  private checkRouteAndSetOwlDisplay(): void {
    const currentUrl = this.router.url;
    const hasGifBeenShown = localStorage.getItem(this.GIF_SHOWN_KEY) === 'true';

    // Check if home component exists in DOM (most reliable method)
    // Try multiple selectors to be sure
    const homeComponent = document.querySelector('app-home');
    const homeContainer = document.querySelector('.home-container');
    const homeContent = document.querySelector('.home-content');
    const stickyTopSection = document.querySelector('.sticky-top-section');
    const navMenu = document.querySelector('.nav-menu');
    
    // Also check route-based detection as fallback
    const isHomeRoute = this.isHomePage(currentUrl);
    
    const isHomeComponentPresent = !!(homeComponent || homeContainer || homeContent || stickyTopSection || navMenu);
    
    // Use either DOM detection OR route detection
    const isHomePage = isHomeComponentPresent || isHomeRoute;

    // Show GIF if home page is detected AND GIF hasn't been shown
    // CRITICAL: Check gifAlreadyStarting to prevent multiple starts during async load
    if (isHomePage && !hasGifBeenShown && !this.gifPlayedOnce && !this.gifAlreadyStarting) {
      // Set flag immediately to prevent re-triggering from multiple checkRouteAndSetOwlDisplay() calls
      this.gifAlreadyStarting = true;
      
      // Clear any existing timeout first
      if (this.gifAnimationTimeout) {
        clearTimeout(this.gifAnimationTimeout);
        this.gifAnimationTimeout = null;
      }
      
      // Show GIF on home page if it hasn't been shown before
      this.showGif = true;
      this.showStaticOwl = false;
      this.isPlaying = true;
      this.gifLoaded = false;
      this.gifError = false;
      this.gifPlayedOnce = false;
      // Reset GIF URL to ensure fresh load
      this.gifUrl = 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/owlGif.gif?t=' + Date.now();
      this.hasCheckedHomePage = true;
      
      // Force change detection to ensure it sticks
      this.cdr.detectChanges();
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 0);
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 100);
      
      // Don't start speaking sequence yet - wait for GIF to complete
      return; // Exit early to prevent setting static owl
    } 
    
    // Only show static owl if we're NOT on home page OR if GIF has already been shown
    // BUT ONLY if showGif is not already true (to prevent overriding)
    // Also check if GIF has already been played to prevent re-showing
    if (!this.showGif && !this.hasCheckedHomePage && !this.gifPlayedOnce) {
      if (!isHomePage) {
        // Non-home page - show static owl
      } else if (hasGifBeenShown) {
        // Home page but GIF already shown - show static owl
      } else {
        // Home page detected but showGif is still false - force it as a last resort
        // BUT only if GIF hasn't been played yet
        if (!this.gifPlayedOnce) {
          this.showGif = true;
          this.showStaticOwl = false;
          this.cdr.detectChanges();
          return;
        }
      }
      this.showGif = false;
      this.showStaticOwl = true;
      this.isPlaying = false;
      // Only show dialogue if it hasn't been shown before
      if (!isHomePage && !this.dialogueAlreadyShown) {
        this.startSpeakingSequence();
      } else {
        // Clear message if dialogue was already shown
        this.owlMessage = '';
        this.isSpeaking = false;
      }
    } else if (hasGifBeenShown || this.gifPlayedOnce) {
      // If GIF has been shown, always show static owl without dialogue
      this.showGif = false;
      this.showStaticOwl = true;
      this.isPlaying = false;
      // Clear message if dialogue was already shown
      if (this.dialogueAlreadyShown) {
        this.owlMessage = '';
        this.isSpeaking = false;
      }
    }
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
    
    // Clear GIF animation timeout
    if (this.gifAnimationTimeout) {
      clearTimeout(this.gifAnimationTimeout);
      this.gifAnimationTimeout = null;
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
    // Prevent multiple calls - critical to stop GIF from playing multiple times
    if (this.gifPlayedOnce || this.gifAnimationTimeout !== null) {
      return;
    }
    
    // Extra safety: ensure flag is set to prevent any restart attempts
    this.gifAlreadyStarting = true;
    
    this.gifLoaded = true;
    this.cdr.detectChanges();
    
    // Mark GIF as shown in localStorage (only once)
    localStorage.setItem(this.GIF_SHOWN_KEY, 'true');
    
    // Stop GIF after one play cycle - hide immediately to prevent looping
    // This ensures the GIF plays only once - concrete solution
    this.gifAnimationTimeout = setTimeout(() => {
      // Mark as played immediately
      this.gifPlayedOnce = true;
      
      // IMMEDIATELY hide GIF and show static owl - this stops the looping
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
      
      // Force change detection
      this.cdr.detectChanges();
      
      // Start speaking sequence
      this.startSpeakingSequence();
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
      
      // Only show dialogue if it hasn't been shown before (first time only)
      if (!this.dialogueAlreadyShown) {
        this.startSpeakingSequence();
      } else {
        // Clear message if dialogue was already shown
        this.owlMessage = '';
        this.isSpeaking = false;
      }
      this.cdr.detectChanges();
    }, 2000);
  }

  // Called when GIF animation completes
  private onGifAnimationComplete() {
    this.isPlaying = false;
    this.showGif = false;
    this.showStaticOwl = true;
    // Only show dialogue if it hasn't been shown before (first time only)
    if (!this.dialogueAlreadyShown) {
      this.startSpeakingSequence();
    } else {
      // Clear message if dialogue was already shown
      this.owlMessage = '';
      this.isSpeaking = false;
    }
    this.cdr.detectChanges();
  }

  // Method to restart animation (if needed)
  restartAnimation() {
    // Clear any existing timeout
    if (this.gifAnimationTimeout) {
      clearTimeout(this.gifAnimationTimeout);
      this.gifAnimationTimeout = null;
    }
    
    // Reset component state - start with GIF again
    this.isPlaying = true;
    this.isTransitioning = false;
    this.isAtCorner = true;
    this.gifError = false;
    this.showStaticOwl = false;
    this.isSpeaking = false;
    this.gifPlayedOnce = false;
    this.gifAlreadyStarting = false; // Reset flag to allow restart
    this.gifUrl = 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/owlGif.gif?t=' + Date.now();
    this.messageTimers.forEach(t => clearTimeout(t));
    this.messageTimers = [];
    this.cdr.detectChanges();
    
    // Restart the timer for showing static owl
    setTimeout(() => {
      this.onGifAnimationComplete();
    }, this.gifAnimationDuration);
  }

  private startSpeakingSequence() {
    // Only show dialogue if it hasn't been shown before (first time only)
    if (this.dialogueAlreadyShown) {
      // Dialogue already shown - just show static owl without message
      this.owlMessage = '';
      this.isSpeaking = false;
      this.cdr.detectChanges();
      return;
    }
    
    // Mark dialogue as shown immediately to prevent multiple calls
    this.dialogueAlreadyShown = true;
    localStorage.setItem(this.DIALOGUE_SHOWN_KEY, 'true');
    
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

  // Debug method to force show GIF (for testing)
  // Call this from browser console: ng.probe(document.querySelector('app-owl-animation')).componentInstance.forceShowGif()
  forceShowGif() {
    // Clear any existing timeout
    if (this.gifAnimationTimeout) {
      clearTimeout(this.gifAnimationTimeout);
      this.gifAnimationTimeout = null;
    }
    
    localStorage.removeItem(this.GIF_SHOWN_KEY);
    localStorage.removeItem(this.DIALOGUE_SHOWN_KEY); // Also reset dialogue for testing
    this.showGif = true;
    this.showStaticOwl = false;
    this.isPlaying = true;
    this.gifLoaded = false;
    this.gifError = false;
    this.gifPlayedOnce = false;
    this.gifAlreadyStarting = false; // Reset flag for testing
    this.dialogueAlreadyShown = false; // Reset dialogue flag for testing
    this.gifUrl = 'https://d1tenzemoxuh75.cloudfront.net/assets/icons/owlGif.gif?t=' + Date.now();
    this.cdr.detectChanges();
  }
} 