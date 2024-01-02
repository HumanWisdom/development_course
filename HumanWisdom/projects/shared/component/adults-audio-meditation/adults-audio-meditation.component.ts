import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

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
  rowId:any = 0;
  numObj = {
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 6,
    15: 7,
    16: 8,
    17: 1,
    18: 2,
    19: 3,
    20: 4,
    21: 5,
    22: 6,
    23: 7,
    24: 8,
    25: 1,
    26: 2,
    27: 3,
    28: 4,
    29: 5,
    30: 6,
    31: 7,
    32: 8,
    33: 1,
    34: 2,
    35: 3,
    36: 4,
    37: 5,
    38: 6,
    39: 7,
    40: 8,
    41: 1,
    42: 2,
    43: 3,
    44: 4,
    45: 5,
    46: 6,
    47: 7,
    48: 8,
    49: 1,
    50: 2
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: AdultsService
  )
  {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink')
    this.audioTitle = this.route.snapshot.paramMap.get('title')
    this.type = this.route.snapshot.paramMap.get('type')
    this.rowId = this.route.snapshot.paramMap.get('RowId');
    this.rowId = this.rowId ? parseInt(this.rowId) : 0;
    if(this.rowId <= 8) {
      this.rowId = '0' + this.rowId;
    }else {
      for(const objkey in this.numObj) {
        if(this.rowId === parseInt(objkey)) {
          this.rowId = '0' + this.numObj[objkey];
          break;
        }
      }
    }
  }

  ngOnInit() {
   let curr = this.service.currentUrl;
   if(curr.includes('podcast')) {
      this.type = '';
   }else{
    this.type = 'Audio';
   }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }

}
