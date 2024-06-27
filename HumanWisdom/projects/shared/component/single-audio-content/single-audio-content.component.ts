import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'HumanWisdom-single-audio-content',
  templateUrl: './single-audio-content.component.html',
  styleUrls: ['./single-audio-content.component.scss'],
})
export class SingleAudioContentComponent implements OnInit {
  yellow = "#FFC455"
  @Input() audioLink = ""
  @Input() audioTitle = ''
  mediaAudio=JSON.parse(localStorage.getItem("mediaAudio"))
  imageUrl= '';
  enableImage = true;
  isAdults= false;
  constructor(private route: ActivatedRoute, private router: Router) {
    // debugger;
    const audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    this.audioLink = this.mediaAudio + audioUrl.replace(/\~/g, '/');
    this.audioTitle = this.route.snapshot.paramMap.get('title');
    if(this.audioTitle){
     this.audioTitle = this.audioTitle.replaceAll('-', ' ');
    }
    let rowid:any = this.route.snapshot.paramMap.get('RowId');
    rowid = parseInt(rowid);
    let Id = rowid <= 9 ? '0' + rowid : rowid;
    this.imageUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`;

    let m: any = window.location.href;
    if(m.includes('introduction_to_happierme')) {
      this.enableImage = false
    }
  }

  ngOnInit() {
    this.isAdults = SharedService.isAdultProgram();
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
}
