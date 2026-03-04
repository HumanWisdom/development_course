import { Platform } from "@angular/cdk/platform";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from "../../../adults/src/app/adults/adults.service";
import { ProgramType } from "../../models/program-model";
import { SharedService } from "../../services/shared.service";
import { NavigationService } from "../../services/navigation.service";
import { ModalService } from "../../services/modal.service";


@Component({
  selector: 'app-audio-header',
  templateUrl: './audio-header.component.html',
})
export class AudioHeaderComponent implements OnInit {
  @Input() bookmark: boolean;
  @Input() bg_tn: string;
  @Input() bg: string;
  @Input() path: string; 
  @Input() toc: string;
  @Input() dashboard: string;
  @Input() transcriptPage: string;
  @Input() progName: string;
  progUrl: string;
  note: any
  t = new Date()
  minDate = this.t.getFullYear() + "-" + this.addZero(this.t.getMonth() + 1) + "-" + this.addZero(this.t.getDate())
  userId: any
  saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  urlT: any
  shared = false
  token = localStorage.getItem("shareToken")
  socialShare = false
  address: any;
  scrNumber: any
  showheaderbar = true
  progress = localStorage.getItem("progressbarvalue") ? parseFloat(localStorage.getItem("progressbarvalue")) : 0;
  baseUrl: string;
  @Output() sendBookmark = new EventEmitter<boolean>();
  programName: string = '';
  placeHolder = 'Type your note here...';
  guest = false;
  Subscriber = false;
  enableAlert = false;
  content = '';
  enablecancel = false;
  isAdult: boolean = false;
  isModalPopupOpen = false;
  isEditClicked = false;

  constructor(private router: Router,
    private service: AdultsService, public platform: Platform,
    private ngNavigatorShareService: NgNavigatorShareService,
    private navigationService:NavigationService,
    private modalService: ModalService) {
    this.urlT = this.router.getCurrentNavigation()?.extractedUrl.queryParams.t
    this.ngNavigatorShareService = ngNavigatorShareService;
    this.guest = localStorage.getItem('guest') === 'T' ? true : false;
    this.Subscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
    this.address = JSON.parse(JSON.stringify(this.router.url));
    this.path = JSON.parse(JSON.stringify(this.router.url));
  }

  ngOnInit() {
    this.isAdult = SharedService.ProgramId == ProgramType.Adults;
    if (this.guest || !this.Subscriber) {
      this.placeHolder = "Start your free trial to access your online journal";
    }

    this.progUrl = JSON.parse(JSON.stringify(this.router.url.substring(0, this.router.url.indexOf('/', 1) + 1)));
    this.showheaderbar = true;
    if (this.saveUsername == false) { this.userId = JSON.parse(sessionStorage.getItem("userId")) }
    else { this.userId = JSON.parse(localStorage.getItem("userId")) }
    this.programName = this.getProgramTypeName(SharedService.ProgramId)?.toLowerCase().toString();
    if (this.programName == 'teenagers') {
      this.programName = '';
    }
    var lastSlash = this.router.url?.lastIndexOf("/");
    this.scrNumber = this.router.url?.substring(lastSlash + 2);
    this.getProgress(this.scrNumber)

    if (this.urlT) {
      this.shared = true
      this.socialShare = true
    }
  }

   onEditIconClick(event?: Event) {
    /* if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.isEditClicked = true;
    this.isModalPopupOpen = true;

    const modalElement = document.getElementById('exampleModalCenter');
    if (!modalElement) {
      return;
    }

    // Ensure classes and styles to show the modal
    modalElement.classList.add('fade', 'in', 'show');
    (modalElement as HTMLElement).style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');

    // Add backdrop if missing
    if (!document.querySelector('.modal-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade in show';
      document.body.appendChild(backdrop);
    }

    // Prevent background scroll
    document.body.classList.add('modal-open'); */

     this.isEditClicked = true;
    this.isModalPopupOpen = true;
    this.modalService.openModal('exampleModalCenter', event);
  }

 

