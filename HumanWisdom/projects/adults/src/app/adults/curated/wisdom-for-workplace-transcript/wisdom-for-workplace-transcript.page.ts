import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'HumanWisdom-wisdom-for-workplace-transcript',
  templateUrl: './wisdom-for-workplace-transcript.page.html',
  styleUrls: ['./wisdom-for-workplace-transcript.page.scss'],
})
export class WisdomForWorkplaceTranscriptPage implements OnInit {

  constructor(private location:Location, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Wisdom at Work: Strategies for Career Growth and Development')
    this.meta.updateTag({ property: 'title', content: 'Wisdom at Work: Strategies for Career Growth and Development' })
    this.meta.updateTag({ property: 'description', content: 'Discover wisdom and insights for career growth and development. Find strategies for effective communication, time management, and more.' })
    this.meta.updateTag({ property: 'keywords', content: 'Professional development,Leadership skills,Effective communication,Time management techniques,Boosting productivity,Workplace wisdom,Wisdom at work,Workplace insights,Leadership tips' })

  }

  goBack(){
    this.location.back()
  }

}
