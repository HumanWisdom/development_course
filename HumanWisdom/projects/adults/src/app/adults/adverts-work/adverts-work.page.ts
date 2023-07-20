import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-adverts-work',
  templateUrl: './adverts-work.page.html',
  styleUrls: ['./adverts-work.page.scss'],
})
export class AdvertsWorkPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router,
    private meta: Meta, private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Wisdom for Work - Self Motivation & Communication Skills')
    this.meta.updateTag({ property: 'title', content: 'Wisdom for Work - Self Motivation & Communication Skills'})
    this.meta.updateTag({ property: 'description', content: 'Enhance your professional life with wisdom for work. Boost your self-motivation and confidence with our self-encouragement quotes. Improve your communication skills for business and workplace success with the guidance from Human Wisdom.'})
    this.meta.updateTag({ property: 'keywords', content: 'wisdom for work, self motivation words, self encouragement quotes, communication skills for business, communication skills for workplace, professional life, self-motivation, confidence, success, communication skills'})


    if (!this.router.url.includes('/wisdom-for-work')) {
      window.history.pushState('', '', '/wisdom-for-work');
    }
  }

  clickbanner(url = '') {
    if (url === '') {
      if (this.platform.IOS || this.platform.SAFARI) {
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } else if (this.platform.ANDROID) {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } else {
      window.open(url)
    }
  }

  routedashboard() {
    this.router.navigate(['/adults/adult-dashboard'])
  }

}
