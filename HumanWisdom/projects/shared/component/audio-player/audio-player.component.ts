import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy  {

  yellow="#FFC455"
  @Input() audioLink: string;
  @ViewChild('audio') audio: ElementRef;
  isAdults = SharedService.ProgramId == ProgramType.Adults;
  constructor() {}

  ngOnInit(): void {
    
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.setAudioControlsBackground(); 
  }

  setAudioControlsBackground() {
    let style = document.getElementById('audio-controls-style') as HTMLStyleElement;
    if (!style) {
      style = document.createElement('style');
      style.id = 'audio-controls-style';
      document.head.appendChild(style);
    }

    if (this.isAdults) {
      style.textContent = `
        audio::-webkit-media-controls-enclosure {
          background: #FFE8BB !important;
        }
        audio::-webkit-media-controls-play-button {
          background-color: #ED7D6F !important;
          border-radius: 50% !important;
        }
        audio::-webkit-media-controls-panel {
          filter: none !important;
        }
      `;
    } else {
      style.textContent = `
        audio::-webkit-media-controls-enclosure {
          background: #0C2B5F !important;
        }
        audio::-webkit-media-controls-play-button {
          background-color: #116a69 !important;
          border-radius: 50% !important;
        }
        audio::-webkit-media-controls-panel {
          filter: invert(1) !important;
        }
      `;
    }
  }

  ngOnDestroy(): void {
    if (this.audio && this.audio.nativeElement) {
      this.audio.nativeElement.pause();
    }
  }
}
