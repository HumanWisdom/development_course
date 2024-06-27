import { Component, OnInit, Input} from '@angular/core';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit  {

  yellow="#FFC455"
  @Input() audioLink: string;
  isAdults = true;
  constructor() {}

  ngOnInit(): void {
    
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
  }
}
