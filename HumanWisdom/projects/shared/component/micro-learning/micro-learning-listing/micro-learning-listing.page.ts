import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    const excludeList = ['Work', 'Sorrow and loss', 'Addiction', 'For parents', 'Key ideas'];
    this.prefData = SharedService.getPreferenceData().filter(pref => !excludeList.includes(pref.displayName));
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
    this.getUserPref("all");
    
    // Make the "All" button active by default
    setTimeout(() => {
      const allBtn = document.getElementById('all');
      if (allBtn) {
        allBtn.classList.add('active');
      }
    }, 100);
  }

  getMicroLearningList() {
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
        this.microLearningList.forEach((d) => {
          this.prefData.forEach((h) => {
            if (d['preferenceIDs'] && d['preferenceIDs'].split(",").includes(h.id)) {
              h.active = true;
            } else if (!d['preferenceIDs']) {
              h.active = true;
            }
          })
        });
      }
    });
  }

  goBack() {
    this.location.back();
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
    this.selectedPref = '';

    const btns = Array.from(document.getElementsByClassName('btn'));
    for (const b of btns) {
      const btn = b as HTMLElement;
      btn.classList.remove('active');
    }

    const selectedBtn = document.getElementById(type);
    if (selectedBtn) {
      selectedBtn.classList.add('active');
    }

    this.selectedPref = type;
    this.filteredList = this.microLearningList;

    if (type === 'all') {
      this.filteredList = this.microLearningList;
    } else {
      this.filteredList = this.microLearningList.filter((d) =>
        d['preferenceIDs'] && d['preferenceIDs'].split(',').includes(type)
      );
    }
  }

  navigateToInner(item) {
    if (!this.isSubscriber && item.isFree === '0') {
      this.showModal = true;
      return;
    }
    // Logic to navigate to dynamic inner page
    this.commonService.clickMicrolearning(item.id).subscribe(res => {
      const prefix = SharedService.getprogramName();
      this.router.navigate([`/${prefix}/micro-learning/inner`, item.id], { 
        state: { microLearningData: res }
      });
    });
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      // Navigate to free trial when user clicks "Start your free trial"
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }
}
