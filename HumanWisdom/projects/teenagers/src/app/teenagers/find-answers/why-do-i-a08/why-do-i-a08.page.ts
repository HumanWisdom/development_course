import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-why-do-i-a08',
  templateUrl: './why-do-i-a08.page.html',
  styleUrls: ['./why-do-i-a08.page.scss'],
})
export class WhyDoIA08Page implements OnInit, AfterViewInit {

  isAdults = false;

  @ViewChild('enablepopup') enablepopup!: ElementRef;
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  audioLink = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/find_answers/why_do_i/audio/1.1.mp3';

  constructor(
    private location: Location,
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.setAudioControlsBackground();
  }

  ngAfterViewInit() {
    // Attempt to autoplay when view is ready
    const audioEl = this.audio.nativeElement;
    audioEl.muted = true; // start muted to allow autoplay
    const playPromise = audioEl.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Unmute shortly after successful autoplay
          setTimeout(() => {
            audioEl.muted = false;
          }, 500);
        })
        .catch(err => {
          console.warn('Autoplay was prevented by the browser:', err);
        });
    }
  }

  getclcickevent(event: string) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    const url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

  setAudioControlsBackground() {
    const backgroundColor = '#0C2B5F';
    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
    document.head.appendChild(style);
  }
}
