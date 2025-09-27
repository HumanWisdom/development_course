import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

@Component({
  selector: 'app-sessionover-s1',
  templateUrl: './sessionover-s1.component.html',
  styleUrls: ['./sessionover-s1.component.scss'],
})
export class SessionoverS1Component implements OnInit {
  @Input() bg: string;
  @Input() points: string;
  @Input() progress: string;
   isAdults = false;



  constructor() { 

     if (SharedService.ProgramId == ProgramType.Adults) {
              this.isAdults = true;
            } else {
              this.isAdults = false;
            }
    
  }

  ngOnInit() {}

}
