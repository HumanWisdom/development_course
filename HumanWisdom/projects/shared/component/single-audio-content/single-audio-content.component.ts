import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../services/common.service';
import { NavigationService } from '../../services/navigation.service';
import { Location } from '@angular/common';
import { ProgramType } from '../../models/program-model';


@Component({
  selector: 'HumanWisdom-single-audio-content',
  templateUrl: './single-audio-content.component.html',
  styleUrls: ['./single-audio-content.component.scss'],
})
export class SingleAudioContentComponent implements OnInit {
  yellow = "#FFC455"
  @Input() audioLink = ""
  @Input() audioTitle = ''
  mediaAudio = JSON.parse(localStorage.getItem("mediaAudio"))
  imageUrl = '';
  enableImage = true;
  isAdults = false;
  enableTextContent = false;
  textContent = "";
  audioLinkUrl = "";
  rowId: number = 0
  moduleName: any = ''
  headerTitle = ''

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, 
     private location: Location, private navigationService: NavigationService, 
    private service: CommonService) {
    // ;
    const audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    this.audioLink = this.mediaAudio + audioUrl.replace(/\~/g, '/');
    this.audioLinkUrl = audioUrl.replace(/\~/g, '/');;
    this.audioTitle = this.route.snapshot.paramMap.get('title');
    this.callText();
    if (this.audioTitle) {
      this.audioTitle = this.audioTitle.replace('-', ' ');
    }
    let rowid: any = this.route.snapshot.paramMap.get('RowId');
     rowid = parseInt(rowid);
    this.rowId = rowid;
    let Id = rowid <= 9 ? '0' + rowid : rowid;
    this.moduleName = this.route.snapshot.paramMap.get('moduleName');
    this.headerTitle = this.moduleName && this.moduleName != 'undefined' ? this.titleCase(this.moduleName) : '';
    if( this.moduleName && this.moduleName != 'undefined') {
      this.imageUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/${this.moduleName.toLowerCase()}/${Id}.webp`;
    }else{
        this.imageUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`;
    }

    let m: any = window.location.href;
    if (m.includes('introduction_to_happierme')) {
      this.enableImage = false
    }

    this.redirectIfGuest()
  }

  ngOnInit() {
    // this.isAdults = SharedService.program
      if (SharedService.ProgramId == ProgramType.Adults) {
          this.isAdults = true;
        } else {
          this.isAdults = false;
        }
    this.setAudioControlsBackground();
  }

  readText(text) {
    if (text === 'Read Text') {
      this.enableTextContent = true;
    } else {
      this.enableTextContent = false;
    }


  }

  callText() {
    let spt = this.audioLinkUrl.lastIndexOf('/');
    let txt = this.audioLinkUrl.slice(spt + 1, this.audioLinkUrl.length);
    txt = txt.replace('mp3', 'txt');
    let s3 = this.audioLinkUrl.slice(1, spt);
    s3 = s3.replace('audios', 'transcripts')
    let obj = {
      "S3Directory": s3 + '/',
      "FileName": txt
    }
    this.service.GetAudioTranscript(obj).subscribe((res) => {
      if (res) {
        this.textContent = res;
        // this.enableTextContent = true;
      }
    })
  }


  redirectIfGuest() {
    const guest = localStorage.getItem('guest') === 'T'
    const hasModule = this.moduleName && this.moduleName != 'undefined'
    const lowerModule = hasModule ? this.moduleName.toLowerCase() : ''
    const isPodcast = hasModule ? lowerModule === 'podcast' : true
    const isSoundscapes = hasModule ? lowerModule === 'soundscapes' : false
    const allow = (isPodcast && this.rowId === 1) || (isSoundscapes && this.rowId === 1)
    if (guest && !allow) {
      const isAdultsProgram = SharedService.ProgramId == ProgramType.Adults
      const url = isAdultsProgram ? '/subscription/start-your-free-trial' : '/teenagers/subscription/start-your-free-trial'
      this.router.navigateByUrl(url)
    }
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? '#FFE8BB' : '#0C2B5F';

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

  titleCase(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    } else {
      this.router.navigate([url]);
    }
  }
}
