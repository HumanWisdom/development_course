import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
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
  
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  videoError = false;
  private _isPlaying: boolean = true;
  private _isTransitioning: boolean = false;
  private _isAtCorner: boolean = true; // Video plays in corner position from the start
  private _videoLoaded: boolean = false;
  private _videoError: boolean = false;
  
  // Static owl properties
  public showStaticOwl: boolean = false; // Start with video, show static owl after video ends
  public owlMessage: string = "Hi! I'm Olly."; // Customizable message
  
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

  get videoLoaded(): boolean {
    return this._videoLoaded;
  }
  set videoLoaded(value: boolean) {
    this._videoLoaded = value;
  }
  
  private isMobile = this.detectMobile();

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private owlStore: OwlStore
  ) {}

  ngOnInit() {
    console.log('OwlAnimationComponent initialized');
    console.log('Video element:', this.videoElement);
    console.log('Initial showStaticOwl:', this.showStaticOwl);
    console.log('Initial isAtCorner:', this.isAtCorner);
    
    // Debug mode - show static owl immediately for testing
    if (this.debugMode) {
      console.log('DEBUG MODE: Showing static owl immediately');
      this.showStaticOwl = true;
      this.cdr.detectChanges();
      return;
    }
    
    // Don't mark as initialized yet - let the animation play first
    this.setupVideo();
  }
  

  ngOnDestroy() {
    // Cleanup video if needed
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.pause();
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

  private setupVideo() {
    if (!this.videoElement) {
      console.error('Video element not found');
      return;
    }
    const video = this.videoElement.nativeElement;
    console.log('Setting up video element:', video);
    
    // Set video source - use the same source as in HTML
    const videoSrc = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/videos/final.webm';
    console.log('Video source:', videoSrc);
    video.src = videoSrc;
    
    // High quality video settings
    video.playsInline = true; // Prevents fullscreen on iOS
    video.muted = true; // Start muted for autoplay compatibility
    video.preload = 'auto';
    video.controls = false;
    video.loop = false;
    // Quality optimizations
    video.autoplay = true; // Enable autoplay for better user experience
    video.defaultPlaybackRate = 1.0; // Ensure normal playback speed
    
    // Mobile-specific quality settings
    if (this.isSmallScreen()) {
      video.style.objectFit = 'contain';
    }
    
    console.log('Video attributes set:', {
      playsInline: video.playsInline,
      muted: video.muted,
      preload: video.preload,
      controls: video.controls,
      loop: video.loop,
      autoplay: video.autoplay,
      defaultPlaybackRate: video.defaultPlaybackRate
    });
    
    // Add event listeners
    video.addEventListener('loadstart', () => {
      console.log('Video loadstart event');
    });
    
    video.addEventListener('loadedmetadata', () => {
      console.log('Video loadedmetadata event - duration:', video.duration);
      this.videoLoaded = true;
      this.cdr.detectChanges();
      this.startVideoPlayback();
    });
    
    video.addEventListener('canplay', () => {
      console.log('Video canplay event');
    });
    
    video.addEventListener('play', () => {
      console.log('Video play event');
    });
    
    video.addEventListener('playing', () => {
      console.log('Video playing event');
    });
    
    video.addEventListener('ended', () => {
      console.log('Video ended event');
      this.onVideoEnded();
    });
    
    video.addEventListener('error', (e) => {
      console.error('Video error event:', e);
      console.error('Video error details:', video.error);
      this.videoError = true;
      this.cdr.detectChanges();
      // Fallback: show error message or use alternative
      this.handleVideoError();
    });
    
    video.addEventListener('abort', () => {
      console.log('Video abort event');
    });
    
    // Load the video
    console.log('Loading video...');
    video.load();
  }

  private startVideoPlayback() {
    const video = this.videoElement.nativeElement;
    console.log('Starting video playback...');
    
    // Ensure video is muted for autoplay
    video.muted = true;
    
    // Start playing
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Video started playing successfully');
      }).catch(error => {
        console.error('Error playing video:', error);
        // If autoplay fails, show play button
        console.log('Autoplay failed, showing play button');
        this.showPlayButton();
      });
    }
  }

  private showPlayButton() {
    // Play button functionality removed - no UI button needed
    console.log('Autoplay failed, but no play button will be shown');
  }

  private onVideoEnded() {
    console.log('Video ended, showing static owl permanently');
    console.log('showStaticOwl before:', this.showStaticOwl);
    this.isPlaying = false;
    this.showStaticOwl = true; // Show static owl after video ends - PERMANENTLY
    console.log('showStaticOwl after:', this.showStaticOwl);
    this.cdr.detectChanges();
    
    // DO NOT mark as initialized - we want the owl to stay visible permanently
    console.log('Static owl is now permanently visible');
  }

  private handleVideoError() {
    console.log('Handling video error - showing static owl permanently');
    // Show static owl image permanently on video error
    setTimeout(() => {
      this.isPlaying = false;
      this.showStaticOwl = true; // Show static owl permanently on error
      this.cdr.detectChanges();
      
      // DO NOT mark as initialized - we want the owl to stay visible permanently
      console.log('Static owl is now permanently visible (after error)');
    }, 2000);
  }

  // Method to restart animation (if needed)
  restartAnimation() {
    const video = this.videoElement.nativeElement;
    
    // Reset video state
    video.currentTime = 0;
    video.pause();
    video.muted = true; // Ensure muted for autoplay
    
    // Reset component state - start with video again
    this.isPlaying = true;
    this.isTransitioning = false;
    this.isAtCorner = true; // Keep video in corner position
    this.videoError = false;
    this.showStaticOwl = false; // Hide static owl to show video again
    this.cdr.detectChanges();
    
    // Start playing after a short delay to ensure state is updated
    setTimeout(() => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Video restarted successfully');
        }).catch((error: any) => {
          console.error('Error restarting video:', error);
          this.showPlayButton();
        });
      }
    }, 100);
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