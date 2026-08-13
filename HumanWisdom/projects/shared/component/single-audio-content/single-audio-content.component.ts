import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  mediaAudio: any = '';
  imageUrl = '';
  enableImage = true;
  isAdults = false;
  enableTextContent = false;
  textContent: SafeHtml | string = "";
  /** Explicit flag — SafeHtml objects break `textContent !== ''` checks on some WebViews */
  hasTranscript = false;
  audioLinkUrl = "";
  rowId: number = 0
  moduleName: any = ''
  headerTitle = ''
  isFree: any = ''
  isSoundscapes: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
     private location: Location, private navigationService: NavigationService,
    private service: CommonService, private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef) {
    try {
      const rawMedia = localStorage.getItem("mediaAudio");
      this.mediaAudio = rawMedia ? JSON.parse(rawMedia) : '';
    } catch {
      this.mediaAudio = localStorage.getItem("mediaAudio") || '';
    }

    const audioUrl = decodeURIComponent(this.route.snapshot.paramMap.get('audiolink') || '');
    let path = audioUrl.replace(/\~/g, '/');
    if (path && !path.startsWith('/')) {
      path = '/' + path;
    }
    this.audioLink = (this.mediaAudio || '') + path;
    this.audioLinkUrl = path;
    this.audioTitle = this.route.snapshot.paramMap.get('title');
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
    if (this.headerTitle === 'Soundscapes') {
      this.isSoundscapes = true;
    }
    if( this.moduleName && this.moduleName != 'undefined') {
      this.imageUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/${this.moduleName.toLowerCase()}/${Id}.webp`;
    }else{
        this.imageUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/webp/podcast/${Id}.webp`;
    }

    // Load transcript after route params (incl. moduleName) are set
    this.callText();

    let m: any = window.location.href;
    if (m.includes('introduction_to_happierme')) {
      this.enableImage = false
    }

    this.redirectIfGuest()
  }

  ngOnInit() {
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
    if (!this.audioLinkUrl) return;

    let spt = this.audioLinkUrl.lastIndexOf('/');
    let url = this.audioLinkUrl.slice(spt + 1, this.audioLinkUrl.length);
    let s3 = this.audioLinkUrl.slice(1, spt);
    let s3Trans = s3.replace('audios', 'transcripts');

    const isPodcast =
      (this.moduleName && String(this.moduleName).toLowerCase() === 'podcast') ||
      this.audioLinkUrl.toLowerCase().includes('podcast');

    const extensions = isPodcast ? ['md', 'txt'] : ['txt', 'md'];
    let directories = [s3Trans];

    if (isPodcast) {
      if (!s3Trans.includes('transcripts')) {
        directories.push(s3Trans + '/transcripts');
      }
      // Common podcast transcript locations
      if (!directories.includes('podcasts/transcripts')) {
        directories.push('podcasts/transcripts');
      }
      if (!directories.includes('podcast/transcripts')) {
        directories.push('podcast/transcripts');
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
    let fileName = url.replace(/\.?mp3$/i, '.' + ext).replace(/\.\./g, '.');
    if (!fileName.includes('.')) {
      fileName = url.replace('mp3', ext);
    }

    this.service.GetAudioTranscript({ "S3Directory": dir + '/', "FileName": fileName }).subscribe((res) => {
      const raw = this.normalizeTranscriptResponse(res);
      if (raw && raw.length > 10) {
        this.textContent = this.parseMarkdown(raw);
        this.hasTranscript = true;
        this.cdr.detectChanges();
      } else {
        this.advanceDiscovery(directories, url, extensions, dIdx, eIdx);
      }
    }, () => {
      this.advanceDiscovery(directories, url, extensions, dIdx, eIdx);
    });
  }

  normalizeTranscriptResponse(res: any): string {
    if (res == null) return '';
    if (typeof res === 'string') return res;
    if (typeof res === 'object') {
      return (
        res.Content ||
        res.content ||
        res.Transcript ||
        res.transcript ||
        res.Text ||
        res.text ||
        res.Data ||
        res.data ||
        ''
      );
    }
    return String(res);
  }

  advanceDiscovery(directories, url, extensions, dIdx, eIdx) {
    if (eIdx < extensions.length - 1) {
      this.tryNextTranscript(directories, url, extensions, dIdx, eIdx + 1);
    } else if (dIdx < directories.length - 1) {
      this.tryNextTranscript(directories, url, extensions, dIdx + 1, 0);
    } else {
      // API can fail on iOS (auth/token); load transcript from CDN as last resort
      this.tryCdnTranscriptFallback(directories, url, extensions);
    }
  }

  tryCdnTranscriptFallback(directories: string[], url: string, extensions: string[]) {
    const base =
      (typeof this.mediaAudio === 'string' && this.mediaAudio) ||
      'https://d1tenzemoxuh75.cloudfront.net/';

    const cdnBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const candidates: string[] = [];

    for (const dir of directories) {
      for (const ext of extensions) {
        let fileName = url.replace(/\.?mp3$/i, '.' + ext).replace(/\.\./g, '.');
        if (!fileName.includes('.')) {
          fileName = url.replace('mp3', ext);
        }
        candidates.push(`${cdnBase}/${dir}/${fileName}`);
      }
    }

    this.fetchCdnTranscript(candidates, 0);
  }

  fetchCdnTranscript(candidates: string[], idx: number) {
    if (idx >= candidates.length || this.hasTranscript) return;

    this.http.get(candidates[idx], { responseType: 'text' }).subscribe(
      (raw) => {
        if (raw && raw.length > 10) {
          this.textContent = this.parseMarkdown(raw);
          this.hasTranscript = true;
          this.cdr.detectChanges();
        } else {
          this.fetchCdnTranscript(candidates, idx + 1);
        }
      },
      () => this.fetchCdnTranscript(candidates, idx + 1)
    );
  }


  redirectIfGuest() {
    const guest = localStorage.getItem('guest') === 'T';
    const hasModule = this.moduleName && this.moduleName != 'undefined';
    const lowerModule = hasModule ? this.moduleName.toLowerCase() : '';
    const isPodcast = hasModule ? lowerModule === 'podcast' : false;
    const isSoundscape = hasModule ? lowerModule === 'soundscapes' : false;
    const allow = (this.isFree == 'T') || (isSoundscape && this.rowId === 1);
    if (guest && !allow) {
      const isAdultsProgram = SharedService.ProgramId == ProgramType.Adults;
      const url = isAdultsProgram ? '/subscription/start-your-free-trial' : '/teenagers/subscription/start-your-free-trial';
      this.router.navigateByUrl(url);
    }
  }

  setAudioControlsBackground() {
    const backgroundColor = this.isAdults ? '#FFE8BB' : '#0C2B5F';

    const style = document.createElement('style');
    style.textContent = `
    audio::-webkit-media-controls-enclosure {
      background: ${backgroundColor} !important;
    }
  `;

    document.head.appendChild(style);
  }

  parseMarkdown(text: string): any {
    if (!text) return '';

    let lines = text.split('\n');
    let result = '';
    let inList = false;

    for (let line of lines) {
      let trimmed = line.trim();

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

    // Markdown links [label](url) — before emphasis replaces brackets
    result = result.replace(
      /\[([^\]]+)\]\((https?:\/\/[^)\s]+|www\.[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="transcript-link">$1</a>'
    );

    // Autolink bare URLs not already inside an href/attribute
    result = result.replace(
      /(^|[^"'>])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer" class="transcript-link">$2</a>'
    );

    // Autolink bare domains (e.g. happierme.app) used in podcast transcripts
    result = result.replace(
      /(^|[^"'>\/=])((?:[a-zA-Z0-9-]+\.)+(?:app|com|org|net|io|co|me|uk)(?:\/[^\s<]*)?)/g,
      (match, prefix, domain) => {
        if (prefix.endsWith('://') || prefix === '@') return match;
        return `${prefix}<a href="https://${domain}" target="_blank" rel="noopener noreferrer" class="transcript-link">${domain}</a>`;
      }
    );

    result = result.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/\*([^*]+?)\*/g, '<em>$1</em>');

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  titleCase(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  goBack() {
    if (this.enableTextContent) {
      this.enableTextContent = false;
      return;
    }
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }
}
