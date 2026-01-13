import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";

@Component({
  selector: 'app-micro-learning-inner',
  templateUrl: './micro-learning-inner.page.html',
  styleUrls: ['./micro-learning-inner.page.scss'],
})
export class MicroLearningInnerPage implements OnInit {
  isAdults = true;
  contentId: any;
  
  // Data structure for dynamic inner page
  // Layout values: 1 (Image Top), 2 (Image Center), 3 (Image Bottom)
  contentData = {
    title: '',
    description: '',
    imgUrl: '',
    layout: 1 
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.isAdults = SharedService.ProgramId == ProgramType.Adults;
  }

  ngOnInit() {
    this.contentId = this.route.snapshot.paramMap.get('id');
    this.fetchContent();
  }

  fetchContent() {
    // This would typically be an API call
    // Simulating API response based on ID
    if(this.contentId == '1') {
      this.contentData = {
        title: 'Wisdom for Everyday Life',
        description: 'Micro-learning is about taking small steps every day towards a bigger understanding of yourself. It is not about speed, but about depth of reflection.',
        imgUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/wisdom_shorts.webp',
        layout: 1 // Image Top
      };
    } else {
      this.contentData = {
        title: 'The Art of Noticing',
        description: 'Notice your thoughts as they arise. Don\'t judge them, just observe. This simple practice can change your relationship with your mind.',
        imgUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/background/toc/wisdom_shorts.webp',
        layout: 2 // Image Center
      };
    }
  }

  goBack() {
    this.location.back();
  }

  next() {
    if(this.contentId == '1') {
      this.router.navigate([`/${SharedService.getprogramName()}/micro-learning/inner`, '2']);
    } else {
      this.router.navigate([`/${SharedService.getprogramName()}/micro-learning/end`]);
    }
  }
}
