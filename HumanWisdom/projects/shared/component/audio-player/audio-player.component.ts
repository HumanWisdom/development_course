import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {

  yellow="#FFC455"
  @Input() audioLink: string;

  constructor() { }

  ngOnInit() {}

}
