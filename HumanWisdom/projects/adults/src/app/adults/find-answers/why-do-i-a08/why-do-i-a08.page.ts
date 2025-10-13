import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-do-i-a08',
  templateUrl: './why-do-i-a08.page.html',
  styleUrls: ['./why-do-i-a08.page.scss'],
})
export class WhyDoIA08Page implements OnInit {

  isAdults = true;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  audioLink='https://humanwisdoms3.s3.eu-west-2.amazonaws.com/find_answers/why_do_i/audio/1.1.mp3'

  constructor(private location: Location, private router:Router) { }

  ngOnInit() {
    this.setAudioControlsBackground();
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() 
  {
    // this.location.back()
    this.router.navigate(["/adults/find-answers/why-do-i"])
  }

    setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? '#FFE8BB' : '#0C2B5F';

    const style = document.createElement('style');
    style.textContent = `
      audio::-webkit-media-controls-enclosure {
        background: ${backgroundColor} !important;
      }
    `;
    document.head.appendChild(style);
  }

}
