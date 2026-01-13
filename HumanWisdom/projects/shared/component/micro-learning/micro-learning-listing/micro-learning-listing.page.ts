import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
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
  microLearningList = [
    {
      id: 1,
      title: 'Introduction to Micro-learning',
      timing: '2',
      imgUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/wisdom_shorts.webp',
      isRead: '0'
    },
    {
      id: 2,
      title: 'The Art of Noticing',
      timing: '3',
      imgUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/wisdom_shorts.webp',
      isRead: '1'
    }
  ];
  filteredList = [];

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
    this.filteredList = this.microLearningList;
  }

  ngOnInit() {}

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

  navigateToInner(item) {
    // Logic to navigate to dynamic inner page
    const prefix = SharedService.getprogramName();
    this.router.navigate([`/${prefix}/micro-learning/inner`, item.id]);
  }
}
