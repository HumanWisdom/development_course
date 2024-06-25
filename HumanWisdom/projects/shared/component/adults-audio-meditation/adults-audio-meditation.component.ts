import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

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
    private navigationService:NavigationService
  )
  {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink')
    this.audioTitle = this.route.snapshot.paramMap.get('title')
    let audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    audioUrl=audioUrl.replace('_',':');
    this.audioLink =  audioUrl.replace(/\~/g, '/');
    this.audioTitle = this.route.snapshot.paramMap.get('title');
    if(this.audioTitle){
     this.audioTitle = this.audioTitle.replaceAll('-', ' ');
    }
   
    this.type = this.route.snapshot.paramMap.get('type')
    this.rowId = this.route.snapshot.paramMap.get('RowId');
    this.rowId = this.rowId ? parseInt(this.rowId) : 0;
    if(this.rowId <= 9) {
      this.rowId = '0' + this.rowId;
    }
  }

  ngOnInit() {
   let curr = this.router.url;
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
    // this.router.navigate(["/adults/adult-dashboard"]);
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
}

}
