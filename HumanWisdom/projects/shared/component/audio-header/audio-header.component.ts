import { Platform } from "@angular/cdk/platform";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";

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

  @Output() sendBookmark = new EventEmitter<boolean>();

  constructor(private router: Router,
    private service: AdultsService, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService) {
    this.urlT = this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
   this.progUrl=this.router.url.substring(0, this.router.url.indexOf('/',1)+1);
    console.log("url="+ this.progUrl)

    this.showheaderbar = true;
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }

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
    this.router.navigate(['/adults/coursenote', { path: this.path }])
  }

  goToToc() {
          // this.router.navigate(['/adults/' + this.toc])
          this.router.navigate([this.progUrl + this.toc])
         
  }

  goToDash() {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  goToTranscript() {
    if (this.urlT) {
      this.router.navigate(['/adults/' + this.transcriptPage], { queryParams: { t: this.urlT } })
    }
    else
      this.router.navigate(['/adults/' + this.transcriptPage])
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
    if (this.urlT) {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`

    }
    else {
      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
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
