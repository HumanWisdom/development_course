import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { CommonService } from "../../../services/common.service";
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HomeStateService } from '../../../services/home-state.service';

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
  isLoading = true;
  showSuccessPopup = false;
  isReadMarked = false;
  isAnimating = false;
  direction = 'forward';
  isFromEnd = false;

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
    private ngNavigatorShareService: NgNavigatorShareService,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private homeStateService: HomeStateService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state.fromEnd) {
      this.isFromEnd = true;
      this.direction = 'backward';
    }
    this.checkIfComingFromEnd();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contentId = params.get('id');
      if (!this.contentId) {
        this.contentId = localStorage.getItem("m_learningId");
      }
      if (this.contentId && this.contentId.includes('?')) {
        this.contentId = this.contentId.split('?')[0];
      }
      if (this.contentId) {
        localStorage.setItem("m_learningId", this.contentId);
      }
      this.checkIfComingFromEnd();
      this.getMicroLearningScreens();
    });
  }

  private checkIfComingFromEnd() {
    const fromLocalStorage = localStorage.getItem('fromMicroLearningEnd') === 'true';
    const fromQueryParam = this.route.snapshot.queryParamMap.get('isEnd') === 'true';
    if (fromLocalStorage || fromQueryParam) {
      this.isFromEnd = true;
      localStorage.removeItem('fromMicroLearningEnd');
    }
  }

  getMicroLearningScreens() {
    this.isLoading = true;
    this.commonService.GetMicrolearningScreens(this.contentId).subscribe((res: any) => {
      this.isLoading = false;
      if (res && res.length > 0) {
        this.screensList = res;
        
        const savedIndex = localStorage.getItem('ml_index_' + this.contentId);
        const persist = localStorage.getItem('persist_ml_index') === 'true';

        if (this.isFromEnd) {
          this.currentScreenIndex = res.length;
        } else if (persist && savedIndex !== null) {
          this.currentScreenIndex = parseInt(savedIndex);
          // Safety check
          if (this.currentScreenIndex >= res.length) {
            this.currentScreenIndex = 0;
          }
        } else {
          this.currentScreenIndex = 0;
        }

        // Always clear internal persist flag after check
        localStorage.removeItem('persist_ml_index');

        this.updateContent();
      }
    }, error => {
      this.isLoading = false;
    });
  }

  updateContent() {
    this.isAnimating = true;
    
    // Save current index for persistence on back routing
    localStorage.setItem('ml_index_' + this.contentId, this.currentScreenIndex.toString());

    if (this.currentScreenIndex === this.screensList.length && !this.isReadMarked) {
      this.isReadMarked = true;
      this.commonService.clickMicrolearning(this.contentId).subscribe(res => { });
      this.homeStateService.markCardAsSeen(this.contentId.toString());
    }

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
    const target = event.target as HTMLElement;
    // IF USER CLICKED A LINK: Call our manual routing and STOP the swipe logic immediately
    const anchor = target.closest('a');
    if (anchor) {
      this.isDragging = false;
      this.forceRoute(anchor);
      return; 
    }

    if (this.isAnimating) return;
    this.touchStartX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    this.touchStartY = event.type.startsWith('touch') ? event.touches[0].clientY : event.clientY;
    this.touchCurrentX = this.touchStartX;
    this.isDragging = true;
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
      if (event.cancelable) event.preventDefault();
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
    localStorage.removeItem('ml_index_' + this.contentId);
    localStorage.removeItem('persist_ml_index');
    this.router.navigate([`/${SharedService.getprogramName()}/micro-learning`]);
  }

  next() {
    if (this.currentScreenIndex < this.screensList.length) {
      this.direction = 'forward';
      this.currentScreenIndex++;
      this.updateContent();
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
    this.ngNavigatorShareService.share({ title: 'HappierMe', text: 'Share', url });
  }

  sanitizeContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content || '');
  }

  routeUrl(url: string) {
    if (!url) return;
    // Mark as internal link navigation to persist screen index
    localStorage.setItem('persist_ml_index', 'true');
    const prefix = SharedService.getprogramName();
    if (url.startsWith('/')) {
      // Check if it already starts with a program prefix
      if (url.startsWith('/adults') || url.startsWith('/teenagers') || url.startsWith('/youngadults')) {
        this.router.navigateByUrl(url);
      } else {
        this.router.navigateByUrl(`/${prefix}${url}`);
      }
    } else {
      this.router.navigate([`/${prefix}/${url}`]);
    }
  }

  /**
   * Universal Fix: Manually extract any path from the anchor the instant it is touched.
   */
  forceRoute(anchor: HTMLElement) {
    const clickAttr = anchor.getAttribute('(click)') || anchor.getAttribute('click');
    const rlAttr = anchor.getAttribute('[routerlink]') || anchor.getAttribute('[routerLink]') || anchor.getAttribute('routerlink');
    const dataRoute = anchor.getAttribute('data-route');
    const href = anchor.getAttribute('href');

    let path = dataRoute || href;

    if (!path && clickAttr) {
      const match = clickAttr.match(/routeUrl\(['"](.+?)['"]\)/);
      if (match) path = match[1];
    }

    if (!path && rlAttr) {
      path = rlAttr.replace(/['"\[\]]/g, '');
    }

    if (path && path !== "javascript:void(0)") {
      console.log("Manually routing to:", path);
      this.routeUrl(path);
    }
  }

  // Still keeping this just in case, but forceRoute above is more aggressive
  handleContentClick(event: any) {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      event.preventDefault();
      event.stopPropagation();
      this.forceRoute(anchor);
    }
  }
}