  toggleBookmark() {
    if (this.guest || !this.Subscriber) {
      this.enableAlert = true;
    } else {
      this.bookmark = !this.bookmark
      this.sendBookmark.emit(this.bookmark)
    }
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
    this.router.navigate(['/' + this.programName + '/coursenote', { path: this.path }])
  }

  goToToc() {
    var url = this.navigationService.navigateToBackLink();
    if (url != null && !url.includes('home') && !url.includes('dashboard') && !url.includes('pathway')) {
      this.router.navigateByUrl(url);
      return;
    }

    if (this.toc) {
      let tocUrl = this.toc;
      let prefix = this.isAdult ? '/adults' : '/teenagers';
      if (!tocUrl.startsWith('/')) {
        tocUrl = prefix + '/' + tocUrl;
      } else if (!tocUrl.startsWith(prefix)) {
        tocUrl = prefix + tocUrl;
      }
      this.router.navigate([tocUrl]);
      return;
    }

    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate([SharedService.getDashboardUrls()]);
    }
  }

  goToDash() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.router.navigate(['/adults/adult-dashboard'])
    }
    else {
      this.programName = "";
      this.router.navigate([this.programName + '/teenager-dashboard'])
    }
  }

 /*  goToTranscript() {
    let progNamePath = this.progName == "teenagers" ? '/' : '/adults/';
    if (this.urlT) {
      this.router.navigate([progNamePath + this.transcriptPage], { queryParams: { t: this.urlT } })
    }
    else
      this.router.navigate([progNamePath + this.transcriptPage])
  } */

  addNote() {
    this.service.submitJournal({
      "JournalId": 0,
      "JDate": this.minDate,
      "Title": "Module",
      "Notes": this.note,
      "UserId": this.userId

    }).subscribe((res) => {
      this.content = 'Note has been successfully saved to diary';
      this.enablecancel = false;
      this.enableAlert = true;
     },
      error => {
        console.log(error)
      },
      () => {
        this.content = 'Note has been successfully saved to diary';
        this.enablecancel = false;
        this.enableAlert = true;
      })
      this.CloseModal();
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
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: this.path
    }).then((response) => {
    })
      .catch((error) => {
        console.log(error);
      });
  }

  shareUrl(programType) {
    switch (programType) {
      case ProgramType.Adults:
        this.baseUrl = SharedService.AdultsBaseUrl;
        break;
      case ProgramType.Teenagers:
        this.baseUrl = SharedService.TeenagerBaseUrl;
        break;
      default:
        this.baseUrl = SharedService.TeenagerBaseUrl;
    }
  }
  getProgramTypeName(value: number): string {
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

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    if (event === 'ok') {
      if (!this.guest && !this.Subscriber) {
        this.router.navigate(["/onboarding/add-to-cart"]);
      } else if (this.guest) {
        localStorage.setItem("subscribepage", 'T');
        this.router.navigate(["/onboarding/login"]);
      }
    }
  }

  
  CloseModal() {
   /*  const modalElement = document.getElementById('exampleModalCenter');
    if (!modalElement) {
      return;
    }
    this.isModalPopupOpen = false;
    // Try Bootstrap v5 first
    const bootstrapAny: any = (window as any).bootstrap;
    if (bootstrapAny && bootstrapAny.Modal) {
      let instance = bootstrapAny.Modal.getInstance(modalElement);
      if (!instance) {
        try {
          instance = new bootstrapAny.Modal(modalElement);
        } catch (_) {
          // fall through to manual close
        }
      }
      if (instance && instance.hide) {
        instance.hide();
      }
    }

    this.isModalPopupOpen = false;
    // Fallback: force-close for mixed/legacy markup (v4/v5)
    modalElement.classList.remove('show', 'in');
    modalElement.setAttribute('aria-hidden', 'true');
    (modalElement as HTMLElement).style.display = 'none';

    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.parentElement?.removeChild(b));

    document.body.classList.remove('modal-open');
    (document.body as any).style.paddingRight = '';

    document.body.style.overflow = 'auto';
 */

     this.isModalPopupOpen = false;
    this.modalService.closeModal('exampleModalCenter');
  }

}
