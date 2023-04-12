import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'HumanWisdom-single-audio-content',
  templateUrl: './single-audio-content.component.html',
  styleUrls: ['./single-audio-content.component.scss'],
})
export class SingleAudioContentComponent implements OnInit {
  yellow = "#FFC455"
  @Input() audioLink = ""
  @Input() audioTitle = ''


  constructor(private route: ActivatedRoute, private router: Router) {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink')
    this.audioTitle = this.route.snapshot.paramMap.get('title')
  }

  ngOnInit() {
  }

}
