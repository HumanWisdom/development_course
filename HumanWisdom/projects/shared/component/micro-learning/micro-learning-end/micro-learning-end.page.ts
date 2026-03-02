import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { CommonService } from "../../../services/common.service";
import { ActivatedRoute } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { HomeStateService } from '../../../services/home-state.service';

@Component({
  selector: 'app-micro-learning-end',
  templateUrl: './micro-learning-end.page.html',
  styleUrls: ['./micro-learning-end.page.scss'],
})
export class MicroLearningEndPage implements OnInit {
  @Input() isSubComponent = false;
  @Input() contentId: any;
  @Output() journalStatus = new EventEmitter<string>();
  isAdults = true;
  resourcesList = [];
  screensList = [];
  journalText: string = '';
  showSuccessPopup = false;
  isAnimating = false;
  direction = 'forward';

  // Touch handling
  private touchStartX = 0;
  private touchStartY = 0;
  private touchCurrentX = 0;
  isDragging = false;
  dragOffset = 0;
  private containerWidth = 0;
  private isHorizontalSwipe = false;

  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private ngNavigatorShareService: NgNavigatorShareService,
    private homeStateService: HomeStateService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (!this.isSubComponent) {
      if (state && state.contentId) {
        this.contentId = state.contentId;
      } else {
        this.contentId = localStorage.getItem("m_learningId");
      }

      if (this.contentId && String(this.contentId).includes('?')) {
        this.contentId = String(this.contentId).split('?')[0];
      }
      localStorage.setItem("m_learningId", this.contentId);
    }
  }

  ngOnInit() {
    if (!this.contentId) {
      this.contentId = localStorage.getItem("m_learningId");
    }

    if (this.contentId && String(this.contentId).includes('?')) {
      this.contentId = String(this.contentId).split('?')[0];
    }

    if (this.contentId) {
      localStorage.setItem("m_learningId", this.contentId);
    }

    if(!this.isSubComponent) {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
      localStorage.setItem("progressbarvalue", "100");
    }

    if(this.contentId) {
      if(!this.isSubComponent) {
        this.commonService.clickMicrolearning(this.contentId).subscribe(res=>{
          
        })
        this.homeStateService.markCardAsSeen(this.contentId.toString());
      }
      this.getEndScreens();
      this.getMicroLearningScreens();
    }
  }

  getMicroLearningScreens() {
    this.commonService.GetMicrolearningScreens(this.contentId).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.screensList = res;
      }
    });
  }

  handleTouchStart(event: any) {
    this.touchStartX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    this.touchStartY = event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true;
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;
    this.containerWidth = document.querySelector('.mc_content_wrapper')?.clientWidth || window.innerWidth;
  }

  handleTouchMove(event: any) {
    if (!this.isDragging) return;
    this.touchCurrentX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    const deltaY = (event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY) - this.touchStartY;

    if (!this.isHorizontalSwipe) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        this.isHorizontalSwipe = true;
      }
    }

    if (this.isHorizontalSwipe) {
      this.dragOffset = deltaX;
      if (this.dragOffset < 0) this.dragOffset /= 3; // Resistance for swiping left at end
      if (event.cancelable) event.preventDefault();
    }
  }

  handleTouchEnd(event?: any) {
    if (!this.isDragging) return;
    const threshold = this.containerWidth * 0.2;
    if (this.isHorizontalSwipe && this.dragOffset > threshold) {
      this.goBack();
    }
    this.isDragging = false;
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;
  }

  getTransform() {
    const dragTranslate = this.containerWidth ? (this.dragOffset / this.containerWidth) * 100 : 0;
    return `translateX(${dragTranslate}%)`;
  }

  getEndScreens() {
    this.commonService.getMicrolearningsEndScreens(this.contentId).subscribe((res: any) => {
      if(res && res.length > 0) {
        const data = res[0];
        this.resourcesList = [
          this.processLink(data.Link1Title, data.Link1Url, data.Link1imgpath),
          this.processLink(data.Link2Title, data.Link2Url, data.Link2imgpath),
          this.processLink(data.Link3Title, data.Link3Url, data.Link3imgpath)
        ];
      }
    });
  }

  processLink(title: string, url: string, imgUrl: string) {
    let decodedTitle = title ? title : '';
    try {
      decodedTitle = decodeURIComponent(decodedTitle);
    } catch (e) {
      console.log('Error decoding title', title);
    }

    let type = 'Resource';
    let cleanTitle = decodedTitle;

    // Extract text inside brackets for type, e.g. "Title (1 min.)" -> type="1 min."
    const start = decodedTitle.indexOf('(');
    const end = decodedTitle.indexOf(')', start);
    if (start !== -1 && end !== -1) {
      type = decodedTitle.substring(start + 1, end);
      cleanTitle = (decodedTitle.substring(0, start) + decodedTitle.substring(end + 1)).trim();
    }

    return {
      title: cleanTitle,
      url: url,
      imgUrl: imgUrl,
      type: type
    };
  }

  goBack() {
    this.direction = 'backward';
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning/inner`, this.contentId], {
      state: { fromEnd: true }
    });
  }

  next() {
    // No next page from the end screen
  }

  goToInnerScreen(){
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning`]);
  }
  addJournal() {
    if (!this.journalText) return;

    let userId = JSON.parse(localStorage.getItem("userId"));
    
    // Format date as YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    let data = {
      "JournalId": 0,
      "JDate": formattedDate,
      "Title": "Microlearning",
      "Notes": this.journalText,
      "UserId": userId,
      "MicrolearningID": this.contentId
    }

    this.commonService.submitJournal(data).subscribe(res => {
      this.journalText = '';
      if(this.isSubComponent) {
        this.journalStatus.emit('added');
      } else {
        this.showSuccessPopup = true;
      }
    }, error => {
      console.log(error);
    })
  }

  closeSuccessPopup(event: string) {
    this.showSuccessPopup = false;
  }

  navigateToListing() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning`]);
  }

  goToHome() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  handleResourceClick(resource) {
    if (resource.url) {
      let url = decodeURIComponent(resource.url);
      if (url && !url.startsWith('http') && !url.startsWith('https')) {
        const programName = SharedService.getprogramName();
        let tempUrl = url.startsWith('/') ? url.substring(1) : url;

        if (!this.isAdults) {
          if (tempUrl.includes('breathing/s29')) {
             tempUrl = tempUrl.replace('breathing/s29', 'breathing/s107');
          } else if (tempUrl.includes('wisdom-exercise/s75')) {
             tempUrl = tempUrl.replace('wisdom-exercise/s75', 'wisdom-exercise/s157');
          }
        }

        if (!tempUrl.startsWith(programName)) {
          url = `/${programName}/${tempUrl}`;
        } else if (!url.startsWith('/')) {
          url = `/${url}`;
        }
      }
      localStorage.setItem('fromMicroLearningEnd', 'true');
      // Store the current micro-learning end page URL so wisdom exercises can navigate back here
      // Robust fix: Always point to the inner flow URL with isEnd=true to ensure correct routing
      const programName = SharedService.getprogramName();
      const returnUrl = `/${programName}/micro-learning/inner/${this.contentId}?isEnd=true`;
      localStorage.setItem('microLearningEndUrl', returnUrl);
      this.router.navigateByUrl(url);
    }
  }

  share() {
    const token = localStorage.getItem("shareToken");
    const baseUrl = SharedService.ProgramId == ProgramType.Adults ? SharedService.AdultsBaseUrl : SharedService.TeenagerBaseUrl;
    const programName = SharedService.getprogramName();
    const url = baseUrl + `/${programName}/micro-learning/inner/${this.contentId}` + (token ? `?t=${token}` : '');

    this.ngNavigatorShareService.share({
      title: 'HappierMe Program',
      text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
      url: url
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}