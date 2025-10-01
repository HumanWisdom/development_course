import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owl-animation',
  templateUrl: './owl-animation.component.html',
  styleUrls: ['./owl-animation.component.css']
})
export class OwlAnimationComponent implements OnInit, OnDestroy {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  videoError = false;
  private _isPlaying: boolean = true;
  private _isTransitioning: boolean = false;
  private _isAtCorner: boolean = false;
  private _videoLoaded: boolean = false;
  private _videoError: boolean = false;

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

  constructor(private cdr: ChangeDetectorRef,private router:Router) {}

  ngOnInit() {
    console.log('OwlAnimationComponent initialized');
    console.log('Video element:', this.videoElement);
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
    console.log('Video ended, transitioning to corner');
    this.isPlaying = false;
    this.isTransitioning = true;
    this.cdr.detectChanges();
    
    // After a short delay, move to the corner within the container
    setTimeout(() => {
      this.isTransitioning = false;
      this.isAtCorner = true;
      this.cdr.detectChanges();
      
      // Keep video visible and restart after a delay
      setTimeout(() => {
        // this.restartAnimation();
      }, 3000); // Restart after 3 seconds
    }, 1000);
  }

  private handleVideoError() {
    console.log('Handling video error - WebM format may not be supported');
    // You might want to convert the video to MP4 or provide a fallback
    // For now, let's just transition to corner after a delay
    setTimeout(() => {
      this.isPlaying = false;
      this.isTransitioning = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.isTransitioning = false;
        this.isAtCorner = true;
        this.cdr.detectChanges();
      }, 1000);
    }, 2000);
  }

  // Method to restart animation (if needed)
  restartAnimation() {
    const video = this.videoElement.nativeElement;
    
    // Reset video state
    video.currentTime = 0;
    video.pause();
    video.muted = true; // Ensure muted for autoplay
    
    // Reset component state
    this.isPlaying = true;
    this.isTransitioning = false;
    this.isAtCorner = false;
    this.videoError = false;
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
} 