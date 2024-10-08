import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from '../../../../../../shared/services/navigation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-wisdom-for-workplace-transcript',
  templateUrl: './wisdom-for-workplace-transcript.page.html',
  styleUrls: ['./wisdom-for-workplace-transcript.page.scss'],
})
export class WisdomForWorkplaceTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title,private navigationService:NavigationService,private router:Router) { }

  ngOnInit() {
    this.title.setTitle('Work and Leadership: Strategies for Career Growth and Development')
    this.meta.updateTag({ property: 'title', content: 'Work and Leadership: Strategies for Career Growth and Development' })
    this.meta.updateTag({ property: 'description', content: 'Discover wisdom and insights for career growth and development. Find strategies for effective communication, time management, and more.' })
    this.meta.updateTag({ property: 'keywords', content: 'Professional development,Leadership skills,Effective communication,Time management techniques,Boosting productivity,Workplace wisdom,Wisdom at work,Workplace insights,Leadership tips' })

  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

}
