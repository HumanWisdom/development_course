import { Platform } from "@angular/cdk/platform";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss'],
})
export class CourseHeaderComponent implements OnInit {
  @Input() bookmark: boolean;
  @Input() bg: string;
  @Input() bg_tn: string;
  @Input() path: string; //to go back to the course page from note
  @Input() toc: string;//path of table of contents
  @Input() dashboard: string;//path to the dashboard
  progUrl: string;
  note: any
  t = new Date()
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate())
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  @Output() sendBookmark = new EventEmitter<boolean>();
  socialShare = false
  token = JSON.parse(localStorage.getItem("token"))
  urlT: any
  shared = false
  showheaderbar = true
  address = this.router.url
  modName: any
  scrNumber: any
  progress = localStorage.getItem("progressbarvalue") ? parseFloat(localStorage.getItem("progressbarvalue")) : 0;
  pageaction = localStorage.getItem("pageaction");

  constructor(private router: Router,
    private service: AdultsService,
    private ac: ActivatedRoute,
    public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService
  ) {
    if (this.router.getCurrentNavigation()) {
      this.urlT = this.router.getCurrentNavigation().extractedUrl ? this.router.getCurrentNavigation().extractedUrl.queryParams.t : ''
    }
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  ngOnInit() {
    this.progUrl=this.router.url.substring(0, this.router.url.indexOf('/',1)+1);
    this.showheaderbar = true;
    // console.log(this.ac)
    // var module=this.path.substr(0, this.path.lastIndexOf("/",this.path.lastIndexOf("/")+2));

    // var modLast=module.lastIndexOf("/")
    //this.modName=module.substring(modLast+1);

    var lastSlash = this.path.lastIndexOf("/");
    this.scrNumber = this.path.substring(lastSlash + 2);
    this.getProgress(this.scrNumber)

    this.shared = false
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }

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
    this.socialShare = true

    if (this.urlT) {

      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.urlT}`

    }
    else {

      this.path = "https://humanwisdom.me/" + this.address + `?t=${this.token}`
    }



    //history.replaceState(null, null,'course#'+ this.address+`?t=${this.token}`);
    //history.replaceState(null, null, this.address+`?t=${this.token}`);

  }

  courseNote() {
    this.router.navigate(['/adults/coursenote', { path: this.path }])
  }

  goToToc() {
    this.router.navigate(['/adults/' + this.toc])
  }

  goToDash() {
    if(this.progUrl="/adults/")
      this.router.navigate(['/adults/adult-dashboard'])
    else
        this.router.navigate([this.progUrl +  '/dashboard'])
   
  }

  addNote() {
    this.service.submitJournal({
      "JournalId": 0,
      "JDate": this.minDate,
      "Title": "Module Note",
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

    /* if (!this.ngNavigatorShareService.canShare() &&  (this.platform.isBrowser)   ) {
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
      console.log(response);
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
