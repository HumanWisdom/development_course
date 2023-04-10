import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-adverts-student',
  templateUrl: './adverts-student.page.html',
  styleUrls: ['./adverts-student.page.scss'],
})
export class AdvertsStudentPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router,
    private meta: Meta, private title: Title  ) { }

  ngOnInit() {
    this.title.setTitle('Wisdom for Students - Boost Confidence & Improve Skills')
    this.meta.updateTag({ property: 'title', content: 'Wisdom for Students - Boost Confidence & Improve Skills'})
    this.meta.updateTag({ property: 'description', content: 'Empower your academic success with wisdom for students. Motivate yourself with our motivational blogs, self-confidence speeches, and self-motivational quotes. Enhance your interpersonal skills and communication skills for students. Learn how to deal with anxiety and practice mindfulness meditation for a better life.'})
    this.meta.updateTag({ property: 'keywords', content: 'wisdom for students, motivational blogs for students, self confidence motivational speech, self motivational quotes, self inspirational quotes, communication skills for students, interpersonal skills, deal with anxiety, mindfulness meditation for students, academic success, self-improvement, personal growth'})

    if (!this.router.url.includes('/wisdom-for-students')) {
      window.history.pushState('', '', '/wisdom-for-students');
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
