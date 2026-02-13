import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { CommonService } from "../../../services/common.service";
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-micro-learning-inner',
  templateUrl: './micro-learning-inner.page.html',
  styleUrls: ['./micro-learning-inner.page.scss'],
})
export class MicroLearningInnerPage implements OnInit {
  isAdults = true;
  contentId: any;
  
  screensList = [];
  currentScreenIndex = 0;

  // End screen properties
  resourcesList = [];
  journalText: string = '';
  showSuccessPopup = false;

  contentData = {
    title: '',
    description: '',
    imgUrl: '',
    layout: 1 
  };

  oldContentData: any = null;

  isFromEnd = false;
  isAnimating = false;
  direction = 'forward';
  isReadMarked = false;

  // Touch handling properties
  private touchStartX = 0;
  private touchStartY = 0;
  private touchCurrentX = 0;
  isDragging = false;
  dragOffset = 0;
  private containerWidth = 0;
  private isHorizontalSwipe = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state.fromEnd) {
      this.isFromEnd = true;
      this.direction = 'backward';
    }
  }

  ngOnInit() {
    this.contentId = this.route.snapshot.paramMap.get('id');
    this.getMicroLearningScreens();
    this.getEndScreens();
  }

  getMicroLearningScreens() {
    this.commonService.GetMicrolearningScreens(this.contentId).subscribe((res: any) => {
      if (res && res.length > 0) {
        this.screensList = res;
        this.currentScreenIndex = this.isFromEnd ? res.length : 0;
        this.updateContent();
      }
    }); 
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
    const start = decodedTitle.indexOf('(');
    const end = decodedTitle.indexOf(')', start);
    if (start !== -1 && end !== -1) {
      type = decodedTitle.substring(start + 1, end);
      cleanTitle = (decodedTitle.substring(0, start) + decodedTitle.substring(end + 1)).trim();
    }
    return { title: cleanTitle, url: url, imgUrl: imgUrl, type: type };
  }
  
  updateContent() {
    this.isAnimating = true;
    
    if (this.currentScreenIndex === this.screensList.length && !this.isReadMarked) {
      this.isReadMarked = true;
      this.commonService.clickMicrolearning(this.contentId).subscribe(res => { });
    }

    // Reset scroll position to top for new content
    setTimeout(() => {
      const scrollElements = document.querySelectorAll('.mc_scroll_content');
      if (scrollElements[this.currentScreenIndex]) {
        scrollElements[this.currentScreenIndex].scrollTop = 0;
      }
    }, 50);

    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

  handleTouchStart(event: any) {
    if (this.isAnimating) return;
    this.touchStartX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    this.touchStartY = event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true; // Use true for both to facilitate immediate tracking
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;
    
    const container = document.querySelector('.mc_content_wrapper');
    if (container) {
      this.containerWidth = container.clientWidth;
    }
  }

  handleTouchMove(event: any) {
    if (!this.isDragging || this.isAnimating) return;
    this.touchCurrentX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    const deltaY = (event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY) - this.touchStartY;

    if (!this.isHorizontalSwipe) {
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        this.isHorizontalSwipe = true;
      } else if (Math.abs(deltaY) > 10) {
        return;
      }
    }

    if (this.isHorizontalSwipe) {
      this.dragOffset = deltaX;
      
      // Resistance at boundaries
      if ((this.currentScreenIndex === 0 && this.dragOffset > 0) ||
          (this.currentScreenIndex === this.screensList.length && this.dragOffset < 0)) {
        this.dragOffset /= 3;
      }

      if (event.cancelable) {
        event.preventDefault();
      }
    }
  }

  handleTouchEnd(event: any) {
    if (!this.isDragging) return;
    
    const threshold = this.containerWidth * 0.2;
    const totalItems = this.screensList.length + 1;
    
    if (this.isHorizontalSwipe) {
      if (this.dragOffset < -threshold && this.currentScreenIndex < totalItems - 1) {
        this.next();
      } else if (this.dragOffset > threshold && this.currentScreenIndex > 0) {
        this.goBack();
      } else if (this.dragOffset > threshold && this.currentScreenIndex === 0) {
        this.backToDashboard();
      }
    }
    
    this.isDragging = false;
    this.dragOffset = 0;
    this.isHorizontalSwipe = false;
  }

  getTransform() {
    const baseTranslate = -(this.currentScreenIndex * 100);
    const dragTranslate = this.containerWidth ? (this.dragOffset / this.containerWidth) * 100 : 0;
    return `translateX(${baseTranslate + dragTranslate}%)`;
  }

  fetchContent() {
  }

    goBack() {
    if (this.currentScreenIndex > 0) {
      this.direction = 'backward';
      this.currentScreenIndex--;
      this.updateContent();
    } else {
      this.backToDashboard();
    }
  }

  backToDashboard() {
    this.router.navigate([`/${SharedService.getprogramName()}/micro-learning`]);
  }

  next() {
    if (this.currentScreenIndex < this.screensList.length) {
      this.direction = 'forward';
      this.currentScreenIndex++;
      this.updateContent();
    }
  }

  addJournal() {
    if (!this.journalText) return;
    let userId = JSON.parse(localStorage.getItem("userId"));
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    let data = {
      "JournalId": 0, "JDate": formattedDate, "Title": "Microlearning",
      "Notes": this.journalText, "UserId": userId, "MicrolearningID": this.contentId
    }
    this.commonService.submitJournal(data).subscribe(res => {
      this.journalText = '';
      this.showSuccessPopup = true;
    }, error => { console.log(error); })
  }

  closeSuccessPopup(event: string) {
    this.showSuccessPopup = false;
  }

  navigateToListing() {
    this.backToDashboard();
  }

  goToHome() {
    this.router.navigate([SharedService.getDashboardUrls()]);
  }

  handleResourceClick(resource) {
    if (resource.url) {
      this.router.navigate([decodeURIComponent(resource.url)]);
    }
  }

  getProgressPercentage() {
    if (this.screensList.length === 0) return 0;
    return ((this.currentScreenIndex + 1) / (this.screensList.length + 1)) * 100;
  }

  share() {
    const token = localStorage.getItem("shareToken");
    const baseUrl = SharedService.ProgramId == ProgramType.Adults ? SharedService.AdultsBaseUrl : SharedService.TeenagerBaseUrl;
    const url = baseUrl + this.router.url + (token ? `?t=${token}` : '');

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