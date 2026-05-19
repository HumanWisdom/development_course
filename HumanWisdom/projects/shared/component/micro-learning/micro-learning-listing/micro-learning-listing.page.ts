import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { CommonService } from "../../../services/common.service";
import { ProgramType } from "../../../models/program-model";
import { NavigationService } from "../../../services/navigation.service";

@Component({
  selector: 'app-micro-learning-listing',
  templateUrl: './micro-learning-listing.page.html',
  styleUrls: ['./micro-learning-listing.page.scss'],
})
export class MicroLearningListingPage implements OnInit {
  isAdults = true;
  searchedText = '';
  microLearningList = [];
  filteredList = [];
  prefData = [];
  selectedPref = 'All';
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
    this.prefData = SharedService.getPreferenceData();
    this.prefData.splice(1, 0, {
      id: "UYM",
      displayName: "Understand your mind",
      active: false,
      name: 'Understand your mind'
    });
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

    this.getMicroLearningList();
  }

  getMicroLearningList() {
    this.isLoading = true;
    this.commonService.GetMicrolearningList(SharedService.ProgramId).subscribe((res: any) => {
      if (res) {
        this.microLearningList = res.map(item => ({
          id: item.microlearningID,
          title: item.Title,
          imgUrl: item.ImageUrl,
          isRead: item.isRead,
          isFree: item.isFree,
          preferenceIDs: item.PreferenceIDs,
          isUYM: item.Is_UYM,
          timing: '2' // Default or calculated if available
        }));
        this.filteredList = this.microLearningList;
                
        // Map available preferences based on the data
        this.prefData.forEach(p => {
          if (p.displayName === 'All' || p.id === '999') p.active = true;
          else p.active = false;
        });

        this.microLearningList.forEach((item) => {
          if (item.isUYM === '1') {
            const uymPref = this.prefData.find(p => p.id === 'UYM');
            if (uymPref) uymPref.active = true;
          }
          if (item.preferenceIDs && item.preferenceIDs.toString().trim() !== "") {
            const ids = item.preferenceIDs.toString().split(/,\s*/);
            this.prefData.forEach((pref) => {
              if (ids.includes(pref.id)) {
                pref.active = true;
              }
            });
          } else {
            // If item has no preference IDs, it belongs to 'Other'
            const otherPref = this.prefData.find(p => p.id === '0');
            if (otherPref) otherPref.active = true;
          }
        });

        const fragment = this.activatedRoute.snapshot.fragment;
        const savedTab = localStorage.getItem('microlearningSelectedTab');

        if (fragment) {
          const match = this.prefData.find(d => d.displayName && d.displayName.toLowerCase() === fragment.toLowerCase());
          if (match) {
            this.getUserPref(match.id);
          }
        } else if (savedTab) {
          this.getUserPref(savedTab);
        } else {
          this.getUserPref('all');
        }

        const lastId = localStorage.getItem('lastMicrolearningId');
        if (lastId) {
          setTimeout(() => {
            this.scrollToMicroLearning(lastId);
          }, 400);
        }

        setTimeout(() => {
          this.scrollToActiveTab();
        }, 200);
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  goBack() {
    localStorage.removeItem('microlearningSelectedTab');
    localStorage.removeItem('lastMicrolearningId');
    var url = this.navigationService.navigateToBackLink();
    if (url != null) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    }
  }

  searchMicroLearning($event) {
    if ($event == '') {
      this.filteredList = this.microLearningList;
    } else {
      this.searchedText = $event;
      this.filteredList = this.microLearningList.filter(it => 
        it.title.toLowerCase().includes(this.searchedText.toLowerCase())
      );
    }
  }

  getUserPref(type) {
    if (type === '999') type = 'all';
    this.selectedPref = type;

    if (type === 'all') {
      this.filteredList = this.microLearningList;
    } else {
      this.filteredList = this.microLearningList.filter((item) => {
        if (type === 'UYM') {
          return item.isUYM === '1';
        }
        if (item.preferenceIDs && item.preferenceIDs.toString().trim() !== "") {
          const ids = item.preferenceIDs.toString().split(/,\s*/);
          return ids.includes(type);
        } else if (type === '0') {
          return true;
        }
        return false;
      });
    }

    setTimeout(() => {
      this.scrollToActiveTab();
    }, 200);
  }

  scrollToActiveTab() {
    if (!this.selectedPref) return;
    const id = this.selectedPref.toString().toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  scrollToMicroLearning(id) {
    const element = document.getElementById('ml-' + id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      localStorage.removeItem('lastMicrolearningId');
    }
  }

  navigateToInner(item) {
    if (!this.isSubscriber && item.isFree === '0') {
      this.showModal = true;
      return;
    }
    // Logic to navigate to dynamic inner page
    localStorage.removeItem('fromMicroLearningEnd');
    localStorage.removeItem('ml_index_' + item.id);
    localStorage.removeItem('persist_ml_index');
    
    localStorage.setItem('microlearningSelectedTab', this.selectedPref);
    localStorage.setItem('lastMicrolearningId', item.id);

    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning/inner`, item.id]);
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      // Navigate to free trial when user clicks "Start your free trial"
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }
}