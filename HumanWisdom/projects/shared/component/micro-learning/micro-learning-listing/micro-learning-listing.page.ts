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
  tocImage = "https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/micro_learning.webp"; // placeholder
  tocColor = "white";
  
  // Dummy data for now - this would come from API
  microLearningList = [];
  filteredList = [];
  searchResult = [];
  showSearchBox = true;

  constructor(
    private router: Router,
    private location: Location,
    private commonService: CommonService
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  ngOnInit() {
    this.getMicroLearningList();
  }

  getMicroLearningList() {
    this.commonService.GetMicrolearningList(9).subscribe((res: any) => {
      if (res) {
        this.microLearningList = res.map(item => ({
          id: item.microlearningID,
          title: item.Title,
          imgUrl: item.ImageUrl,
          isRead: item.isRead,
          timing: '2' // Default or calculated if available
        }));
        this.filteredList = this.microLearningList;
      }
    });
  }

  goBack() {
    this.location.back();
  }

  searchMicroLearning($event) {
    if ($event == '') {
      this.filteredList = this.microLearningList;
      this.searchResult = [];
    } else {
      this.searchedText = $event;
      this.filteredList = this.microLearningList.filter(it => 
        it.title.toLowerCase().includes(this.searchedText.toLowerCase())
      );
      this.searchResult = [];
    }
    this.toggleBodyScroll(false);
  }

  getAutoCompleteList(value) {
    this.searchedText = value;
    if (value == null || value == "") {
      this.searchResult = [];
      this.filteredList = this.microLearningList;
      this.toggleBodyScroll(false);
    } else {
      this.searchResult = this.microLearningList.filter(it => 
        it.title.toLowerCase().includes(value.toLowerCase())
      );
      this.filteredList = this.searchResult;
      if (this.searchResult.length > 0) {
        this.toggleBodyScroll(true);
      } else {
        this.toggleBodyScroll(false);
      }
    }
  }

  onFocus() {
    if (this.searchedText == '') {
       // this.searchResult = this.microLearningList;
    } else {
      this.searchResult = this.microLearningList.filter(it => 
        it.title.toLowerCase().includes(this.searchedText.toLowerCase())
      );
    }
    if (this.searchResult.length > 0) {
      this.toggleBodyScroll(true);
    }
  }

  clearSearch() {
    this.searchedText = "";
    this.searchResult = [];
    this.filteredList = this.microLearningList;
    this.toggleBodyScroll(false);
  }

  toggleBodyScroll(lock: boolean): void {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  searchEvent(title) {
    this.searchedText = title;
    this.searchResult = [];
    this.toggleBodyScroll(false);
    this.filteredList = this.microLearningList.filter(it => 
      it.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  onFocusOutEvent() {
    // Keep it open for now as in daily practice
  }

  navigateToInner(item) {
    // Logic to navigate to dynamic inner page
    this.toggleBodyScroll(false);
    this.commonService.clickMicrolearning(item.id).subscribe(res => {
      const prefix = SharedService.getprogramName();
      this.router.navigate([`/${prefix}/micro-learning/inner`, item.id], { 
        state: { microLearningData: res }
      });
    });
  }
}
