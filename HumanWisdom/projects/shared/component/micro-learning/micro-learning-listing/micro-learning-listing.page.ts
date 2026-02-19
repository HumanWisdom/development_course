import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { CommonService } from "../../../services/common.service";
import { ProgramType } from "../../../models/program-model";

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
    private activatedRoute: ActivatedRoute
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    this.prefData = SharedService.getPreferenceData();
  }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }

    this.getMicroLearningList();
    this.selectedPref = 'all';
  }

  getMicroLearningList() {
    this.isLoading = true;
    this.commonService.GetMicrolearningList(9).subscribe((res: any) => {
      if (res) {
        this.microLearningList = res.map(item => ({
          id: item.microlearningID,
          title: item.Title,
          imgUrl: item.ImageUrl,
          isRead: item.isRead,
          isFree: item.isFree,
          preferenceIDs: item.PreferenceIDs,
          timing: '2' // Default or calculated if available
        }));
        this.filteredList = this.microLearningList;
                
        // Map available preferences based on the data
        this.prefData.forEach(p => {
          if (p.displayName === 'All' || p.id === '999') p.active = true;
          else p.active = false;
        });

        this.microLearningList.forEach((item) => {
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
        if (fragment) {
          const match = this.prefData.find(d => d.displayName && d.displayName.toLowerCase() === fragment.toLowerCase());
          if (match) {
            this.getUserPref(match.id);
          }
        }
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

  goBack() {
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/search`]);
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
    this.selectedPref = type;

    if (type === 'all' || type === '999') {
      this.filteredList = this.microLearningList;
    } else {
      this.filteredList = this.microLearningList.filter((item) => {
        if (item.preferenceIDs && item.preferenceIDs.toString().trim() !== "") {
          const ids = item.preferenceIDs.toString().split(/,\s*/);
          return ids.includes(type);
        } else if (type === '0') {
          return true;
        }
        return false;
      });
    }
  }

  navigateToInner(item) {
    if (!this.isSubscriber && item.isFree === '0') {
      this.showModal = true;
      return;
    }
    // Logic to navigate to dynamic inner page
    localStorage.removeItem('fromMicroLearningEnd');
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