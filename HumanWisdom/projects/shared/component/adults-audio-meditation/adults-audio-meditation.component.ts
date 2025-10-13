import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-adults-audio-meditation',
  templateUrl: './adults-audio-meditation.component.html',
  styleUrls: ['./adults-audio-meditation.component.scss'],
})
export class AdultsAudioMeditationComponent implements OnInit, AfterViewInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;
  @ViewChild('audio') audioRef!: ElementRef<HTMLAudioElement>;  // 👈 added for autoplay

  @Input() audioLink = "";
  @Input() audioTitle = '';
  type = '';
  rowId: any = 0;
  isAdults: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private navigationService: NavigationService
  ) {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink');

    this.audioTitle = this.route.snapshot.paramMap.get('type')
    let audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    if (audioUrl.includes('%')) {
      audioUrl = decodeURIComponent(audioUrl);
    }
    audioUrl = audioUrl.replace('_', ':');
    this.audioLink = audioUrl.replace(/\~/g, '/');
    this.audioTitle = this.route.snapshot.paramMap.get('type');
    if (this.audioTitle) {
      this.audioTitle = this.audioTitle.replaceAll(/-/g, ' ');
    }

    this.type = this.route.snapshot.paramMap.get('type')
    this.rowId = this.route.snapshot.paramMap.get('title');
    this.rowId = this.rowId ? parseInt(this.rowId) : 0;
    if (this.rowId <= 9) {
      this.rowId = '0' + this.rowId;
    }
  }

  ngOnInit() {
    let curr = this.router.url;
    if (curr.includes('podcast')) {
      this.type = '';
    } else {
      this.type = 'Audio';
    }
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.setAudioControlsBackground();
  }

  ngAfterViewInit() {
    // 👇 autoplay logic
    if (this.audioRef && this.audioRef.nativeElement) {
      const audioEl = this.audioRef.nativeElement;

      const tryPlay = () => {
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('Autoplay blocked by browser:', err);
            // fallback: show a toast/button if you want
          });
        }
      };

      // wait until audio can play
      if (audioEl.readyState >= 2) {
        tryPlay();
      } else {
        audioEl.addEventListener('canplaythrough', tryPlay, { once: true });
      }
    }
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? 'rgb(18, 15, 64)' : '#0C2B5F';

    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
    document.head.appendChild(style);
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }

}
