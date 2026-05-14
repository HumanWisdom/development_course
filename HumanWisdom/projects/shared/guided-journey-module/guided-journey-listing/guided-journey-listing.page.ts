import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../services/shared.service";
import { CommonService } from "../../services/common.service";
import { ProgramType } from "../../models/program-model";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: 'app-guided-journey-listing',
  templateUrl: './guided-journey-listing.page.html',
  styleUrls: ['./guided-journey-listing.page.scss'],
})
export class GuidedJourneyListingPage implements OnInit {
  isAdults = true;
  searchedText = '';
  guidedJourneyList = [];
  filteredList = [];
  isSubscriber = false;
  showModal = false;
  isLoading = true;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  ngOnInit() {
    SharedService.setDataInLocalStorage('NaviagtedFrom', this.router.url);
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }

    this.getGuidedJourneyList();
  }

  getGuidedJourneyList() {
    this.isLoading = true;
    let userid = SharedService.getUserId() || 100;
    let programId = SharedService.ProgramId;
    this.commonService.GetGuidedJourneys(programId, userid).subscribe((res: any) => {
      if (res) {
        const data = Array.isArray(res) ? res : (res.Data || res.data || res.DataList || res.GuidedJourneys || res.Guided_Journeys || res.list || []);
        this.guidedJourneyList = data.map(item => {
          const rawTitle = item.Title || item.title || item.JourneyName || item.Name;
          let title = rawTitle;
          let subtitle = item.Subtitle || item.subtitle || '';
          const days = item.Days || item.days || 0;
          
          if (title && title.includes('(') && title.includes(')')) {
            const parts = title.split('(');
            title = parts[0].trim();
            subtitle = parts[1].replace(')', '').trim().replace(',', ' •');
          }

          if (days > 0) {
            subtitle = days + ' Days';
          }

          return {
            id: item.GuidedJourneyID || item.JourneyID || item.journeyID || item.Id || item.id || item.RowID,
            title: title,
            subtitle: subtitle,
            description: item.Description || item.description,
            imgUrl: this.getImgUrl(item.ImageUrl || item.ImgUrl || item.imgUrl || item.imageUrl),
            isRead: item.isRead || item.IsRead || '0',
            isFree: item.isFree || item.IsFree || '0',
            days: days,
          };
        });
        this.filteredList = this.guidedJourneyList;

        const lastId = localStorage.getItem('lastGuidedJourneyId');
        if (lastId) {
          setTimeout(() => {
            this.scrollToGuidedJourney(lastId);
          }, 400);
        }
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  scrollToGuidedJourney(id) {
    const element = document.getElementById('gj-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      localStorage.removeItem('lastGuidedJourneyId');
    }
  }

  goBack() {
    localStorage.removeItem('lastGuidedJourneyId');
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }
  }

  navigateToInner(item) {
    
    localStorage.setItem('lastGuidedJourneyId', item.id);

    // Navigate to intro page of guided journey
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/guided-journeys/intro`], { queryParams: { journeyId: item.id } });
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }

  getImgUrl(url) {
    if (!url) return 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/51.webp';
    if (url.startsWith('https://') || url.startsWith('http://')) return url;
    if (url.startsWith('/')) return `https://d1tenzemoxuh75.cloudfront.net${url}`;
    return `https://d1tenzemoxuh75.cloudfront.net/${url}`;
  }
}
