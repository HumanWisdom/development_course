import { Platform } from "@angular/cdk/platform";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramType } from "../../models/program-model";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-audio-header',
  templateUrl: './audio-header.component.html',
  styleUrls: ['./audio-header.component.scss'],
})
export class AudioHeaderComponent implements OnInit {
  @Input() bookmark: boolean;
  @Input() bg_tn: string;
  @Input() bg: string;
  @Input() path: string; //to go back to the course page from note
  @Input() toc: string;//path of table of contents
  @Input() dashboard: string;//path to the dashboard
  @Input() transcriptPage: string;
  @Input() progName : string;
  progUrl: string;
  note: any
  t = new Date()
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate())
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  urlT: any
  shared = false
  token = JSON.parse(localStorage.getItem("token"))
  socialShare = false
  address = this.router.url
  scrNumber: any
  showheaderbar = true
  progress = localStorage.getItem("progressbarvalue") ? parseFloat(localStorage.getItem("progressbarvalue")) : 0;
  baseUrl:string;
  @Output() sendBookmark = new EventEmitter<boolean>();
  programName:string='';
  placeHolder = 'Type your note here...';
  guest = false;
  Subscriber = false;

  constructor(private router: Router,
    private service: AdultsService, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService) {
    this.urlT = this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
  }

  ngOnInit() {
    if(this.guest || !this.Subscriber) {
      this.placeHolder = "Please subscribe to access your online journal";
    }

   this.progUrl=this.router.url.substring(0, this.router.url.indexOf('/',1)+1);
    console.log("url="+ this.progUrl)

    this.showheaderbar = true;
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.programName = this.getProgramTypeName(SharedService.ProgramId)?.toLowerCase().toString();
    if(this.programName=='teenagers'){
      this.programName='';
    }
    var lastSlash = this.path.lastIndexOf("/");
    this.scrNumber = this.path.substring(lastSlash + 2);
    this.getProgress(this.scrNumber)

    if (this.urlT) {
      this.shared = true
      this.socialShare = true
    }
  }

  toggleBookmark() {
    this.bookmark = !this.bookmark
    this.sendBookmark.emit(this.bookmark)
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  addToken() {
    // history.replaceState(null, null, 'Course#'+this.address+`?t=${this.token}`);
    //history.replaceState(null, null,'course#'+this.address+`?t=${this.token}`);
    /*history.replaceState(null, null,this.address+`?t=${this.token}`);
     this.socialShare=true*/
    this.socialShare = true

    if (this.urlT) {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`

    }
    else {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
    }
  }

  courseNote() {
    this.router.navigate(['/'+this.programName+'/coursenote', { path: this.path }])
  }

  goToToc() {
    this.router.navigate(['/'+this.programName+'/' + this.toc])
  }

  goToDash() {
    if(SharedService.ProgramId == ProgramType.Adults){
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else{
      this.programName="";
      this.router.navigate([this.programName +  '/teenager-dashboard'])
  }
  }

  goToTranscript() {
    let progNamePath = this.progName == "teenagers" ?  '/' : '/adults/';
    if (this.urlT) {
      this.router.navigate([progNamePath + this.transcriptPage], { queryParams: { t: this.urlT } })
    }
    else
      this.router.navigate([progNamePath + this.transcriptPage])
  }

  addNote() {
    this.service.submitJournal({
      "JournalId": 0,
      "JDate": this.minDate,
      "Title": "Module",
      "Notes": this.note,
      "UserId": this.userId

    }).subscribe((res) => { },
      error => {
        console.log(error)
      },
      () => {

      })
  }

  share() {
    /* if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser) ) {
      alert(`This service/api is not supported in your Browser`);
      return;
    } */
    this.shareUrl(SharedService.ProgramId);
    if (this.urlT) {
      this.path = this.baseUrl + this.address + `?t=${this.urlT}`

    }
    else {
      this.path = this.baseUrl + this.address + `?t=${this.token}`
    }
    this.ngNavigatorShareService.share({
      title: 'HumanWisdom Program',
      text: 'Hey, check out the HumanWisdom Program',
      url: this.path
    }).then((response) => {
    })
      .catch((error) => {
        console.log(error);
      });
  }

  shareUrl (programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl=SharedService.AdultsBaseUrl;
      break;
      case ProgramType.Teenagers:
        this.baseUrl=SharedService.TeenagerBaseUrl;
       break;
      default:
      this.baseUrl=SharedService.TeenagerBaseUrl;
    }
  }
  getProgramTypeName(value: number): string  {
    const enumKey = Object.keys(ProgramType).find(key => ProgramType[key] === value);
    return enumKey as string;
  }

  getProgress(p) {
    this.service.screenProgress(p)
      .subscribe(
        r => {
          this.progress = parseFloat(r)
          localStorage.setItem("progressbarvalue", this.progress.toString())
          setTimeout(() => {
            this.showheaderbar = true;
          }, 100)
        }
      )

  }
}
