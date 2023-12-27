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
    this.rowId = this.rowId <= 9 ? '0' + this.rowId : this.rowId;
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
