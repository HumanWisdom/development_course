import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-adverts-hwp-app',
  templateUrl: './adverts-hwp-app.page.html',
  styleUrls: ['./adverts-hwp-app.page.scss'],
})
export class AdvertsHwpAppPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router,
    private location:Location,
    private meta: Meta, private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Human Wisdom App - Personal Growth & Wellness')
    this.meta.updateTag({ property: 'title', content: 'Human Wisdom App - Personal Growth & Wellness'})
    this.meta.updateTag({ property: 'description', content: 'Enhance your personal growth and wellness with the Human Wisdom applications. Discover mindfulness techniques, daily inspirational quotes, strong relationship quotes, and communication skills to improve your life. Get access to our mindfulness app to reduce anxiety and live a happier life.'})
    this.meta.updateTag({ property: 'keywords', content: 'human wisdom applications, mindfulness techniques, daily inspirational quotes, motivational quotes, communication skills, relationship quotes, reduce anxiety, mindfulness app, self-improvement, personal growth, wellness, mental health, human wisdom, life coach'})


    if (!this.router.url.includes('/applications')) {
      window.history.pushState('', '', '/applications');
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
  
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
  
  }
}
