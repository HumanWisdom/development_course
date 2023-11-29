import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adults-audio-meditation',
  templateUrl: './adults-audio-meditation.component.html',
  styleUrls: ['./adults-audio-meditation.component.scss'],
})
export class AdultsAudioMeditationComponent implements OnInit {

  @ViewChild('enablepopup') enablepopup: ElementRef;

  @Input() audioLink = ""
  @Input() audioTitle = ''
  type = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  )
  {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink')
    this.audioTitle = this.route.snapshot.paramMap.get('title')
    this.type = this.route.snapshot.paramMap.get('type')
  }

  ngOnInit() {}

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }

}
