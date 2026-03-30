import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../services/common.service';
import { NavigationService } from '../../services/navigation.service';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  isFree: any = ''


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, 
     private location: Location, private navigationService: NavigationService, 
    private service: CommonService, private sanitizer: DomSanitizer) {
    // ;
    const audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink'))
    this.audioLink = this.mediaAudio + audioUrl.replace(/\~/g, '/');
    this.audioLinkUrl = audioUrl.replace(/\~/g, '/');;
    this.audioTitle = this.route.snapshot.paramMap.get('title');
    this.callText();
    if (this.audioTitle) {
      this.audioTitle = decodeURIComponent(this.audioTitle).replace(/-/g, ' ');
    }
    let rowid: any = this.route.snapshot.paramMap.get('RowId');
     rowid = parseInt(rowid);
    this.rowId = rowid;
    let Id = rowid <= 9 ? '0' + rowid : rowid;
    this.moduleName = this.route.snapshot.paramMap.get('moduleName');
    this.isFree= this.route.snapshot.paramMap.get('enable');

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
    if (text === 'Read text') {
      this.enableTextContent = true;
    } else {
      this.enableTextContent = false;
    }


  }

  callText() {
    let spt = this.audioLinkUrl.lastIndexOf('/');
    let url = this.audioLinkUrl.slice(spt + 1, this.audioLinkUrl.length);
    let s3 = this.audioLinkUrl.slice(1, spt);
    let s3Trans = s3.replace('audios', 'transcripts');

    const extensions = ['txt', 'md'];
    let directories = [s3Trans];

    if (this.moduleName === 'podcast' || this.audioLinkUrl.includes('podcasts')) {
      if (!s3Trans.includes('transcripts')) {
        directories.push(s3Trans + '/transcripts');
      }
    }

    if (s3 !== s3Trans && !directories.includes(s3)) {
      directories.push(s3);
    }

    this.tryNextTranscript(directories, url, extensions, 0, 0);
  }

  tryNextTranscript(directories, url, extensions, dIdx, eIdx) {
    if (dIdx >= directories.length) return;

    let dir = directories[dIdx];
    let ext = extensions[eIdx];
    let fileName = url.replace('mp3', ext);

    this.service.GetAudioTranscript({ "S3Directory": dir + '/', "FileName": fileName }).subscribe((res) => {
      if (res && res !== "" && res.length > 10) {
        this.textContent = this.parseMarkdown(res);
      } else {
        this.advanceDiscovery(directories, url, extensions, dIdx, eIdx);
      }
    }, () => {
      this.advanceDiscovery(directories, url, extensions, dIdx, eIdx);
    });
  }

  advanceDiscovery(directories, url, extensions, dIdx, eIdx) {
    if (eIdx < extensions.length - 1) {
      this.tryNextTranscript(directories, url, extensions, dIdx, eIdx + 1);
    } else if (dIdx < directories.length - 1) {
      this.tryNextTranscript(directories, url, extensions, dIdx + 1, 0);
    }
  }


  redirectIfGuest() {
    const guest = localStorage.getItem('guest') === 'T';
    const hasModule = this.moduleName && this.moduleName != 'undefined';
    const lowerModule = hasModule ? this.moduleName.toLowerCase() : '';
    const isPodcast = hasModule ? lowerModule === 'podcast' : false;
    const isSoundscapes = hasModule ? lowerModule === 'soundscapes' : false;
    const allow = (this.isFree == 'T') || (isSoundscapes && this.rowId === 1);
    if (guest && !allow) {
      const isAdultsProgram = SharedService.ProgramId == ProgramType.Adults;
      const url = isAdultsProgram ? '/subscription/start-your-free-trial' : '/teenagers/subscription/start-your-free-trial';
      this.router.navigateByUrl(url);
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

  parseMarkdown(text: string): any {
    if (!text) return '';
    
    // Convert bullet points (- or *) to list items
    let lines = text.split('\n');
    let result = '';
    let inList = false;

    for (let line of lines) {
      let trimmed = line.trim();

      // Horizontal rule: lines that are exactly ---
      if (trimmed === '---') {
        if (inList) {
          result += '</ul>';
          inList = false;
        }
        const hrColor = this.isAdults ? '#000000' : '#ffffff';
        result += `<hr style="border: none; margin: 0; border-top: 1px solid ${hrColor};"/>`;
        continue;
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) {
          result += '<ul style="padding-left: 20px;">';
          inList = true;
        }
        result += '<li style="margin-bottom: 5px;">' + trimmed.substring(2) + '</li>';
      } else {
        if (inList) {
          result += '</ul>';
          inList = false;
        }
        if (trimmed === '') {
          result += '<br/>';
        } else {
          result += line + '<br/>';
        }
      }
    }
    if (inList) result += '</ul>';

    // Bold + italic (***text***) — must be replaced before bold and italic individually
    result = result.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

    // Bold text (**text**)
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic text (*text*) — single asterisk, not part of ** or ***
    result = result.replace(/\*([^*]+?)\*/g, '<em>$1</em>');
    
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  titleCase(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  goBack() {
    let historyLength = this.navigationService.getHistoryLength ? this.navigationService.getHistoryLength() : 0;
    if (historyLength <= 1) {
      this.router.navigateByUrl(SharedService.getDashboardUrls());
      return;
    }

    var url = this.navigationService.navigateToBackLink();
    if (url == null || url.includes('home') || url.includes('dashboard')) {
      let navFrom = SharedService.getDataFromLocalStorage('NaviagtedFrom');
      if (navFrom && navFrom != null && navFrom != 'null') {
        this.router.navigateByUrl(navFrom);
      } else {
        this.location.back();
      }
    } else {
      this.router.navigate([url]);
    }
  }
}
