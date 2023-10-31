import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-adverts-about',
  templateUrl: './adverts-about.page.html',
  styleUrls: ['./adverts-about.page.scss'],
})
export class AdvertsAboutPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router,
    private meta: Meta, private title: Title 
  ) { }

  ngOnInit() {
    this.title.setTitle('Human Wisdom: About Our Life-Changing App')
    this.meta.updateTag({ property: 'title', content: 'Human Wisdom: About Our Life-Changing App'})
    this.meta.updateTag({ property: 'description', content: 'Discover the mission and team behind Human Wisdom, the life-changing app for personal growth and self-improvement. Join our community and empower your life with daily motivation, mindfulness techniques, powerful quotes, and more.'})
    this.meta.updateTag({ property: 'keywords', content: 'human wisdom, about us, app, mission, team, life-changing, personal growth, self-improvement, community, daily motivation, mindfulness techniques, powerful quotes, self-help'})

    if (!this.router.url.includes('/about-us')) {
      window.history.pushState('', '', '/about-us');
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
