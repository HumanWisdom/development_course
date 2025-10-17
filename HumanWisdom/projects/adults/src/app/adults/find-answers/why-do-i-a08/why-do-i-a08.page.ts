import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-do-i-a08',
  templateUrl: './why-do-i-a08.page.html',
  styleUrls: ['./why-do-i-a08.page.scss'],
})
export class WhyDoIA08Page implements OnInit, AfterViewInit {

  isAdults = true;
  audioLink = 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/find_answers/why_do_i/audio/1.1.mp3';

  @ViewChild('enablepopup') enablepopup!: ElementRef;
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  constructor(private location: Location, private router: Router) {}

  ngOnInit() {
    this.setAudioControlsBackground();
  }

  ngAfterViewInit() {
    // Attempt to autoplay when the view is initialized
    const audioEl = this.audio.nativeElement;
    audioEl.muted = true; // Start muted to allow autoplay
    const playPromise = audioEl.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setTimeout(() => {
            audioEl.muted = false; // Unmute after playback begins
          }, 500);
        })
        .catch(err => {
          console.log('Autoplay prevented by browser:', err);
        });
    }
  }

  getclcickevent(event: string) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.router.navigate(['/adults/find-answers/why-do-i']);
  }

  setAudioControlsBackground() {
    const backgroundColor = '#FFE8BB';
    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
    document.head.appendChild(style);
  }

}
