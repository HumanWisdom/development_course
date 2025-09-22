import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';

import { SharedService } from '../../services/shared.service';

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
    isAdults: boolean = true; 
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private navigationService:NavigationService
  )
  {
    this.audioLink = this.route.snapshot.paramMap.get('audiolink');
    
    this.audioTitle = this.route.snapshot.paramMap.get('title')
    let audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    if (audioUrl.includes('%')) {
      audioUrl = decodeURIComponent(audioUrl);
    }
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
     if (SharedService.ProgramId == ProgramType.Adults) {
         this.isAdults = true;
       } else {
         this.isAdults = false;
       }
   this.setAudioControlsBackground();

  }

  setAudioControlsBackground() {
      const backgroundColor = this.isAdults ? 'rgb(18, 15, 64)' : '#0C2B5F';
  
      // Create a new <style> element
      const style = document.createElement('style');
      style.textContent = `
        audio::-webkit-media-controls-enclosure {
          background: ${backgroundColor} !important;
        }
      `;
  
      // Append the <style> element to the document head
      document.head.appendChild(style);
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
